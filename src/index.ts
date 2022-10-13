import AppContainer from "./Components/AppContainer/AppContainer.js";
const root = document.querySelector(".root");

const appContainer = new AppContainer(root as HTMLElement);
appContainer.render();
