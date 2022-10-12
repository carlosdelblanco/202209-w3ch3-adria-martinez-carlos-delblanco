import Component from "./Component";

describe("Given the instance component", () => {
  describe("When create a component", () => {
    test("Then screen should have a div element created by class component inside", () => {
      const screen = document.createElement("div");
      const divElement = new Component(screen);

      screen.appendChild(divElement.domElement);

      const query = screen.querySelector("div");

      expect(query).not.toBeNull();
    });
  });
});
