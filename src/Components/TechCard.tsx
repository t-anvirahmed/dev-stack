import type { Technology } from "../Types/types";

interface TechCardProps {
  technology: Technology;
}

const TechCard = ({ technology }: TechCardProps) => {
  return (
    <div className="w-full rounded-[36px] border-2 border-slate-100 bg-white p-8 shadow-sm">
      {/* Top section */}
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

      {/* Name & Description */}
      <div className="mt-10">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          {technology.name}
        </h2>

        <p className="mt-6 text-xl leading-9 text-slate-500">
          {technology.description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-slate-100"></div>

      {/* Information */}
      <div className="flex items-center justify-between gap-4">
        {/* Category */}
        <span className="rounded-xl bg-slate-50 px-4 py-2 text-lg text-slate-600">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-lg text-slate-500">{technology.difficulty}</span>

        {/* Rating */}
        <span className="flex items-center gap-2 text-lg font-medium text-slate-600">
          <span className="text-xl text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-8 w-full rounded-2xl bg-slate-950 py-4 text-xl font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
