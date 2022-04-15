import { useState } from "react";
import { DescriptionCard } from "../../components/DescriptionCard";

import "./styles.css";

export const About = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <button onClick={() => setShowDescription(!showDescription)}>
        Show Description
      </button>
      <div className="description-container">
        {showDescription && (
          <>
            <DescriptionCard
              title="Job"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor sagittis est, gravida pulvinar urna. Donec ac erat orci. Donec lobortis pharetra"
            />
            <DescriptionCard
              title="Hobby"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor sagittis est, gravida pulvinar urna. Donec ac erat orci. Donec lobortis pharetra"
            />
            <DescriptionCard
              title="Languages"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor sagittis est, gravida pulvinar urna. Donec ac erat orci. Donec lobortis pharetra"
            />
          </>
        )}
      </div>
    </>
  );
};
