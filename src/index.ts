import AppContainer from "./Components/AppContainer/AppContainer.js";
const appContainer = document.querySelector(".container");

const app = new AppContainer(appContainer as HTMLElement);
app.render();
