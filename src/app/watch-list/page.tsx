import Image from 'next/image';


export default async function WatchList() {
    let apiURL = '';
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        apiURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies`;
    } else {
        apiURL = 'http://localhost:3000/api/movies';
    }
     const getMyMovies = await fetch(apiURL, {
         method: 'GET',
         cache: 'no-store'});
     const myWatchList = (await getMyMovies.json()).my_movies;


    return (
        <div>
            {
                myWatchList.map((it: any) => (
                    <ul key={it.id} className="max-w-md divide-yclassNamede-gray-200 dark:divide-gray-700">
                        <li className="pb-3 sm:pb-4">
                            <div className="flex items-centerclassNamee-x-4">
                                <div className="flex-shrink-0">
                                    <Image className="w-8 h-8 rounded-full"
                                           src={ 'https://image.tmdb.org/t/p/original' + it.poster_path }
                                           width="160"
                                           height="240"
                                           priority
                                           alt={ it.title }
                                    />
                                </div>
                                <div className=" flex-1 min-w-0">
                                    <p className=" text-sm font-medium text-gray-900 truncate dark:text-white">
                                        { it.title }
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    { it.release_date }
                                </div>
                            </div>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}
