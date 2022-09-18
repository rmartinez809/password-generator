const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '<', ">", "?" ]

//generate a random number for the length of the appropriate array
//select value at array[randIndex]
//add value to string
export const generatePassword = (maxLength, options:string[]): string => {
    let password = '';
    let randIndex: number;

    while (password.length < maxLength) {
        //Will need to replace this statement for the possible cases (password options)
        const randomCharset: number = randomNumber(options.length);

        switch (options[randomCharset]) {
            case "upper-case":
                randIndex = randomNumber(alphabetUpperCase.length);
                password = password + alphabetUpperCase[randIndex];
                break;
            case "lower-case":
                randIndex = randomNumber(alphabetLowerCase.length);
                password = password + alphabetLowerCase[randIndex];
                break;
            case "numbers":
                randIndex = randomNumber(numbers.length);
                password = password + numbers[randIndex].toString();
                break;
            case "symbols":
                randIndex = randomNumber(symbols.length);
                password = password + symbols[randIndex];
                break;
        }
    }

    return password;
}

const randomNumber = (max): number => {
    //Generate random number between 0 - max, exclusive
    return Math.floor(Math.random() * max);

}

/**
export const createAlphabet = () => {
//create a new array of length 26
//add 65 to the index for the corresponding char code (https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)
const charCode: number[] = [];
for (let i = 0; i < 26; i++) {
    charCode.push(i + 65);
}

//convert charCode array to alphabet
// charCode.forEach((char) => alphabetUpperCase.push(String.fromCharCode(char)));
const alphabetUpperCase = charCode.map((char) => String.fromCharCode(char));

const alphabetLowerCase = alphabetUpperCase.map((char) => char.toLowerCase());
}
*/





