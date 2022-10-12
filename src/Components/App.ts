import Component from "./Component/Component";

class App extends Component {
  constructor(parentElemnent: HTMLElement, tag = "div") {
    super(parentElemnent, "container", tag);
  }
}

export default App;
