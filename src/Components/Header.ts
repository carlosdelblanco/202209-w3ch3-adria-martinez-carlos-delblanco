import Component from "./Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement, classname = "string") {
    super(parentElement, classname, "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `Series List`;
  }
}

export default Header;
