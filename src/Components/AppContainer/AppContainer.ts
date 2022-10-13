import Component from "../Component/Component.js";

class AppContainer extends Component {
  constructor(parentElemnent: HTMLElement, tag = "div") {
    super(parentElemnent, "container", tag);
  }

  render(): void {
    super.render();
  }
}

export default AppContainer;
