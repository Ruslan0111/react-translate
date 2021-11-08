import "./index.scss";

import { useTranslation } from "react-i18next";

function MainTop() {
    const { t } = useTranslation();
    return (
        <section className="main-top">
            <div className="container">
                <div className="main-top__inner">
                    <button className="main-top__btn">{ t("header-link1") }</button>
                    <h1 className="main-top__title">{ t("main-title") }</h1>
                </div>
            </div>
        </section>
    )
}

export default MainTop;