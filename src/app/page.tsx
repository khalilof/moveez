import styles from './page.module.css'
import MovieCard from '@/app/components/MovieCard';
import { searchMovieAPI } from '@/app/helper/ApiURLFactory';

export default async function Home({searchParams}: {
    searchParams?: { [key: string]: string };
})  {
    let movies = [];
    console.log('started home page');
    console.log(searchParams);
    if(searchParams) {

        const search = searchParams['search'];
        console.log('search', search);
        if(search) {
            const moviesResponse = await fetch(searchMovieAPI(search));
            movies = (await moviesResponse.json()).results;
        }

    } else {
        throw new Error('no params read');
    }



    return (
    <main className={styles.main}>
        <form className="flex flex-row items-center gap-3 w-1/3">
            <input className="focus:ring-2 focuclassNameg-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                   type="text" aria-label="Search Movie" placeholder="Search Movie..." name="search" />

            <button type="submit">search</button>
        </form>
        <br/>
        <div className={`${styles.searchResult} flex flex-row flex-wrap gap-2 items-center overflow-auto`}>
            {movies ?
                movies.map((it: any) => (
                    <MovieCard
                        key={it.id}
                        id={it.id}
                        title={it.title}
                        overview={it.overview}
                        poster_path={it.poster_path}
                        release_date={it.release_date}></MovieCard>
                )) : ''
            }
            { movies.length === 0 ? (<h2>Nothing to show</h2>) : '' }
        </div>
    </main>
  )
}
