/** @format */

chrome.browserAction.onClicked.addListener(function (tab) {
   chrome.tabs.executeScript({
      code: `console.log("Extension is working");`,
   });
});
