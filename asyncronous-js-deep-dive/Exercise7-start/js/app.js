var MAINAPP = (function (nsp) {
  "use strict";

  let url = "https://jsonplaceholder.typicode.com/";

  /*
    The following promise code is inside a module pattern. Change the promise code so that it uses async await instead. You will want to use an IIFE for this. Make sure to catch any errors.
    */

  (async () => {
    try {
      const response = await fetch(url + "posts/");
      const posts = await response.json();
      nsp.posts = posts;
    } catch (e) {
      console.log(`Problem retrieving posts: ${err}`);
    }
  })();
  //public
  return nsp;
})(MAINAPP || {});
