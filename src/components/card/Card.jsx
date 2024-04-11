import React from "react";

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  // Replace line breaks with <br> tags
  const formattedDesc = item.desc.replace(/\n/g, '<br>');

  // Function to truncate string at the end of a word
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) return str;
    const subString = str.substr(0, maxLength - 1); // Get substring up to one character less than maxLength
    return subString.substr(0, Math.min(subString.length, subString.lastIndexOf(" "))) + "..."; // Cut off at the last space
  };

  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)}-{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>

        {/* Render formatted description */}
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: truncateString(formattedDesc, 60) }}></p>

        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
