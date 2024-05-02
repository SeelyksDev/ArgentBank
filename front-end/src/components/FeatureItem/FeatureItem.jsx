import "./FeatureItem.css";

const FeatureItem = ({ img, title, paragraph, altImg }) => {
    return (
        <div className="feature-item">
            <img src={img} alt={altImg} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default FeatureItem;
