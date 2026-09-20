import type { Technology } from "../Types/types";
import TechCard from "./TechCard";

interface TechListPorps {
  technologies: Technology[];
}

const TechList = ({ technologies }: TechListPorps) => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 justify-between grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology, index) => (
          <TechCard key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechList;
