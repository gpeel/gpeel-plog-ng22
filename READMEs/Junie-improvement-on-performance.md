### Possibilités pour éviter l'évaluation des arguments

Le problème : quand on écrit `Plog.debug('data', JSON.stringify(bigObject))`, le `JSON.stringify` est exécuté **même
si `Plog.debug` est `fnNull`**, car JavaScript évalue toujours les arguments avant d'appeler la fonction.

Voici les approches possibles :

---

#### 1. Passer une fonction (lazy evaluation)

```typescript
Plog.debug(() => ['data', JSON.stringify(bigObject)]);
```

L'idée : `fnNull` n'appelle jamais la fonction, donc les arguments coûteux ne sont jamais évalués. Quand le logger est
actif, il appelle la fonction pour obtenir les arguments.

**Inconvénient majeur** : on perd le `console.log.bind()` et donc les **logs clickables**. Il faudrait un wrapper qui
appelle la fonction puis `console.log(...)`, ce qui casse la navigation vers le code source. C'est le cœur de Plog qui
est sacrifié.

---

#### 2. Vérification avant l'appel (pattern guard)

```typescript
Plog.debug && Plog.debug('data', JSON.stringify(bigObject));
```

Mais ça ne marche pas car `fnNull` est truthy. Il faudrait que les loggers désactivés soient `undefined` ou `null` au
lieu de `fnNull` :

```typescript
// Dans plog.config.ts
export const Plog: Record<string, ((...args: any[]) => void) | undefined> = {
  debug: undefined,
  // ...
};
```

Puis dans le code :

```typescript
Plog.debug?.('data', JSON.stringify(bigObject));
```

Avec l'optional chaining `?.`, si `Plog.debug` est `undefined`, l'expression court-circuite et les arguments ne sont *
*pas évalués**.

**Avantage** : quand le logger est actif (via `console.log.bind`), les logs restent **clickables** ✅  
**Inconvénient** : il faut écrire `Plog.debug?.()` au lieu de `Plog.debug()` partout. C'est un peu plus verbeux.

---

#### 3. Proxy (transparent mais complexe)

```typescript
export const Plog = new Proxy({} as Record<string, any>, {
  get(target, prop: string) {
    return target[prop]; // undefined si pas configuré
  }
});
```

Même principe que l'option 2 avec `?.`, mais le Proxy gère dynamiquement les clés. On perd par contre l'autocomplétion
IDE sauf si on type le Proxy correctement.

---

#### 4. Approche pragmatique (recommandée) : ne rien changer

En pratique, le coût d'évaluation des arguments est **négligeable** dans 99% des cas. Les arguments typiques sont des
strings et des objets déjà en mémoire :

```typescript
Plog.debug('user loaded', user);        // aucun coût
Plog.debug('count', items.length);       // négligeable
```

Le seul cas problématique est la sérialisation explicite (`JSON.stringify`, `.toString()` complexe). Et dans ce cas, le
développeur peut simplement écrire :

```typescript
if (Plog.debug !== fnNull) {
  Plog.debug('data', JSON.stringify(bigObject));
}
```

---

### Résumé

| Approche                               | Logs clickables | Syntaxe                   | Complexité |
|----------------------------------------|:---------------:|---------------------------|:----------:|
| `fnNull` actuel                        |        ✅        | `Plog.debug(...)`         |   Simple   |
| Lazy function                          |        ❌        | `Plog.debug(() => [...])` |  Moyenne   |
| Optional chaining (`undefined` + `?.`) |        ✅        | `Plog.debug?.(...)`       |   Simple   |
| Ne rien changer + doc                  |        ✅        | `Plog.debug(...)`         |   Aucune   |

**Ma recommandation** : l'approche **optional chaining** (`?.`) est le meilleur compromis si vous voulez vraiment
résoudre ce problème — elle garde les logs clickables et évite l'évaluation. Sinon, l'approche pragmatique (documenter
le cas rare) est tout à fait valable.
