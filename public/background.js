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
   chrome.tabs.executeScript(null, { file: "/static/js/extension.js" }, () => {
      chrome.tabs.sendMessage(tab.id, { text: info.selectionText, show: true });
   });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   console.log("TRIGGERED ON MESSAGE", request, sender, sendResponse);
   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, request);
   });
});

chrome.browserAction.onClicked.addListener(function (tab) {
   chrome.tabs.executeScript(null, { file: "/static/js/extension.js" });
});
