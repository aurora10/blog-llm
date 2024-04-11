import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link';



const getData = async () => {
  const res = await fetch(
    "http://localhost:3000/api/random_post",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  
  return res.json();
};

const Featured = async () => {

  // Replace line breaks with <br> tags
  

  const data = await getData();

  const formattedDesc = data.desc.replace(/\n/g, '<br>');

  // Function to truncate string at the end of a word
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) return str;
    const subString = str.substr(0, maxLength - 1); // Get substring up to one character less than maxLength
    return subString.substr(0, Math.min(subString.length, subString.lastIndexOf(" "))) ; // Cut off at the last space
  };

  //console.log(data);
  return (
    <div className='styles.container'>
      <h1 className={styles.title}>
        
        {/* <b className={styles.bold}>Hey Robzidev here!</b> Discover my stories and creative ideas */}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          < Image src={data.img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data.title}</h1>
          <p className={styles.postDesc} dangerouslySetInnerHTML={{ __html: truncateString(formattedDesc, 750) }}></p>
         
          
          <Link href={`/posts/${data.slug}`} >
             <button className={styles.button}>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured
