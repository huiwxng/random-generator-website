const API_KEY = "ed4ef6706emshdceac5ab2061892p1a8c75jsn72598c6a52fc";

const BASE_URL = "https://random-palette-generator.p.rapidapi.com/palette";

const colorButton = document.getElementById("color-btn");
const allPalettes = document.getElementById("color-palettes");

function generateColorPalette(data) {
    allPalettes.innerHTML = "";
    let allPaletteObject = data.data;
    for (let i = 0; i < allPaletteObject.length; i++) {
        let colorPaletteObject = allPaletteObject[i].palette;

        let newPalette = document.createElement("div");
        newPalette.classList.add("single-color-palette");
        allPalettes.appendChild(newPalette);

        for (let i = 0; i < colorPaletteObject.length; i++) {
            let newColor = document.createElement("div");
            newColor.classList.add("single-color-container");
            newPalette.appendChild(newColor);
    
            let newColorBox = document.createElement("div");
            newColorBox.classList.add("color-box");
            newColor.appendChild(newColorBox);
    
            let newColorHexadecimal = document.createElement("div");
            newColorHexadecimal.classList.add("color-hexadecimal");
            newColor.appendChild(newColorHexadecimal);
    
            let newColorRGB = document.createElement("div");
            newColorRGB.classList.add("color-rgb");
            newColor.appendChild(newColorRGB);
    
            let hex = colorPaletteObject[i] + "";
            newColorBox.style.backgroundColor = hex;
            newColorHexadecimal.innerHTML = "Hexadecimal: " + hex;
            let red = parseInt(hex[1]+hex[2],16);
            let green = parseInt(hex[3]+hex[4],16);
            let blue = parseInt(hex[5]+hex[6],16);
            newColorRGB.innerHTML = `RGB: (${red}, ${green}, ${blue})`
        }
    }
}

colorButton.onclick = function () {
    const type = document.getElementById("type").value;
    const numPalettes = document.getElementById("number-of-color-palettes").value;
    const numColors = document.getElementById("number-of-colors").value;
    if (numPalettes == "" || numColors == "") {
        alert("Check if both fields are filled");
    }
    let requestURL = `${BASE_URL}/${type}/${numPalettes}/${numColors}?rapidapi-key=${API_KEY}`;

    fetch(requestURL)

    .then(function (response) {
        // convert the response --> object
        return response.json();
    })

    .then(generateColorPalette)

    .catch(function (error) {
        console.log("Error during fetch: ", error);
    });
}