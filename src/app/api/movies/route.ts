import { NextResponse } from 'next/server';
import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import addData from '@/app/firebase/addDoc';
import getCollection from '@/app/firebase/getCollection';

const watchListCollection = 'khalil-watchlist';

export async function POST(request: Request) {
    const body = await request.json();
    const movieAPIResponse = await fetch(getMovieByIdAPI(body.new_movie));
    const movie = await movieAPIResponse.json();

    const movieToAdd = {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        id: movie.id,
    }
    const { result, error } = await addData(watchListCollection, String(movie.id), movieToAdd);

    if (error) {
        return console.log(error);
    }
    return NextResponse.json({result});
}


export async function GET(request: Request) {
    const { result, error } = await getCollection(watchListCollection);

    if (error) {
        return console.log(error);
    }

    return NextResponse.json({my_movies: result});
}

