import { useState } from "react";
import { BookCard } from "../../components/BookCard";

import { data } from "../../data";

export const Home = () => {
  const [bookData, setBookData] = useState(data.products);

  const filterBook = (type) => {
    let filteredBooks;

    if (type === "disponibile") {
      filteredBooks = data.products.filter((item) => item.available);
    } else {
      filteredBooks = data.products.filter((item) => !item.available);
    }
    setBookData(filteredBooks);
  };

  return (
    <div>
      <button onClick={() => filterBook("disponibile")}>Disponibile</button>
      <button onClick={() => filterBook("non-disponibile")}>
        non Disponibile
      </button>
      <div className="productList__container">
        {bookData.map((item) => (
          <BookCard
            key={item.id}
            title={item.name}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};
