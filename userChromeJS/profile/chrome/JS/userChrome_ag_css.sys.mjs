// ==UserScript==
// @name           userChrome_agent_css
// @namespace      userChrome_Agent_Sheet_CSS
// @version        0.0.7
// @description    Load userChrome.ag.css as agent sheet from resources folder using chrome: uri
// ==/UserScript==

(function () {
	let sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
  
  // Try to load userChrome.ag.css as agent sheet
  // WARNING - agent sheets loaded like this affect each and every document you load including web sites. So be careful with your custom styles.
  
  try{
    sss.loadAndRegisterSheet(Services.io.newURI("chrome://userChrome/content/userChrome.ag.css"), sss.AGENT_SHEET);
  }catch(e){
    console.error(`Could not load userChrome.ag.css: ${e.name}`)
  }
})();