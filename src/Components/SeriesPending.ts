import Component from "./Component/Component.js";

class SeriesPending extends Component {
  constructor(parentElemnent: HTMLElement, className = "", tag = "div") {
    super(parentElemnent, className, tag);
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<h1 class="subsection-title">Series pending</h1>`;
  }
}

export default SeriesPending;
