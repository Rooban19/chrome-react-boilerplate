/** @format */

chrome.runtime.onInstalled.addListener(() => {
   chrome.contextMenus.create({
      id: "sampleContextMenu",
      title: "Save to typeless",
      contexts: ["selection"],
   });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
   console.log("Context menu item clicked:", info, tab);
   chrome.tabs.executeScript(null, { file: "/static/js/extension.js" });
   // if (tab.id) {
   //    injectAndSendMessage(tab.id, info, tab, "overlay");
   // }
});

chrome.browserAction.onClicked.addListener(function (tab) {
   chrome.tabs.executeScript(null, { file: "/static/js/extension.js" });
});
