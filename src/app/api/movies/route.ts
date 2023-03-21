import { NextResponse } from 'next/server';
import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import { readFileSync, writeFileSync } from 'fs';

let MEMO_DB: any[] = [];
const FILE_PATH = './data.json';

export async function POST(request: Request) {
    const body = await request.json();
    const movieAPIResponse = await fetch(getMovieByIdAPI(body.new_movie));
    const movie = await movieAPIResponse.json();


    const dataFromFile = readFileSync(FILE_PATH, 'utf8');
    MEMO_DB = [...JSON.parse(dataFromFile)];
    MEMO_DB.push({
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        id: movie.id,
    });
    const json = JSON.stringify(MEMO_DB);
    writeFileSync(FILE_PATH, json);

    return NextResponse.json({body})
}


export async function GET(request: Request) {
    console.log('requesting db', MEMO_DB);
    let parsedData = {};
    try {
        const dataFromFile = readFileSync(FILE_PATH, 'utf8');
        console.log('reading files');
        parsedData = JSON.parse(dataFromFile);
        console.log('reading files done');
    } catch (error) {
        console.log('something went wrong while reading file');
    }
    console.log('sending data', parsedData);
    return NextResponse.json({my_movies: parsedData})
}

