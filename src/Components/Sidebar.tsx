import { MdDelete } from "react-icons/md";
import type { Technology } from "../Types/types";

interface SidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <aside className="w-full lg:w-1/4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-heading">Your Stack</h2>

      <p className="mt-2 text-primary-text">
        {stack.length === 0
          ? "No technologies selected"
          : `${stack.length} ${
              stack.length === 1 ? "Technology" : "Technologies"
            } Selected`}
      </p>

      <div className="mt-6 space-y-4">
        {stack.length === 0 ? (
          <p className="text-slate-300 text-center border-2 border-dashed rounded-2xl p-8">
            Your stack is empty.
          </p>
        ) : (
          <>
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-3 rounded-2xl border-2 border-slate-100 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {technology.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {technology.category}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-3xl leading-none text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-6 w-full rounded-2xl border border-red-400 py-3 text-lg font-semibold text-red-500 transition hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
