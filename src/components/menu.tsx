import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../css/menu.module.css";
import { ParseKeys } from "i18next";

interface MenuLink {
  title: ParseKeys;
  to: string;
}

const MenuLinks: MenuLink[] = [
  {
    title: "menu.LinkToPresentation",
    to: "/",
  },
  {
    title: "menu.LinkToStudies",
    to: "/studiesPage",
  },
  {
    title: "menu.LinkToExperiences",
    to: "/experiencesPage",
  },
  {
    title: "menu.LinkToMyTools",
    to: "/my-tools",
  },
  {
    title: "menu.LinkToProjects",
    to: "/projectPage",
  },
];

const MenuNavbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div
      className={isMenuOpen ? `${styles.navActive} ${styles.whiteColor}` : ""}
    >
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuIcon}
        >
          <span
            className={`${styles.menuIconLine} ${styles.menuIconLineLeft}`}
          ></span>
          <span className={styles.menuIconLine}></span>
          <span
            className={`${styles.menuIconLine} ${styles.menuIconLineRight}`}
          ></span>
        </div>

        <img
          onClick={toggleLanguage}
          src={`${process.env.PUBLIC_URL}/${
            i18n.language === "fr" ? "en" : "fr"
          }.png`}
          alt={`${i18n.language === "fr" ? "Anglais" : "Français"}`}
          className="language-img-icon"
          style={{ maxHeight: "26px", margin: "16px", cursor: "pointer" }}
        />
      </div>
      <div className={styles.nav}>
        <div className={styles.navContent}>
          <ul className={styles.navList}>
            {MenuLinks.map((link) => (
              <li className={styles.navListItem}>
                <Link
                  to={link.to}
                  style={{ textDecoration: "none", color: "#008F8C" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
