-/**
 * @author Piotr Badełek
 * @license MIT
 * navigator.doNotTrack polyfill for IE9+, firefox 9-31 and edge 16-
 */

"use strict";

if (!navigator.doNotTrack) {
	/* Using var instead of let only because this is supposed to work on ie9 */
	var dnt;
	if (window.msDoNotTrack) {
		dnt = window.msDoNotTrack;
	} else {
		dnt = window.doNotTrack;
	};
	if (dnt == "no") {
		dnt = 0;
	} else if (dnt == "yes") {
		dnt = 1;
	} else {
		dnt = 0;
	};
	navigator.doNotTrack = dnt;
};
