/** @format */

import * as React from "react";
import ReactDOM from "react-dom";

import "./index.css";

export class Extension extends React.Component {
   render() {
      return (
         <div>
            <h1 className="extension-header">Extension is working</h1>
            <button>This button has problems with styles</button>
         </div>
      );
   }
}
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

         // Append div to shadow DOM
         shadowRoot.appendChild(div);
         ReactDOM.render(<Extension />, div);
      }
   }
}
