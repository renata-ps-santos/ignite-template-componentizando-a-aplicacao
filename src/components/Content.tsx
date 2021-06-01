import { useEffect, useState } from "react";
import { api } from "../services/api";
import '../styles/content.scss';
import {MovieCard} from "./MovieCard"
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  moviesList: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;}
}

export function Content(props:GenreResponseProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.moviesList.id}`).then(response => {
      setMovies(response.data);
    });

  }, [props.moviesList.id]);
  return ( 
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {props.moviesList.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>)
}