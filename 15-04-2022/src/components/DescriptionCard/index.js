import "./styles.css";

export const DescriptionCard = ({ title, description }) => (
  <div className="descriptionCard-wrapper">
    <h2 className="title">{title}</h2>
    <p className="description">{description}</p>
  </div>
);
