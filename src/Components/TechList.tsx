import type { Technology } from "../Types/types";
import TechCard from "./TechCard";

interface TechListPorps {
  technologies: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const TechList = ({ technologies, onAddToStack }: TechListPorps) => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 justify-between grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology, index) => (
          <TechCard
            key={index}
            technology={technology}
            onAddToStack={onAddToStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechList;
