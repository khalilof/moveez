'use client';
import { useRouter } from 'next/navigation';

export default function AddToWatchList({movieId}: {movieId: string}) {
    const router = useRouter();

    const create = async() => {
        await fetch('http://localhost:3001/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              new_movie: movieId
            }),
        });
        router.refresh();
    }

    return (
        <button onClick={create} className="h-10 px-6 font-semibold rounded-full bg-emerald-300 text-white" type="submit">Add to My Watch List </button>
    )
}