import App from "./Components/App";
const appContainer = document.querySelector(".container");

const app = new App(appContainer as HTMLElement);
app.render();
