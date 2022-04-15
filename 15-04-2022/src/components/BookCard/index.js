import "./styles.css";

export const BookCard = ({ title, description, img }) => (
  <div className="BookCard__container">
    <h2 className="BookCard__title">{title}</h2>
    <img className="BookCard__img" alt="book-img" src={img} />
    <p className="BookCard__description">{description}</p>
  </div>
);
