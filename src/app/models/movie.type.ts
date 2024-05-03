export interface Movie {
     id: number,
     adult: boolean,
     genre_ids: number,
     backdrop_path: string, //image url
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     poster_path: string,
     release_date: string,
     title: string,
     video: boolean,
     vote_average: number,
     vote_count: number
}