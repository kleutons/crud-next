import { NextResponse } from "next/server";


const url = process.env.API_URL;

export const GET = async () => {

    const result = await fetch(url,{
        headers:{
            "Content-type": "application/json" 
        }

    })
    const products = await result.json()

    return NextResponse.json({data:products})
};


export const POST = async (request) =>{
    const product = await request.json();
    console.log(product);
    const result = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(product)
    });

    const newProduct = await result.json();
    return NextResponse.json({data:newProduct})
}