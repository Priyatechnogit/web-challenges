console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const language of programmingLanguages){
  const li = document.createElement("li"); // it will create the list items
  li.textContent = language; // set the content from the array language
  ol.append(li); // finally adding/append the list items to the ol
}
// --^-- write or modify code above this line --^--
