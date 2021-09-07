var MAINAPP = (function (nsp) {
  "use strict";

  let url = "https://jsonplaceholder.typicode.com/";

  /*
    Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

    Which pattern do you prefer for this application? promises or async await?
    */

  (async () => {
    try {
      const responses = await Promise.all([
        fetch(url + "posts/"),
        fetch(url + "comments/"),
        fetch(url + "todos/"),
      ]);
      const [posts, comments, todos] = await Promise.all(
        responses.map((r) => r.json())
      );
      nsp.posts = posts;
      nsp.comments = comments;
      nsp.todos = todos;
    } catch (e) {
      console.log(`Problem retrieving data: ${err}`);
    }
  })();

  console.log("Remaining Code.");

  //public
  return nsp;
})(MAINAPP || {});
