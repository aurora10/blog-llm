
"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/menu_posts");
        
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const data = await res.json();
        console.log("Data:", data); // Log the data object
        
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.items}>
      {posts.map((post, index) => (
        <div key={index} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              {post.image && <Image src={post.image} alt="" fill className={styles.image} />}
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.slug]}`}>{post.slug}</span>
            <Link href={`/posts/${post.slugPost}`}>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
            <div className={styles.detail}>
              {post.user && post.user.name ? (
                <>
                  <span className={styles.username}>{post.user.name}</span>
                  <span className={styles.date}> - {post.createdAt}</span>
                </>
              ) : (
                <span className={styles.date}> - {post.createdAt}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPosts;


// import Image from "next/image";
// import Link from "next/link";
// import styles from "./menuPosts.module.css";

// const MenuPosts = ({ withImage }) => {
  

//   const getData = async () => {
//     const res = await fetch("http://localhost:3000/api/menu_posts", {
//       cache: "no-store",
//     });
  
//     if (!res.ok) {
//       throw new Error("Failed");
//     }
   
//     return res.json();
//   };
  
//   const data = getData();
  
//     return (

    
//         <div className={styles.items}>
//           {data.map((post, index) => (
//             <div key={index} className={styles.item}>
//               {withImage && (
//                 <div className={styles.imageContainer}>
//                   {post.image && <Image src={post.image} alt="" fill className={styles.image} />}
//                 </div>
//               )}
//               <div className={styles.textContainer}>
//                 <span className={`${styles.category} ${styles[post.slug]}`}>{post.slug}</span>
//                 <Link href={`/posts/${post.slugPost}`}>
//                   <h3 className={styles.postTitle}>{post.title}</h3>
//                 </Link>
//                 <div className={styles.detail}>
//                   {post.user && post.user.name ? (
//                     <>
//                       <span className={styles.username}>{post.user.name}</span>
//                       <span className={styles.date}> - {post.createdAt}</span>
//                     </>
//                   ) : (
//                     <span className={styles.date}> - {post.createdAt}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//   }
  


// export default MenuPosts;


