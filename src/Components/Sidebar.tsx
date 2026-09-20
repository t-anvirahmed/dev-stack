import type { Technology } from "../Types/types";

interface SidebarProps {
  stack: Technology[];
}

const Sidebar = ({ stack }: SidebarProps) => {
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
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-2xl border-2 border-slate-100 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <div>
                <h3 className="font-semibold text-slate-800">
                  {technology.name}
                </h3>

                <p className="text-sm text-slate-500">{technology.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
