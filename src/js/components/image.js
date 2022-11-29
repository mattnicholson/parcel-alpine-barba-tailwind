import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

import { init } from "/src/js/utils/alpine";

Alpine.plugin(intersect);

/*

Description:
--------------
Lazy image loader

Example Usage:
---------------
<div x-data="image" x-bind="lazy" data-src="/path/to/image.jpg">

</div>

*/

init(() => {
	Alpine.data("image", () => ({
		isLoading: false,
		loaded: false,
		state() {
			if (this.loaded) return "loaded";
			if (this.isLoading) return "loading";
			return "passive";
		},
		init(args) {
			//console.log("init", this, this.$el);
		},
		setImage() {
			let src = this.$el.getAttribute("data-src");
			if (src) {
				this.$el.innerHTML = `<img src="${src}" />`;
			}
		},
		load() {
			let src = this.$el.getAttribute("data-src");

			if (src) {
				this.isLoading = true;
				let i = new Image();
				i.onload = () => {
					this.isLoading = false;
					this.loaded = true;
					this.setImage();
				};
				i.src = src;
			}
		},
		lazy: {
			[":class"]() {
				return `Image--${this.state()}`;
			},
			["x-intersect.once"]() {
				this.load();
			},
		},
	}));
});
