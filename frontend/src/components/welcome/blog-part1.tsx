import React from "react";
import CardBlog1 from "./card-blog1";
import styles from "./blog-part1.module.css";

export type BlogPart1Type = {
  className?: string;
};

type BlogItem = {
  image: string;
  title: string;
  description: string;
};

const items: BlogItem[] = [
  {
    image: "/Image-Container@2x.png",
    title: "Мінус 30% на селітрі",
    description:
      "Як інокулянти фіксують атмосферний азот і дозволяють економити на мінеральних добривах без втрати врожайності.",
  },
  {
    image: "/Image-Container@2x.png",
    title: "Мінус 30% на селітрі",
    description:
      "Як інокулянти фіксують атмосферний азот і дозволяють економити на мінеральних добривах без втрати врожайності.",
  },
  {
    image: "/Image-Container@2x.png",
    title: "Мінус 30% на селітрі",
    description:
      "Як інокулянти фіксують атмосферний азот і дозволяють економити на мінеральних добривах без втрати врожайності.",
  },
];

const BlogPart1: React.FC<BlogPart1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.blogPart, className].join(" ")}
      data-testid="blog-section"
    >
      <h2 className={styles.h2}>
        <span className={styles.spanAccent}>БЛОГ</span>
        <span className={styles.spanBlack}> АГРОНОМА</span>
      </h2>
      <div className={styles.cardsGroup}>
        {items.map((item, idx) => (
          <CardBlog1
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPart1;
