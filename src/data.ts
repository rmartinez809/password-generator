
export const createAlphabet = () => {
//create a new array of length 26
//add 65 to the index for the corresponding char code
const charCode: number[] = [];
for (let i = 0; i < 26; i++) {
    charCode.push(i + 65);
}

//convert charCode array to alphabet
const alphabetUpperCase = charCode.map((char) => String.fromCharCode(char));

const alphabetLowerCase = alphabetUpperCase.map((char) => char.toLowerCase());

}
