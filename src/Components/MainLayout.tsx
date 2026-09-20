import { useEffect, useState } from "react";
import type { Technology } from "../Types/types";
import TechList from "./Techlist";

const MainLayout = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <TechList technologies={technologies} />;
};

export default MainLayout;
