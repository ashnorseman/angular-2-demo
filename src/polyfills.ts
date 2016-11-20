/**
 * Polyfills needed by Angular 2 and is loaded before the app
 */


// Safari 7 & 8, IE 9 & 10 & 11, Android 4.1+
import 'core-js/es6';
import 'core-js/es7';

// NgClass: IE 9
// NgClass on SVG elements: IE 10 & 11
import './venders/classList';

// Http when sending and receiving binary data: IE 9
import './venders/typedarray';
import './venders/Blob';
import './venders/formdata';

// Animations: all but Chrome and Firefox, not supported in IE9
import 'web-animations-js';

// RxJS
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

// Others
import 'zone.js/dist/zone';
