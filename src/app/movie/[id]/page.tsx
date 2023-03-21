import MovieCard from '@/app/components/MovieCard';
import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import Image from 'next/image';

export default async function MovieDetails({params}: {params: any}) {
    const {id} = params;
    console.log('searching for: ',  id);
    const movieResponse = await fetch(getMovieByIdAPI(id));
    const movie = await movieResponse.json();

    console.log(movie);

  return (
      <div className="flex flex-col w-full p-5">
          <div>
              <span className='text-3xl'>{movie.title}</span>
              <span> / {movie.release_date} / Rate: {movie.vote_average}</span>
          </div>
          <span >{movie.overview}</span>
          <div className='flex flex-row items-start justify-between mt-5'>
              <div>
                  { movie.genres.map( (genre: any) => (<ul key={genre.name}>{genre.name}</ul>)) }
              </div>
              <Image
                  src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
                  width={160}
                  height={160}
                  priority
                  alt={movie.title}
              />
          </div>
      </div>
  )
}
