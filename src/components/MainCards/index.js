import MainCard from "../MainCard"
import "./index.scss";

import cardImg1 from "../../assets/images/main-card-1.png";
import cardImg2 from "../../assets/images/main-card-2.png";
import cardImg3 from "../../assets/images/main-card-3.png";
import cardImg4 from "../../assets/images/main-card-4.png";
import cardImg5 from "../../assets/images/main-card-5.png";
import cardImg6 from "../../assets/images/main-card-6.png";


function MainCards() {
    return (
        <section className="main-cards">
            <div className="container">
                <div className="main-cards__inner">
                    <div className="main-cards__card">
                        <MainCard img={cardImg1} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainCards;