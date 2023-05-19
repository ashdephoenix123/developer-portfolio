import blogs from '../blogs.json'
import { NextResponse } from 'next/server'

export async function POST(request) {

    const { blog } = await request.json();
    const blogdata = blogs.find((blogdata) => blogdata.id === Number(blog))
    return NextResponse.json({ blogdata, success: true })
}