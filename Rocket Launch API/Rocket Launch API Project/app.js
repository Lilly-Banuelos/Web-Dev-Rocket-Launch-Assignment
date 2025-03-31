/*
Name: Lilly Jarvis (Banuelos)
Date: 04/12/2023
*/

// GLOBAL VARIABLES
// This determines the number of rockets displayed
rockets = 3;
// This determines the number of astronauts displayed
astronauts = 5;
// This gets all the elements on the page with the divClass class name and stores them in a variable, for easy deletion when returning to the main page
forDelete = document.getElementsByClassName('divClass');

// CREATES ELEMENTS
// Creates a div element with the title in it
add1 = document.createElement('div');
// Adds a title to the add1 div
add1.innerHTML = 'SPACE LAUNCH DATA';
// Adds an id to the add1 div
add1.id = 'id2';
// Appends the add1 div element to the page
document.body.appendChild(add1);

// Creates a div element with a "button" to click on to take the user to the launch data
add2 = document.createElement('div');
// Adds text to be displayed inside the add2 div
add2.innerHTML = 'LAUNCHES';
// Adds an id for the add2 div
add2.id = 'id1';
// Appends the add2 div element to the page
document.body.appendChild(add2);

// Creates a div element with a "button" to click on to take the user to the astronaut data
add3 = document.createElement('div');
// Adds text to be displayed inside the add3 div
add3.innerHTML = 'ASTRONAUTS';
// Adds an id for the add3 div
add3.id = 'id3';
// Appends the add3 div element to the page
document.body.appendChild(add3);

// EVENT LISTENERS
// Click event listeners added for the add2 div "button" for launches that runs the afterLaunchClicked function
add2.addEventListener("click", afterLaunchClicked);
// Click event listeners added for the add3 div "button" for astronauts that runs the afterAstronautsClicked function
add3.addEventListener("click", afterAstronautsClicked)

// After the LAUNCHES button (div) clicked
function afterLaunchClicked() {
    // Calls the clearDOM function and changes the background and clears the DOM
    clearDOM();

    // calls the loadXMLDoc function which handles API requests and page setup for the rockets
    loadXMLDoc();

    // Creates a div element with a "button" to click on to take the user to go back
    addNewBtn = document.createElement('div');
    // Adds text inside the addNewBtn div
    addNewBtn.innerHTML = 'BACK';
    // Adds an id to the addNewBtn div
    addNewBtn.id = 'btnID';
    // Styles the placement of the div "button" based on left position from screen
    addNewBtn.style.left = "54.6%";
    // Styles the placement of the div "button" based on bottom position from screen
    addNewBtn.style.bottom = "5.5%";
    // Appends the addNewBtn div to the page
    document.body.appendChild(addNewBtn);

    // Adds a click event listener that runs the backFunction1 function, which resets the page and displays the main screen
    addNewBtn.addEventListener("click", backFunction1);
}

// After the ASTRONAUTS button (div) clicked
function afterAstronautsClicked() {
    // Changes background and clears DOM
    clearDOM();

    // calls the loadXMLDoc2 function which handles API requests and page setup for the astronauts
    loadXMLDoc2();

    // Creates a div element with a "button" to click on to take the user to go back
    addNewBtn = document.createElement('div');
    // Adds text inside the addNewBtn div
    addNewBtn.innerHTML = 'BACK';
    // Adds an id to the addNewBtn div
    addNewBtn.id = 'btnID2';
    // Styles the placement of the div "button" based on left position from screen
    addNewBtn.style.left = "54.6%";
    // Styles the placement of the div "button" based on bottom position from screen
    addNewBtn.style.bottom = "-85.5%";
    // Appends the addNewBtn div to the page
    document.body.appendChild(addNewBtn);

    // Adds a click event listener that runs the backFunction2 function, which resets the page and displays the main screen
    addNewBtn.addEventListener("click", backFunction2);
}

// API HANDLING
// Function that calls the API into the program for rockets
function loadXMLDoc() {
    // Creates a new XMLHTTP request and stores it in the function xhttp
    var xhttp = new XMLHttpRequest();
    // if block that runs only if the data was found and the response to the API request was a success
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // this stores the json response text string in the api1 variable
        api1 =
        this.responseText;
        // this converts the json response text string stored in the api1 variable into an object
        api1Obj = JSON.parse(api1);

        // Runs for the length of the rockets variable
        for (i = 0; i< rockets; i++) {
            // Creates a div element with the title in it
            addDiv = document.createElement('div');
            // gives the addDiv element an id based on the iteration of the loop
            addDiv.id = 'newDivID' + i;
            // adds a class name for all addDiv elements created by the loop
            addDiv.className = 'divClass';
            // Appends the addDiv div element to the page
            document.body.appendChild(addDiv);

            // Dislays the name of the rocket in the addDiv div based on the iteration of the loop
            addDiv.innerHTML += "<h1>" + api1Obj.results[i].name + "</h1>";
           
            // Dislays the rocket image in the addDiv div based on the iteration of the loop
            addDiv.innerHTML += "<img src=" + api1Obj.results[i].image + "></img>";

            // Dislays the mission start window in the addDiv div based on the iteration of the loop
            addDiv.innerHTML += "<h2>" + api1Obj.results[i].window_start + "</h2>";
        }
      }
    };
    // creates a request to send to the website server for the space devs api for launches
    xhttp.open("GET", "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/", true);
    // sends the request above to the space devs api website server
    xhttp.send();
}
 
// Function that calls the API into the program for astronauts
function loadXMLDoc2() {
    // Creates a new XMLHTTP request and stores it in the function xhttp2
    var xhttp2 = new XMLHttpRequest();
    // if block that runs only if the data was found and the response to the API request was a success
    xhttp2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // this stores the json response text string in the api2 variable
        api2 =
        this.responseText;
        // this converts the json response text string stored in the api2 variable into an object
        api2Obj = JSON.parse(api2);

        // Runs for the length of the astronauts variable
        for (i = 0; i< astronauts; i++) {
            // Creates a div element with the title in it
            addDiv2 = document.createElement('div');
            // gives the addDiv2 element an id based on the iteration of the loop
            addDiv2.id = 'newNewDivID' + i;
            // adds a class name for all addDiv2 elements created by the loop
            addDiv2.className = 'divClass2';
            // Appends the addDiv2 div element to the page
            document.body.appendChild(addDiv2);

            // Dislays the name of the astronaut in the addDiv2 div based on the iteration of the loop
            addDiv2.innerHTML += "<h1>" + api2Obj.results[i].name + "</h1>";
           
            // Dislays the astronaut image in the addDiv2 div based on the iteration of the loop
            addDiv2.innerHTML += "<img src=" + api2Obj.results[i].profile_image + "></img>";

            // Dislays the astronaut nationality in the addDiv2 div based on the iteration of the loop
            addDiv2.innerHTML += "<h2>Nationality: " + api2Obj.results[i].nationality + "</h2>";

            // Dislays the astronaut's birth date in the addDiv2 div based on the iteration of the loop
            addDiv2.innerHTML += "<h2>Birth Date: " + api2Obj.results[i].date_of_birth + "</h2>";
        }
      }
    };
    // creates a request to send to the website server for the space devs api for astronauts
    xhttp2.open("GET", "https://lldev.thespacedevs.com/2.2.0/astronaut/", true);
    // sends the request above to the space devs api website server
    xhttp2.send();
}

// FUNCTIONS
// This function clears the page
function clearDOM() {
    // gets rid of the add1 div element where the homescreen title was displayed
    document.body.removeChild(add1);
    // gets rid of the add2 div element where the launches "button" was displayed
    document.body.removeChild(add2);
    // gets rid of the add3 div element where the astronauts "button" was displayed
    document.body.removeChild(add3);
}

// this function runs after the back "button" (div) is clicked on launches page
function backFunction1() {
    // runs for the length of the rockets variable
    for (i = 0; i< rockets; i++) {
        // Gets the newDivID element based on loop iteration and stores it the temp variable
        temp = document.getElementById('newDivID' + i);
        // Gets rid of the newDivID element based on loop iteration
        document.body.removeChild(temp);
    }
    // Removes the addNewBtn div (back "button") from the page
    document.body.removeChild(addNewBtn);

    // Creates a div element with the title in it
    add1 = document.createElement('div');
    // Adds a title to the add1 div
    add1.innerHTML = 'SPACE LAUNCH DATA';
    // Adds an id to the add1 div
    add1.id = 'id2';
    // Appends the add1 div element to the page
    document.body.appendChild(add1);

    // Creates a div element with a "button" to click on to take the user to the launch data
    add2 = document.createElement('div');
    // Adds text to be displayed inside the add2 div
    add2.innerHTML = 'LAUNCHES';
    // Adds an id for the add2 div
    add2.id = 'id1';
    // Appends the add2 div element to the page
    document.body.appendChild(add2);

    // Creates a div element with a "button" to click on to take the user to the astronaut data
    add3 = document.createElement('div');
    // Adds text to be displayed inside the add3 div
    add3.innerHTML = 'ASTRONAUTS';
    // Adds an id for the add3 div
    add3.id = 'id3';
    // Appends the add3 div element to the page
    document.body.appendChild(add3);

    // Click event listeners for the "buttons"
    // Click event listeners added for the add2 div "button" for launches that runs the afterLaunchClicked function
    add2.addEventListener("click", afterLaunchClicked);
    // Click event listeners added for the add3 div "button" for astronauts that runs the afterAstronautsClicked function
    add3.addEventListener("click", afterAstronautsClicked)
}

// this function runs after the back "button" (div) is clicked on astronauts page
function backFunction2() {
    // runs for the length of the astronauts variable
    for (i = 0; i< astronauts; i++) {
        // Gets the newDivID element based on loop iteration and stores it the temp2 variable
        temp2 = document.getElementById('newNewDivID' + i);
        // Gets rid of the newDivID element based on loop iteration
        document.body.removeChild(temp2);
    }
    // Removes the addNewBtn div (back "button") from the page
    document.body.removeChild(addNewBtn);

    // Creates a div element with the title in it
    add1 = document.createElement('div');
    // Adds a title to the add1 div
    add1.innerHTML = 'SPACE LAUNCH DATA';
    // Adds an id to the add1 div
    add1.id = 'id2';
    // Appends the add1 div element to the page
    document.body.appendChild(add1);

    // Creates a div element with a "button" to click on to take the user to the launch data
    add2 = document.createElement('div');
    // Adds text to be displayed inside the add2 div
    add2.innerHTML = 'LAUNCHES';
    // Adds an id for the add2 div
    add2.id = 'id1';
    // Appends the add2 div element to the page
    document.body.appendChild(add2);

    // Creates a div element with a "button" to click on to take the user to the astronaut data
    add3 = document.createElement('div');
    // Adds text to be displayed inside the add3 div
    add3.innerHTML = 'ASTRONAUTS';
    // Adds an id for the add3 div
    add3.id = 'id3';
    // Appends the add3 div element to the page
    document.body.appendChild(add3);

    // Click event listeners for the "buttons"
    // Click event listeners added for the add2 div "button" for launches that runs the afterLaunchClicked function
    add2.addEventListener("click", afterLaunchClicked);
    // Click event listeners added for the add3 div "button" for astronauts that runs the afterAstronautsClicked function
    add3.addEventListener("click", afterAstronautsClicked)
}