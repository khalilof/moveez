import Image from 'next/image'
import Link from 'next/link';
import AddToWatchList from '@/app/components/AddToWatchList';

export default function MovieCard({title, release_date, poster_path, overview, id}: {title: string, release_date: string, poster_path: string, overview: string, id: string}) {

    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                   src={ 'https://image.tmdb.org/t/p/original' + poster_path }
                   width="160"
                   height="240"
                   priority
                   alt={ title }
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400 text-lg">
                        { title }
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        { release_date }
                    </div>
                </figcaption>
                <blockquote>
                    <p className="text-lg font-medium">
                        { overview }
                    </p>
                </blockquote>

             <div className="flex flex-row justify-between leading-[40px] ">
                 <Link className="h-10 px-6 font-semibold rounded-full bg-sky-600 text-white" href={`/movie/${id}`}>More Info </Link>
                 <AddToWatchList movieId={id} key={id}/>
             </div>
            </div>
        </figure>
    )
}