
// READ MORE BUTTON

const readMoreButton = document.getElementById("readMoreButton");
const moreText = document.getElementById("moreText");

readMoreButton.addEventListener("click", function () {

    if (moreText.style.display === "block") {

        moreText.style.display = "none";
        readMoreButton.textContent = "Read More";

    } else {

        moreText.style.display = "block";
        readMoreButton.textContent = "Read Less";

    }

});


// DARK / LIGHT MODE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
