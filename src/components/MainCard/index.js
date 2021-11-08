import "./index.scss";

function MainCard({ img, title }) {
    return (
        <div className="main-card">
            <div className="main-card__img">
                <img src={img} />
            </div>  
            <h6 className="main-card__title">{title}</h6> 
        </div>
    )
}

export default MainCard;