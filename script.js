/*
    * p tag with red text; content of "Hey I'm red!"
    * h3 with blue text; Im a blue h3
    * div with black border and pink background color
        * h1; I'm in a div
        * p; ME TOO!
        *    
*/
let container = document.getElementById('firstExercise');

addP();
addH3();
addDiv();

function addP() {
    let paragraph = document.createElement('p');
    paragraph.textContent = "Hey I'm red!";
    paragraph.style.color = 'red';
    container.append(paragraph);

    console.log("Successful Append of Paragraph");
}

function addH3() {
    let heading = document.createElement('h3');
    heading.textContent = "I'm a blue h3.";
    heading.style.color = 'blue';
    container.append(heading);

    console.log("Successful Append of Heading 3");
}

function addDiv() {
    let section = document.createElement('div'),
        heading = document.createElement('h1'),
        paragraph = document.createElement('p');
    
    section.style.border = '5px solid black';
    heading.textContent =  "I'm in a div";
    paragraph.textContent =  "ME TOO!";
      
    section.appendChild(heading);
    console.log("Successful Append of Heading");
    section.appendChild(paragraph);
    console.log("Successful Append of Paragraph");

    container.append(section);
    console.log("Successful Append of Division");
}