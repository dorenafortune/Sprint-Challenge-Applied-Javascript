// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(headerContent) {
const 

    newHeader = document.createElement("div"),
    headerDate = document.createElement("span"),
    headerTitle = document.createElement("h1"),
    headerTemp = document.createElement("span");


//appending

newHeader.appendChild(headerDate);
newHeader.appendChild(headerTitle);
newHeader.appendChild(headerTemp);

//classlist

newHeader.classList.add("header");
headerDate.classList.add("date");
headerTemp.classList.add("temp");

//text content


headerDate.textContent = `SMARCH 28, 2019`;
headerTitle.textContent = `Lambda Times`
headerTemp.textContent = `98`;


return newHeader

}

const headerEntry = document.querySelector(".header-container")

headerEntry.appendChild(Header());