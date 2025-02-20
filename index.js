
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");


const name = document.querySelector("#your-name");

function getNumberOfChars(name) {
    return name.length;
}

function getFirstChar(name) {
    return name[0];
}

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);})
    answer2.textContent = getFirstChar(value); 