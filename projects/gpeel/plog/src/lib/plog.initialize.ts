import {provideAppInitializer} from '@angular/core';
import {Plog, PlogConfig} from './plog.config';
import {PLOG_CONFIG_DEFAULT} from './PLOG_CONFIG_DEFAULT';

let initialized = false;


export function plogProviders(plogConfig: PlogConfig) {
  return [
    // this replaces APP_INITIALIZER deprecated
    provideAppInitializer(() => {
      if (!initialized) {
        if (!plogConfig) {
          console.log('****************************');
          console.log(
            'YOU DID NOT initialize Plog explicitly =>  Fallback to using the default Plog config',
          );
          console.log('If you want something else configure a local plog-config.ts file');
          console.log('And initialize Plog with providePlog(plogConfig)');
          console.log('Default and example is in file node_module/@gpeel/plog/src/lib/PLOG_CONFIG_DEFAULT.ts');
          console.log('****************************');
          plogConfig = PLOG_CONFIG_DEFAULT;
        }
        initialize(plogConfig);
        initialized = true;
      }
    }),
  ];
}


type Indexable = Record<string, any>;

export function initialize(plogConfig: PlogConfig): void {

  // console.log('INIT');

  Object.keys(plogConfig).forEach(key => {
    const maybeArray = plogConfig[key];
    let prefix = key;
    let color: string;
    if (maybeArray instanceof Array) {
      prefix = maybeArray[1];
      color = maybeArray[0];
    } else {
      color = maybeArray;
    }
    // console.log('KEY', key, color);
    let prefixCapitalized = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    prefixCapitalized = prefixCapitalized.padEnd(5, ' ');

    if (color === 'test' || color === 'no-css') {
      (Plog as Indexable)[key] = console.log.bind(console, prefixCapitalized);

    } else {
      (Plog as Indexable)[key] = console.log.bind(console, `%c${prefixCapitalized}`, `${color}`);
      // When the user will use it, the following will be executed =>
      // console.info(`%c${prefixCapitalized}`, `${color}`, "message" )
    }
  });
}
