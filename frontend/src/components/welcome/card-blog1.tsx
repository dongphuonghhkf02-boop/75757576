import React from "react";
import styles from "./card-blog1.module.css";

export type CardBlog1Type = {
  className?: string;
  image: string;
  title: string;
  description: string;
  /** Backwards-compat — kept so legacy callers won't break */
  imageContainer?: string;
  showRole?: boolean;
  showDate?: boolean;
  showButton?: boolean;
  showTag?: boolean;
  device?: any;
  device1?: any;
  prop?: string;
  showLabel?: boolean;
  primaryButtonJustifyContent?: any;
  iconContainerBackgroundColor?: any;
  size?: any;
  showFire?: boolean;
};

const CardBlog1: React.FC<CardBlog1Type> = ({
  className = "",
  image,
  title,
  description,
}) => {
  return (
    <article
      className={[styles.cardBlog, className].join(" ")}
      data-testid="blog-card"
    >
      <img
        className={styles.imageContainer}
        loading="lazy"
        width={544}
        height={459}
        alt=""
        src={image}
      />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <button type="button" className={styles.readMore} aria-label="Читати більше">
          <span className={styles.readMoreLabel}>Читати більше</span>
          <img
            className={styles.iconArrow}
            src="/icon-container-arrow.png"
            alt=""
            width={48}
            height={48}
            draggable={false}
          />
        </button>
      </div>
    </article>
  );
};

export default CardBlog1;
