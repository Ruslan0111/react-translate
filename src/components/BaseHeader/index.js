import { useTranslation  } from "react-i18next";

import "./index.scss"

function BaseHeader() {
    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <a href="#" className="header__logo">
                        Articleuz
                    </a>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li>
                                <a href="#" className="header__link">{t("header-link1")}</a>
                            </li>
                            <li>
                                <a href="#" className="header__link">{t("header-link2")}</a>
                            </li>
                            <li>
                                <a href="#" className="header__link">{t("header-link3")}</a>
                            </li>
                            <li>
                                <a href="#" className="header__link">{t("header-link4")}</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <ul className="header__lang">
                                <li>
                                    <button
                                        className={`header__lang-item ${i18n.language === "uz" ? "header__lang-item--active" : ""}`}
                                        onClick={() => i18n.changeLanguage("uz")}
                                    >Uz</button>
                                </li>
                                <li>
                                    <button
                                        className={`header__lang-item ${i18n.language === "ru" ? "header__lang-item--active" : ""}`}
                                        onClick={() => i18n.changeLanguage("ru")}
                                    >Ру</button>
                                </li>
                                <li>
                                    <button
                                        className={`header__lang-item ${i18n.language === "en" ? "header__lang-item--active" : ""}`}
                                        onClick={() => i18n.changeLanguage("en")}
                                    >En</button>
                                </li>
                            </ul>
                            <a href="tel:+998716652222" className="header__phone">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.16667 1.33334H6.5L8.16667 5.50001L6.08333 6.75001C6.9758 8.55962 8.44039 10.0242 10.25 10.9167L11.5 8.83334L15.6667 10.5V13.8333C15.6667 14.2754 15.4911 14.6993 15.1785 15.0119C14.866 15.3244 14.442 15.5 14 15.5C10.7494 15.3025 7.68346 13.9221 5.38069 11.6193C3.07792 9.31655 1.69754 6.25062 1.5 3.00001C1.5 2.55798 1.67559 2.13406 1.98816 1.8215C2.30072 1.50894 2.72464 1.33334 3.16667 1.33334" stroke="#000421" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                71 665-22-22
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default BaseHeader;