// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function(response){
        console.log(response.data.topics)
        const topic = document.querySelector(".topics")
      response.data.topics.forEach(item => {
          topic.appendChild(newTab(item));
          
      });

    })

    .catch(error => {
        console.log(error, `Data not returned`)
    })

function newTab (array){

    const newTopics = document.createElement("div")
    newTopics.classList.add("tab");
    newTopics.textContent = array

    return newTopics
}

const entry = document.querySelector(".tab");