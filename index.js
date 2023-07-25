let wholeContainer = document.getElementById("movieReviewsContainer");
let movieTitleIp = document.getElementById("titleInput");
let movieReviewIp = document.getElementById("reviewTextarea");
let buttonToAdd = document.getElementById("addBtn");
let displayContainer = document.getElementById("reviewsContainer");



function addingmovieReview(movieTitleIp, movieReviewIp) {
    let movieTitleIpValue = movieTitleIp.value;
    let movieReviewIpValue = movieReviewIp.value;

    if (movieTitleIpValue === "") {
        alert("Enter movie name")
        return
    }


    let displayHeading = document.createElement("h1");
    displayHeading.classList.add("dispalau-movie");
    displayHeading.textContent = "Movie Title:" + movieTitleIpValue;
    displayContainer.appendChild(displayHeading);

    let displayPara = document.createElement("p");
    displayPara.textContent = "Review:" + movieReviewIpValue;
    displayContainer.appendChild(displayPara);

    let horizontalLineE1 = document.createElement("hr");
    displayContainer.appendChild(horizontalLineE1)

    movieReviewIp.value = "";
    movieTitleIp.value = "";
}


buttonToAdd.onclick = function() {
    addingmovieReview(movieTitleIp, movieReviewIp)
}