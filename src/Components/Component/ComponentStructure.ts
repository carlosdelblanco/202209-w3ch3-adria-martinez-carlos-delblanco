interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  eventListener?: () => void;
}
export default ComponentStructure;
