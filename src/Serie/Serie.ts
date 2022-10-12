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

  changeScore(score: number): void {
    const maxScore = 5;
    const minScore = 0;

    if (score >= maxScore) this.score = maxScore;
    else if (score <= minScore) this.score = minScore;
    else this.score = score;

    this.watched = true;
  }
}
export default Serie;
