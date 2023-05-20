import { NextResponse } from "next/server";
import blogs from '../blogs.json'

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const searchInput = searchParams.get('search');
    const filteredBlog = blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(searchInput.toLowerCase());
    })
    return NextResponse.json(filteredBlog)
}