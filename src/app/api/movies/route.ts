import { NextResponse } from 'next/server';
import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

let MEMO_DB: any[] = [];


export async function POST(request: Request) {
    const body = await request.json();
    const movieAPIResponse = await fetch(getMovieByIdAPI(body.new_movie));
    const movie = await movieAPIResponse.json();
    const file = path.join(process.cwd(), 'data.json');

    try {
        const dataFromFile = readFileSync(file, 'utf8');
        MEMO_DB = [...JSON.parse(dataFromFile)];
    } catch (error) {
        console.log('no file yet..');
    }
    MEMO_DB.push({
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        id: movie.id,
    });
    const json = JSON.stringify(MEMO_DB);
    writeFileSync(file, json);

    return NextResponse.json({body})
}


export async function GET(request: Request) {
    let parsedData = {};
    try {
        const file = path.join(process.cwd(), 'data.json');
        const dataFromFile = readFileSync(file, 'utf8');
        parsedData = JSON.parse(dataFromFile);
    } catch (error) {
        console.log('something went wrong while reading file');
    }

    return NextResponse.json({my_movies: parsedData})
}

