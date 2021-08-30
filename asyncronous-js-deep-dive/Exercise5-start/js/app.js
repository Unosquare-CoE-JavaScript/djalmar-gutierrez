//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.

const getPosts = async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let data = await fetch(url);
  let posts = await data.json();
  return posts.filter((post) => post.userId == userId);
};


let posts = await getPosts(2)