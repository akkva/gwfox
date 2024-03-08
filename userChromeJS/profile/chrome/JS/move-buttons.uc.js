// ==UserScript==
// @name     Move unmovable
// @description     Just moves unmovable buttons
// ==/UserScript==

(function () {
    function init() {
	let toolbar = document.getElementById("TabsToolbar");
	let back = document.getElementById("back-button");
	let forward = document.getElementById("forward-button");
	let reload = document.getElementById("reload-button");
        let stop = document.getElementById("stop-button");
    toolbar._customizationTarget.prepend(back);
    back.after(forward);
	toolbar._customizationTarget.appendChild(reload);
        toolbar._customizationTarget.appendChild(stop);
    }
	_ucUtils.windowIsReady(window)
	.then(()=>{
	  init();
	});
})();
