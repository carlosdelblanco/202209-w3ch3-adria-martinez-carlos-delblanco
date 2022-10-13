import Component from "../Component/Component.js";

class Header extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly title: string,
    classname = ""
  ) {
    super(parentElement, classname, "header");
  }

  render() {
    super.render();
  }
}

export default Header;
