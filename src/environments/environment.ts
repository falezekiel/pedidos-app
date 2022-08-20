// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false,
  firebase: {apiKey: "AIzaSyDEx001gVwEgTU_Jmd3oXJ-NxUPUi8_fFk",
  authDomain: "yopon-lomos.firebaseapp.com",
  projectId: "yopon-lomos",
  storageBucket: "yopon-lomos.appspot.com",
  messagingSenderId: "846096611993",
  appId: "1:846096611993:web:f0ffce86764a26391fd608"
}
};
 




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import initializeApp from 'firebase/app';
