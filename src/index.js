// Modules
import Alpine from "alpinejs";
import gsap from "gsap";
import barba from "@barba/core";

// Utils
import { ready } from "./js/utils/dom";
import { init } from "./js/utils/alpine";

// State — (app-specific) components that deal with specific state values in the alpine store
import "./js/state/page";
import "./js/state/darkMode";
import "./js/state/route";

// Components - (app-agnostic) components that react to props in a consistent way
import "./js/components/transitionText";
import "./js/components/dropdown";
import "./js/components/image";

// App
ready(() => {
	// Init barba
	barba.init({
		transitions: [
			{
				name: "opacity-transition",
				leave(data) {
					return gsap.to(data.current.container, {
						opacity: 0,
						duration: 0.2,
					});
				},
				enter(data) {
					gsap.set(data.current.container, { display: "none" });
					data.current.container.innerHTML = "";
					window.scrollTo(0, 0);
					return gsap.from(data.next.container, {
						opacity: 0,
						duration: 0.6,
					});
				},
			},
		],
	});

	// Start Alpine
	Alpine.start();
});

// Expose vars
window.Alpine = Alpine;
