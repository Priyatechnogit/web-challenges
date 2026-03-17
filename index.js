console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

const postTitle  = 'Quiz App - My first project';
const postContent  = 'After a whole day of coding, I finally finished my first web app. It\'s a simple task manager built with only HTML and CSS.';
let postLikes  = 60;
const postUser  = "Priya'";
const isReported  = false;


// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/
console.log(postTitle);
console.log(postContent);
console.log(postLikes);
console.log(postUser);
console.log(isReported);
postLikes += 1;
console.log(postLikes);

// --v-- write your code here --v--

// --^-- write your code here --^--
