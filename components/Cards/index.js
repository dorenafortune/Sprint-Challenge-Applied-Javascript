// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
        console.log(response.data)
        const keysArray = Object.keys(response.data.articles)
        for (let i = 0; i < keysArray.length; i++) {
            const key = keysArray[i];
            response.data.articles[`${key}`].forEach(item => {
                Card(item)
            })
        }
        console.log(keysArray)
    }).catch(error => {
        console.log(error, `data not returned`)
    })


function Card(cardContent) {
    
    const newCard = document.createElement("div");
    const headLine = document.createElement("div");
    const authorClass = document.createElement("div");
    const  imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const  authorName = document.createElement("span");

  
    
    //classlist

    newCard.classList.add("card");
    headLine.classList.add("headline");
    authorClass.classList.add("author");
    imgContainer.classList.add("img-container");
    img.src = cardContent.authorPhoto;

    headLine.textContent = cardContent.headline;
    authorName.textContent = cardContent.authorName;



    const cardEntry = document.querySelector(".cards-container")

    cardEntry.appendChild(newCard);
    newCard.appendChild(headLine);
    newCard.appendChild(authorClass);
   authorClass.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorClass.appendChild(authorName);
    

}

