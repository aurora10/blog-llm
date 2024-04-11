import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//get rand post

export const GET = async () => {
  try {
    const count = await prisma.post.count();

    if (count === 0) {
      return new NextResponse(
        JSON.stringify({ message: "No posts found!" }, { status: 404 })
      );
    }

    const randomIndex = Math.floor(Math.random() * count);
    const randomPost = await prisma.post.findFirst({
      skip: randomIndex,
    });

    return new NextResponse(JSON.stringify(randomPost, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
