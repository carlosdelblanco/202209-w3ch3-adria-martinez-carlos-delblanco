import series from "../../Series/Series";
import StatusSeries from "./StatusSeries";

describe("Given a StatusSeries component", () => {
  describe("When the component StatusSeries is rendered ", () => {
    test("Then it should appear a title called Pending series", () => {
      const seeWatchedSeries = false;
      const expectedTitle = "Pending Series";
      const titleTag = "h3";

      const screen = document.createElement("div");

      const statusSeries = new StatusSeries(screen, seeWatchedSeries, series);
      statusSeries.render();

      const query = screen.querySelector(titleTag);

      expect(query).not.toBeNull();
      expect(query.textContent).toBe(expectedTitle);
    });

    test("Then it should appear a title called Watched Series", () => {
      const seeWatchedSeries = true;
      const expectedTitle = "Watched Series";
      const titleTag = "h3";

      const screen = document.createElement("div");
      const statusSeries = new StatusSeries(screen, seeWatchedSeries, series);
      statusSeries.render();

      const query = screen.querySelector(titleTag);

      expect(query).not.toBeNull();
      expect(query.textContent).toBe(expectedTitle);
    });
  });
});
