import { access } from 'fs';
import { tokenKey } from '@angular/core/src/view';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'https://api.github.com/users/',
  api_key: '21e2607088e114d6f1555d2b174c7ec7e011748c',
  // apiRepokey: '/repos?access_token=21e2607088e114d6f1555d2b174c7ec7e011748c',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
