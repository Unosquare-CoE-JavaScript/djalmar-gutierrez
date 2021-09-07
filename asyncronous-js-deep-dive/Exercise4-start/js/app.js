var MAINAPP = (function (nsp) {
  "use strict";

  let url = "https://jsonplaceholder.typicode.com/";

  /*
    Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
    */
  let postsPromise = fetch(url + "posts/")
    .then((response1) => response1.json())
    .then((posts) => (nsp.posts = posts))
    .catch((err) => console.log(`Problem retrieving posts: ${err}`));

  let commentsPromise = fetch(url + "comments/")
    .then((response2) => response2.json())
    .then((comments) => (nsp.comments = comments))
    .catch((err) => console.log(`Problem retrieving comments: ${err}`));

  let todosPromise = fetch(url + "todos/")
    .then((response3) => response3.json())
    .then((todos) => (nsp.todos = todos))
    .catch((err) => console.log(`Problem retrieving todos: ${err}`));

  Promise.all([postsPromise, commentsPromise, todosPromise])
    .then(([posts, comments, todos]) => {
      nsp = { ...nsp, ...{ posts, comments, todos } };
    })
    .catch((e) => console.log(e));

  //public
  return nsp;
})(MAINAPP || {});
