# Password Generator

## User stories

Users should be able to:

- Generate a password based on the selected options
- Copy the generated password to the clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on screen size
- See hover and focus states for all interactive elements on the page

### Outline

- card component to house password generator
- section to display password
  - icon to copy password to clipboard
- slider to define password length
- check boxes for different options
- section to display password strength
  - dynamically update strength meter
- refresh button to generate new password with existing parameters

### Generating password

- seperate data file with valid characters for each option (Uppercase letters, lowercase letters, Numbers, Symbols)
- switch statement to select case
- for each character for the password length:
  - generate a random number, and choose an option based on obj id number
  - generate a random number for the length of the object's data
  - add the character to the password string
- update the password every time an option is changed, including character length
