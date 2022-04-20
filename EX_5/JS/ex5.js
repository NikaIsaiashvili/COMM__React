const randomUserAPI = "https://randomuser.me/api";

const fetchBtn = document.querySelector("#fetch");
const outputDiv = document.querySelector(".outputDiv");
const usrImg = document.querySelector(".usrImg");
const usrEmail = document.querySelector(".usrEmail");
const userLocation = document.querySelector(".userLocation");
const userNames = document.querySelector(".userNames");


function getUser() {
fetch(randomUserAPI)
.then(response => response.json())
.then(function result(data) {
    const randomUser = data.results[0];
    const {picture: {medium}, email, location: {city}, name: {title, first, last} } = randomUser;
    
    usrImg.setAttribute('src', medium);
    
    usrEmail.textContent = email;
    
    userLocation.textContent = city;

    userNames.textContent = `${title} ` + `${first} ` + `${last}`;

});
}

fetchBtn.addEventListener('click', getUser);