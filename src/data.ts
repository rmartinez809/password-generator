const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '<', ">", "?" ]

export const characters = () => {
    console.log(alphabetUpperCase);
    console.log(alphabetLowerCase);
    console.log(numbers);
    console.log(symbols);
}

export const generatePassword = (maxLength): string => {
    let password = '';

    while (password.length < maxLength) {
        const randomCharset: number = randomNumber(4);

        switch (randomCharset) {
            case 0:
                console.log(`selecting an upper case letter...`);
                password = password + 'a';
                break;
            case 1:
                console.log(`selecting a lower case letter...`);
                password = password + 'a';
                break;
            case 2:
                console.log(`selecting a number...`);
                password = password + 'a';
                break;
            case 3:
                console.log(`selecting a symbol...`);
                password = password + 'a';
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





