import Header from "./Header.js";

describe("Given the a header component", () => {
  describe("When the header component is render", () => {
    test("Then the title  of header should be inside should appear the title into the document with class 'main-title'", () => {});

    const screen = document.createElement("div");
    const tag = "h1";
    const expectedClassName = "main-title";

    const header = new Header(screen, tag);
    header.render();

    const query = screen.querySelector("h1");

    expect(query).not.toBeNull();
    expect(query.className).toBe(expectedClassName);
  });
});
