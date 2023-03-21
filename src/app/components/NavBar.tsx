'use client';
import Link from "next/link";

export function NavBar() {

    return(
        <nav className="flex items-start gap-5 flex-row bg-zinc-600 text-yellow-100 p-2">
            <Link href='/'>Explore</Link>
            <Link href='/watch-list'>Watch List</Link>
        </nav>
    );
}