interface SerieStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;

  changeScore: (score: number) => void;
}
export default SerieStructure;
