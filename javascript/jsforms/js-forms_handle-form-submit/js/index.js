console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.querySelector("#first-name");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    /*age calculation */
     const age = Number(data.age);
     const badness = Number(data.badness);
     const sum = age + badness;
     console.log(`The age-badness-sum of "${data.firstName}" is "${sum}"`);

     form.reset();
     firstNameInput.focus();

    
    
});
