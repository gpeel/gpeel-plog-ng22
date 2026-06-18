### Le problème

L'erreur **E403** indique que npm exige une **authentification à deux facteurs (2FA)** ou un **token d'accès granulaire
avec bypass 2FA** pour publier le package `@gpeel/plog`.

Ce n'est pas un problème de code — c'est une exigence de sécurité de **npmjs.org**.

### Solutions

#### Option 1 : Activer la 2FA sur votre compte npm (recommandé)

1. Connectez-vous sur [npmjs.com](https://www.npmjs.com)
2. Allez dans **Account Settings** → **Security**
3. Activez **Two-Factor Authentication** (au minimum pour la publication)
4. Utilisez une app d'authentification (Google Authenticator, Authy, etc.)
5. Relancez `npm publish --access public` — npm vous demandera le code OTP :
   ```
   npm publish --access public --otp=123456
   ```

#### Option 2 : Créer un token d'accès granulaire

1. Sur [npmjs.com](https://www.npmjs.com), allez dans **Access Tokens**
2. Créez un nouveau **Granular Access Token**
3. Cochez l'option **Bypass 2FA** lors de la création
4. Configurez le token localement :
   ```
   npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN
   ```
5. Relancez la publication

#### Option 3 : Publier avec OTP en une commande

Si la 2FA est déjà activée, ajoutez simplement `--otp` à votre script de publication :

```
cd ./dist/gpeel/plog && npm publish --access public --otp=VOTRE_CODE
```
