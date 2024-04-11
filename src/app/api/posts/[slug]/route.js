// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// // GET SINGLE POST
// export const GET = async (req, { params }) => {
//   const { slug } = params;

//   try {
//     const post = await prisma.post.update({
//       where: { slug },
//       include: { user: true },
//       data: { views: { increment: 1 } },
//       include: { user: true },

//     });

//     return new NextResponse(JSON.stringify(post, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        user: true,
      },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Post not found!" }, { status: 404 })
      );
    }

    // Increment views
    await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
