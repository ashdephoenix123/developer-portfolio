import blogs from './blogs.json'
import { NextResponse } from 'next/server'

export async function GET(request){
    return NextResponse.json(blogs)
}