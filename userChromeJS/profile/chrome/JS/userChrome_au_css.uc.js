// ==UserScript==
// @name           userChrome_author_css
// @namespace      userChrome_Author_Sheet_CSS
// @version        0.0.5
// @description    Load userChrome.au.css file as author sheet from resources folder using chrome: uri. The file is loaded only into the document where this script runs which by default is browser.xhtml
// @onlyonce
// @startup        preloadedAuthorSheet
// ==/UserScript==

(function () {
  // define a startup object for the script loader to execute
  // wherever this script is loaded
  _ucUtils.sharedGlobal.preloadedAuthorSheet = {
    sheet: null,
    _startup: function(win){
      if(!win || !this.sheet){
        return
      }
      win.windowUtils.addSheet(this.sheet,Ci.nsIDOMWindowUtils.AUTHOR_SHEET);
    }
  };
  // The next things execute only once per sessions because of @onlyonce in the header
	let sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
  try{
    // Try to preload the file and save it to global area
    _ucUtils.sharedGlobal.preloadedAuthorSheet.sheet = sss.preloadSheet(makeURI("chrome://userChrome/content/userChrome.au.css"), sss.AUTHOR_SHEET);
  }catch(e){
    console.error(`Could not pre-load userChrome.au.css: ${e.name}`)
  }
})();