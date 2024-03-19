import "$styles/index.scss"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!");

// Make post subheaders into hash links
const subheaders = document.querySelectorAll(".post h2, .post h3, .post h4");

for (const subheader of subheaders) {
  // change without page reload
  // subheader.addEventListener("click", () => { history.pushState("", "", `#${subheader.id}`); });

  // change with page reload
  subheader.addEventListener("click", () => window.location.hash = subheader.id);
}

document.querySelector(".js-youtube-button").addEventListener("click", () => window.open("https://www.youtube.com/@josh_around/videos", "_blank"));
