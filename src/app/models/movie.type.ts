import { Genre } from "./genre.type";


export interface Movie {
     id: number,
     adult: boolean,
     genres: Genre[],
     backdrop_path: string, //image url
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     homepage: string,
     poster_path: string,
     release_date: string,
     title: string,
     video: boolean,
     vote_average: number,
     vote_count: number
}