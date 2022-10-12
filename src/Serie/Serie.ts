import SerieStructure from "./SerieStructure";

class Serie implements SerieStructure {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number
  ) {}
}
export default Serie;
