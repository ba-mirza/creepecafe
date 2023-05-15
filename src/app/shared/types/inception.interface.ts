export interface InceptionInterface {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
}

export interface InceptionResponseInterface {
  Response: string,
  Search: InceptionInterface[],
  totalResults: string
}
