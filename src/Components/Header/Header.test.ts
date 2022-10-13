import Header from "./Header.js";

describe("Given the a header instance", () => {
  describe("When the header is created", () => {
    test("it should appear the title into the document", () => {});
    const screen = document.createElement("body");
    const tag = "h1";
    const header = new Header(screen, tag);
    header.render();
    const showInScreen = screen.querySelector("h1");
    expect(showInScreen).not.toBeNull();
  });
});
