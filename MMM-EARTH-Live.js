/* Magic Mirror
 * Module: MMM-EARTH-Live
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-EARTH-Live",{

	defaults: {
			height:"270px",
			width:"480px",
            animationSpeed: "0",
            updateInterval: 60 * 60 * 1000,
	},

    start: function () {
		self = this;

    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0);
    }, this.config.updateInterval);

	},

	getStyles: function() {
        return ["MMM-EARTH-Live.css"];
    },

	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
    iframe.src="http://www.ustream.tv/embed/17074538?html5ui?autoplay=1";



		// <iframe width="480" height="270" src="http://www.ustream.tv/embed/17074538?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>




		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_EARTH') {
            this.hide(1000);
        }  else if (notification === 'SHOW_EARTH') {
            this.show(1000);
        }

    },

});
