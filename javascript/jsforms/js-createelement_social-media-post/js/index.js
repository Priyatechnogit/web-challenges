console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";

const newLikeButton = document.createElement("button");
newLikeButton.type = "button";
newLikeButton.classList.add("post__button");
newLikeButton.dataset.js = "like-button";
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);

postFooter.append(username, newLikeButton);

newPost.append(postContent, postFooter);

document.body.append(newPost);

