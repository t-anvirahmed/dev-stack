import type { Technology } from "../Types/types";
import { FaStar } from "react-icons/fa";

interface TechCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
}

const TechCard = ({ technology, onAddToStack }: TechCardProps) => {
  return (
    <div className="w-full rounded-[36px] border-2 border-slate-100 bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-16 w-16 object-contain"
        />
        <span className="rounded-full border-2 border-sky-100 bg-sky-50 px-6 py-3 text-lg font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-heading">
          {technology.name}
        </h2>

        <p className="mt-1 text-primary-text">{technology.description}</p>
      </div>
      <div className="my-6 border-t border-slate-100"></div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm rounded-xl bg-slate-50 px-4 py-2 text-primary-text">
          {technology.category}
        </span>
        <span className=" text-sm text-primary-text">
          {technology.difficulty}
        </span>
        <span className="flex items-center gap-2 font-medium text-primary-text">
          <span className=" text-amber-400">
            <FaStar />
          </span>
          {technology.rating}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        className="mt-8 w-full rounded-2xl bg-heading py-4 text-xl font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
