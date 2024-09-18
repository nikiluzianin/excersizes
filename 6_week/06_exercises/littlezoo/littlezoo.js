/* data on the animals in zoo */
const zooAnimals = [
	{ name: "Luna", age: 5, gender: "Female", species: "Tiger", type: "Mammal", description: "A majestic Bengal tiger known for her striking orange coat with black stripes. Luna loves to nap in the shade." },
	{ name: "Rocky", age: 3, gender: "Male", species: "Penguin", type: "Bird", description: "A playful Emperor penguin who enjoys swimming and sliding on the ice. He's very social with his group." },
	{ name: "Sally", age: 2, gender: "Female", species: "Iguana", type: "Reptile", description: "A calm green iguana who loves basking under the sun. Sally is often seen lounging on rocks." },
	{ name: "Charlie", age: 4, gender: "Male", species: "Elephant", type: "Mammal", description: "A young and curious elephant with large ears. Charlie enjoys splashing in the water and playing with his herd." },
	{ name: "Zara", age: 1, gender: "Female", species: "Zebra", type: "Mammal", description: "A young zebra foal with bold black-and-white stripes. Zara loves to run around the grasslands with her family." },
	{ name: "Oscar", age: 7, gender: "Male", species: "Parrot", type: "Bird", description: "A colorful macaw parrot with vibrant blue and yellow feathers. Oscar is known for mimicking sounds and words." },
	{ name: "Bella", age: 6, gender: "Female", species: "Red Panda", type: "Mammal", description: "A small, reddish-brown red panda with a bushy tail. Bella is shy and loves eating bamboo leaves." },
	{ name: "Spike", age: 4, gender: "Male", species: "Tortoise", type: "Reptile", description: "A slow-moving tortoise with a hard, dome-shaped shell. Spike enjoys munching on leafy greens and sunbathing." },
	{ name: "Milo", age: 2, gender: "Male", species: "Meerkat", type: "Mammal", description: "A mischievous meerkat who is always on the lookout. Milo loves digging burrows and foraging for insects." }
];

function animal(name, age, gender, species, type, description) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.species = species;
	this.type = type;
	this.description = description;
}

const informationSpace = document.querySelector("#animalDisplay");

/* when HTML page is first loaded, show all animals */
displayAnimals(zooAnimals);

/* functions */

function cleanUpDiv(divToClean) {
	while (divToClean.firstChild) divToClean.removeChild(divToClean.firstChild);
}

// show the animals given as a parameter (array of objects) in the animal display area (#animalDisplay)
function displayAnimals(animals) {
	// YOUR CODE HERE

	cleanUpDiv(informationSpace); // empty the display area first
	// loop through the "animals" array and add HTML elements for each animal



	if (animals.length != 0) {

		let overallTable = document.createElement('table');
		let tableBody = document.createElement('tbody');

		let tableRow = document.createElement('tr');
		for (let key of Object.keys(animals[0])) {
			let tableCell = document.createElement('td');
			tableCell.textContent = key;
			tableRow.appendChild(tableCell);
		}
		tableBody.appendChild(tableRow);
		// creating head for the table


		for (let animal of animals) {
			tableRow = document.createElement('tr');
			for (let value of Object.values(animal)) {
				let tableCell = document.createElement('td');
				tableCell.textContent = value;
				tableRow.appendChild(tableCell);
				// creating a cell for each value of the animal
			}
			tableBody.appendChild(tableRow);
			// creating a row with values of one animal
		}
		overallTable.appendChild(tableBody);
		informationSpace.appendChild(overallTable);
	} else {
		informationSpace.textContent = "Search with no results";
	}

	// attaching it to the div
}

function resetFilters() {
	document.querySelector("#filterGender").value = "";
	document.querySelector("#animalSearch").value = "";
	document.querySelector("#filterType").value = "";
}

// add an animal with the given parameters to the zooAnimals array (don't forget to call the displayAnimals function to refresh the list)
function addAnimal(name, age, gender, species, type, description) {
	// YOUR CODE HERE
	// create a new object and push it to the array
	let newAnimal = new animal(name, age, gender, species, type, description);
	zooAnimals.push(newAnimal);
	// display all animals and reset filters
	displayAnimals(zooAnimals);
	resetFilters();
}


function filterAll() {
	let selectedType = document.querySelector("#filterType").value;
	let selectedGender = document.querySelector("#filterGender").value;
	let searchInput = document.querySelector("#animalSearch").value;

	let selectedAnimals = zooAnimals.filter(function (animal) {
		if ((selectedType != "") ? animal.type == selectedType : true) {
			if ((selectedGender != "") ? animal.gender == selectedGender : true) {
				if (searchInput != "") {
					if (animal.name.includes(searchInput) || animal.species.includes(searchInput)) return animal;

				} else return animal;
			}
		}
	});

	displayAnimals(selectedAnimals);
}

/* event listeners */

// "filterType" dropdown should filter by type and update the animal list when its value changes (if you'd like a bit more challenge, you can also filter by all selections at the same time)
document.querySelector("#filterType").addEventListener("change", function () {

	filterAll();
});

// "filterGender" dropdown should filter by gender (Male / Female)
// YOUR CODE HERE

document.querySelector("#filterGender").addEventListener("change", function () {
	filterAll()
});



// "animalSearch" input should allow searching for specific name or species (or part of one)
// YOUR CODE HERE (use "input" event to react as the user types)
document.querySelector("#animalSearch").addEventListener("change", function () {
	filterAll()
});


// clicking "Add animal" button should collect the values from the form and call addAnimal function
document.querySelector("#addAnimalButton").addEventListener("click", function (ev) {
	ev.preventDefault();    // by naming the event parameter (ev) in the line above, we can access it and prevent the default behavior of a submit button, i.e. sending the form, from happening
	addAnimal(document.querySelector("#name").value,
		document.querySelector("#age").value,
		document.querySelector("#gender").value,
		document.querySelector("#species").value,
		document.querySelector("#type").value,
		document.querySelector("#description").value
	);
	// YOUR CODE HERE
});


// don't touch these - they show and hide the form to add a new animal
document.querySelector("#toggleSidebar").addEventListener("click", function () {
	const sidebar = document.querySelector("#sidebar");
	const animalForm = document.querySelector("#animalForm");
	// sidebar is hidden - show it
	if (animalForm.classList.contains("hidden")) {
		animalForm.classList.remove("hidden");
		sidebar.style.width = "330px";
		document.querySelector("#toggleSidebar").textContent = "Hide form";
	}
	// sidebar is visible - hide it
	else {
		animalForm.classList.add("hidden");
		sidebar.style.width = "30px";
		document.querySelector("#toggleSidebar").textContent = "Show form";
	}
})
