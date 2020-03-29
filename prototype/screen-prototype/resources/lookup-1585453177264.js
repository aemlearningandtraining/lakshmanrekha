(function(window, undefined) {
  var dictionary = {
    "644dc4b1-814f-41c3-b4ba-c09bd1ad2e39": "Group Setting",
    "9265f9d1-dbba-4713-96cc-821e55565cad": "REGISTER",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "FIRST TIME - LAUNCH",
    "bb250d04-5e6c-42ec-9ba0-0187bdd2ed2a": "home Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);