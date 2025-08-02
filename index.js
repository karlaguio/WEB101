/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [x] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton= document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

const submitButton = document.getElementById("rsvp-button");
const addParticipant = (event) => {
  // Step 2: Write your code to manipulate the DOM here
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const userName = nameInput.value;

  const countryInput = document.getElementById("country");
  const userCountry = countryInput.value;

  const emailInput = document.getElementById("email");
  const userEmail = emailInput.value;

  const newParticipantP = document.createElement('p');
  newParticipantP.textContent = `🎟️ ${userName} from ${userCountry} has RSVP'd`;

  const participantsDiv = document.querySelector(".participants"); 
  participantsDiv.appendChild(newParticipantP);
}

// Step 3: Add a click event listener to the submit RSVP button here
//submitButton.addEventListener("click", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // The body of the for loop will go here
  // TODO: Loop through all inputs

  // TODO: Inside loop, validate the value of each input

  for (let i=0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }
    else {
      rsvpInputs[i].classList.remove("error");
    }
}

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors==false) {
    addParticipant(event);
    for (let i=0; i<rsvpInputs.length;i++) {
      rsvpInputs[i].value = "";
    }
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
