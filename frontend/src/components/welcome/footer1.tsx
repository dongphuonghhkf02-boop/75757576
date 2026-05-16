import React from "react";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
  device?: any;
};

const Footer1: React.FC<Footer1Type> = ({
  className = "",
  device = "Desktop",
}) => {
  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-device={device}
      data-testid="footer"
    >
      {/* Main grid: logo + 3 info columns */}
      <div className={styles.mainGrid}>
        <div className={styles.logoCol}>
          <img
            className={styles.logoIcon}
            width={366}
            height={261}
            alt="ТАМІС АГРО"
            src="/logo@2x.png"
          />
        </div>

        {/* Col 1 — "Нашим клієнтам" */}
        <nav className={styles.col}>
          <b className={styles.colTitle}>Нашим клієнтам:</b>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Товари та послуги</li>
            <li className={styles.menuItem}>Про нас</li>
            <li className={styles.menuItem}>Блог</li>
            <li className={styles.menuItem}>Повернення товару</li>
          </ul>
        </nav>

        {/* Col 2 — "Наша адреса" */}
        <div className={styles.col}>
          <b className={styles.colTitle}>Наша адреса:</b>
          <address className={styles.colText}>
            55200, м. Первомайськ,
            <br />
            вул. Київська 135
            <br />
            Миколаївська область
          </address>
        </div>

        {/* Col 3 — "Контакти" + social block stacked below */}
        <div className={[styles.col, styles.colContacts].join(" ")}>
          <div>
            <b className={styles.colTitle}>Контакти:</b>
            <div className={styles.colText} style={{ marginTop: "24px" }}>
              050 937 56 57
              <br />
              067 510 13 07
              <br />
              tamisagro@gmail.com
            </div>
          </div>

          {/* Social media — pinned at bottom of contacts column */}
          <div className={styles.socialBlock}>
            <b className={styles.colTitle}>Ми в соціальних мережах :</b>
            <div className={styles.socialIcons}>
              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialLink}
                onClick={(e) => e.preventDefault()}
              >
                <img
                  className={styles.socialIcon}
                  width={32}
                  height={32}
                  alt="Facebook"
                  src="/icon-facebook.png"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialLink}
                onClick={(e) => e.preventDefault()}
              >
                <img
                  className={styles.socialIcon}
                  width={32}
                  height={32}
                  alt="Instagram"
                  src="/Group.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row — copyright + site credit */}
      <div className={styles.creditsRow}>
        <div className={styles.copyright}>
          <img
            className={styles.copyrightIcon}
            width={16}
            height={16}
            alt=""
            src="/ant-design-copyright-circle-outlined.svg"
          />
          <span>2026. Всі права захищено</span>
        </div>
        <div className={styles.siteCredit}>
          Сайт створено -{" "}
          <a
            href="https://www.olhalazarieva.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteCreditLink}
          >
            www.olhalazarieva.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
