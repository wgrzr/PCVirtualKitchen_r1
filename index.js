import screenfull from 'screenfull';
import { scenes } from './loadScenes.js';
import { switchScene } from './helpers';


// Grab elements from DOM.
const fullscreenToggleElement = document.querySelector('#fullscreenToggle');

// Detect desktop or mobile mode.
if (window.matchMedia) {
	const setMode = function () {
		if (mql.matches) {
			document.body.classList.remove('desktop');
			document.body.classList.add('mobile');
		}
		else {
			document.body.classList.remove('mobile');
			document.body.classList.add('desktop');
		}
	};
	const mql = matchMedia('(max-width: 500px)');
	setMode();
	// mql.addEventListener(setMode);
}
else {
	document.body.classList.add('desktop');
}

// Detect whether we are on a touch device.
document.body.classList.add('no-touch');

window.addEventListener('touchstart', function (_e) {
	document.body.classList.remove('no-touch');
	document.body.classList.add('touch');
});

if (screenfull.isEnabled) {
	document.body.classList.add('fullscreen-enabled');
	fullscreenToggleElement.addEventListener('click', function () {
		screenfull.toggle();
	});
	screenfull.on('change', function () {
		if (screenfull.isFullscreen) {
			fullscreenToggleElement.classList.add('enabled');
		}
		else {
			fullscreenToggleElement.classList.remove('enabled');
		}
	});
}
else {
	document.body.classList.add('fullscreen-disabled');
	fullscreenToggleElement.setAttribute('href', 'https://pc-dev2.netlify.app');
	fullscreenToggleElement.setAttribute('target', '_blank');
	fullscreenToggleElement.setAttribute('rel', 'noreferrer');
}

switchScene(scenes[0]);

