import Image from 'next/image';

export default async function WatchList() {

    const getMyMovies = await fetch('http://localhost:3001/api/movies', {
        method: 'GET',
        cache: 'no-store'});
    const myWatchList = (await getMyMovies.json()).my_movies;

    console.log(myWatchList);
    return (
        <div>
            {
                myWatchList.map(it => (
                    <ul className="max-w-md divide-yclassNamede-gray-200 dark:divide-gray-700">
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
