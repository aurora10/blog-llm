// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";
// import { getAuthSession } from "@/utils/auth";

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);
//   const cat = searchParams.get("cat");

//   const query = {
//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//     orderBy: {
//       createdAt: "desc", // or updatedAt: 'desc'
//     },
//     take: 5, // Limit the number of posts to fetch to 5
//     include: {
//       user: true, // Include the user field
//     },
//   };

//   try {
//     const posts = await prisma.post.findMany(query);

//     const postTitles = posts.map((post) => post.title); // Extracting post titles
//     const postImages = posts.map((post) => post.img);
//     const postCatSlug = posts.map((post) => post.catSlug);
//     const createdAt = posts.map((post) => post.createdAt.toISOString());

//     return new NextResponse(
//       JSON.stringify(
//         { postTitles, postImages, postCatSlug, createdAt },
//         { status: 200 }
//       )
//     );
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";
// import { getAuthSession } from "@/utils/auth";

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);
//   const cat = searchParams.get("cat");

//   const query = {
//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//     orderBy: {
//       createdAt: "desc", // or updatedAt: 'desc'
//     },
//     take: 5, // Limit the number of posts to fetch to 5
//     include: {
//       user: true, // Include the user field
//     },
//   };

//   try {
//     const posts = await prisma.post.findMany(query);

//     console.log("Posts:", posts); // Log the fetched posts

//     const postTitles = posts.map((post) => post.title); // Extracting post titles
//     const postImages = posts.map((post) => post.img);
//     const postCatSlug = posts.map((post) => post.catSlug);
//     const createdAt = posts.map((post) => post.createdAt.toISOString());

//     return new NextResponse(
//       JSON.stringify(
//         { postTitles, postImages, postCatSlug, createdAt },
//         { status: 200 }
//       )
//     );
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  const query = {
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      createdAt: "desc", // or updatedAt: 'desc'
    },
    take: 5, // Limit the number of posts to fetch to 5
    include: {
      user: true, // Include the user field
    },
  };

  try {
    const posts = await prisma.post.findMany(query);

    //console.log("Posts:", posts); // Log the fetched posts

    const postData = posts.map((post) => ({
      title: post.title,
      image: post.img || "", // Use empty string if image is not available
      slug: post.catSlug || "",
      slugPost: post.slug || "",
      createdAt: post.createdAt.toISOString(),
      user: {
        name: post.user.name,
        // Include other user properties as needed
      },
    }));

    return new NextResponse(JSON.stringify(postData, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
