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

### Process

- Automatically generate a random password when the component mounts (only once)
- Fill the value of the password input field with the randomly generated password
- Whenever the state of an option changes, generate a new password
- Refactor code, and clean up CSS

### Password Strength

- Length:
  - None: 0-1
  - Weak: 2-5 (red)
  - Fair: 6-8 (yellow)
  - Good: 9-11 (light green)
  - Excellent: 12+ (green)

### Extras

-[X] Add tooltip to indicate when value has been copied to clipboard.
