import { useEffect, useState } from "react";
import type { Technology } from "../Types/types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";
import { toast, ToastContainer } from "react-toastify";

const MainLayout = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Data Fetching Failed ");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError("Data Loading Error");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addToStack = (technology: Technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        toast.warning("Already added!");
        return currentStack;
      }

      toast.success("Technology added!");

      return [...currentStack, technology];
    });
  };

  const removeFromStack = (id: string) => {
    setStack((currentStack) => {
      const updatedStack = currentStack.filter(
        (technology) => technology.id !== id,
      );

      toast.error("Technology removed!");

      return updatedStack;
    });
  };

  const removeAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto flex flex-col items-start gap-8 px-4 lg:flex-row lg:justify-between">
      <TechList technologies={technologies} onAddToStack={addToStack} />
      <Sidebar
        stack={stack}
        onRemove={removeFromStack}
        onRemoveAll={removeAll}
      />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
