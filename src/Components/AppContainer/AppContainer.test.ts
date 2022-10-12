import AppContainer from "./AppContainer";

describe("Given the AppContainer", () => {
  describe("When create a AppContainer", () => {
    test("Then screen should have a AppContainer inside screen", () => {
      const screen = document.createElement("div");
      const appContainer = new AppContainer(screen);
      const classAppContainer = ".container";
      screen.appendChild(appContainer.domElement);

      const query = screen.querySelector(classAppContainer);

      expect(query).not.toBeNull();
    });
  });
});
