const places = [
    { 
        name: "หาดบางแสน", 
        image: ["C:/วันพุธ/pjtest/img/Beach.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/Beach2.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/Beach3.jpg"] 
    },
    { 
        name: "สยาม", 
        image: ["C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/City.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/city2.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/city3.jpg"] 
    },
    { 
        name: "ดอยอินทนนท์", 
        image: ["C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/mountain.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/mountain2.jpg", "C:/Users/User/65160245/88726065/PRJ_65160245_2/1/img/mountain3.jpg"] 
    },
   
];

function displayPlaces(places) {
    const placesContainer = document.getElementById("placesContainer");
    placesContainer.innerHTML = "";
    places.forEach(place => {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");

       
        place.image.forEach(imageUrl => {
            const placeImage = document.createElement("img");
            placeImage.src = imageUrl;
            placeImage.alt = place.name;
            placeImage.classList.add("place-image");
            placeCard.appendChild(placeImage);
        });

        const placeName = document.createElement("h2");
        placeName.textContent = place.name;
        placeCard.appendChild(placeName);
        placesContainer.appendChild(placeCard);
    });
}



displayPlaces(places);


document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchTerm));
    displayPlaces(filteredPlaces);
});


const placesJSON = JSON.stringify(places);


localStorage.setItem("tourismPlaces", placesJSON);


const storedPlacesJSON = localStorage.getItem("tourismPlaces");
const storedPlaces = JSON.parse(storedPlacesJSON);


if (storedPlaces) {
    displayPlaces(storedPlaces);
} else {
    displayPlaces(places); 
}

