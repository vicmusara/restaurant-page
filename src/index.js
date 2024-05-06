// src/homepage.js
const createHomepage = () => {
    const contentDiv = document.getElementById("content");

    // Create elements
    const image = document.createElement("img");
    const headline = document.createElement("h1");
    const paragraph = document.createElement("p");

    // Set attributes and content
    image.src = "path_to_your_image.jpg";
    image.alt = "Restaurant Image";
    headline.textContent = "Welcome to Our Restaurant";
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Append elements to contentDiv
    contentDiv.appendChild(image);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
};

export default createHomepage;
