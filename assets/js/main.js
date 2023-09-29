function displayRicoLanding() {
    toggleClassTo("#sectionRicoLanding", "hidden");
};

function displayRicoIndex() {
    toggleClassTo("#sectionRicoHome", "hidden");
    toggleClassTo("#sectionRicoAbout", "hidden");
    toggleClassTo("#sectionRicoFeatured", "hidden");
};


const app = {};

app.startTour = () => {
    const btnStart = document.getElementById("ricoLandingBtn");
    btnStart.addEventListener("click", () => {
        displayRicoLanding();
        displayRicoIndex();
    })
};

app.init = () => {
    app.startTour();
};