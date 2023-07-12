import { NextResponse } from "next/server";
const url = process.env.API_URL;

// Unique Solo ID
export const GET = async (request, {params}) => {
    const id = params.id;
    const result = await fetch(`${url}/${id}`,{
        headers:{
            "Content-Type": "application/json",
        }
    })
    const product = await result.json()
    return NextResponse.json({data: product})
}


export const DELETE = async (request, {params}) => {
    const id = params.id;
    console.log(id);
    console.log(url);
    const result = await fetch(`${url}/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
        }
    })
    const product = await result.json()
    return NextResponse.json({data: `Product ${id} delete: ${product.title}`})
}


export const PUT = async (request, {params}) => {
    const id = params.id;
    const product = await request.json();
    const result = await fetch(`${url}/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const newProduct = await result.json();
    return NextResponse.json({data: product})
}