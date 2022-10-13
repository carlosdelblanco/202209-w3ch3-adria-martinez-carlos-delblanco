import Serie from "../../Series/types.js";
import Component from "../Component/Component.js";

class StatusSeries extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly isWatched: boolean,
    private readonly series: Serie[]
  ) {
    super(parentElement, "section", "series-pending");
  }

  render() {
    super.render();

    const pendingSeries = this.series.filter(
      (serie) => serie.watched === this.isWatched
    ).length;
    let contentHtml: string;
    if (this.isWatched) {
      contentHtml = `
      <h3 class="subsection-title">Watched Series</h3
      <p class="info">You have watched ${pendingSeries} series</p>
      `;
    } else {
      contentHtml = `
      <h3 class="subsection-title">Pending Series</h3
      <p class="info">You have ${pendingSeries} series pending to watch</p>
      `;
    }

    this.domElement.innerHTML = contentHtml;
  }
}

export default StatusSeries;
