console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("name:",data.results[0].name);
    console.log("eye color:",data.results[0].eye_color);
     data.results.forEach(person => {
            console.log(`Name: ${person.name}, Eye color: ${person.eye_color}`);
        });
}

fetchData();
