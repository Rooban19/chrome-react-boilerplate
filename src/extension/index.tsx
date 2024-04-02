/**
 * global chrome
 *
 * @format
 */

/** @format */

import * as React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

import "./index.css";

const Extension = () => {
   const closeExtension = () => {
      chrome.runtime.sendMessage({ show: false });
   };

   return (
      <div>
         <h2 onClick={closeExtension}>Close this</h2>
         <h1 className="extension-header">Extension is working</h1>
         <button>This button has problems with styles</button>
      </div>
   );
};
// Add our extension to the document
let extensionRoot = document.getElementById("extension-host");
if (extensionRoot) {
   // Create the shadow root
   const shadowRoot = extensionRoot.shadowRoot;

   if (shadowRoot) {
      let div = shadowRoot.getElementById("extension");
      if (!div) {
         // Create a div element
         var linkNode = document.createElement("link");
         linkNode.type = "text/css";
         linkNode.rel = "stylesheet";
         linkNode.href = "//fonts.googleapis.com/css?family=Inter";
         document.head.appendChild(linkNode);
         div = document.createElement("div");
         div.setAttribute("id", "extension");
         shadowRoot.appendChild(div);
         chrome.runtime.onMessage.addListener((request: any, sender: any, sendResponse: any) => {
            console.log("request", request);
            if (request.show) {
               div?.style.setProperty("display", "block");
            } else {
               div?.style.setProperty("display", "none");
            }
            console.log("sender", sender);
            console.log("sendResponse", sendResponse);
         });

         ReactDOM.render(<Extension />, div);
         // Append div to shadow DOM
      }
   }
}
