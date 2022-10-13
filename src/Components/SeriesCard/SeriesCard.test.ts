import series from "../../Series/Series";
import SeriesCard from "./SeriesCard";

let screenTest = document.createElement("div");
const serie = series[0];
beforeEach(() => {
  screenTest = document.createElement("div");
});
describe("Given the series card component", () => {
  describe("When the component series card component is render", () => {
    test("The title of serie should be inside a heading level 4", () => {
      const expectedTitle = series[0].name;
      const tag = "h4";
      const seriesCard = new SeriesCard(screenTest, serie);

      seriesCard.render();

      const query = screenTest.querySelector(tag);

      expect(query).not.toBeNull();
      expect(query.textContent).toBe(expectedTitle);
    });
    test("Then it should shoe the Sopranos image", () => {
      const expectedFilename = serie.poster;
      const tag = "img";
      const seriesCard = new SeriesCard(screenTest, serie);
      seriesCard.render();

      const query = screenTest.querySelector(tag);

      expect(query).not.toBeNull();
      expect(query.src).toBe(expectedFilename);
    });
  });
});
