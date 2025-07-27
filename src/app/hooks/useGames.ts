import { useEffect, useState } from "react";
import { Game } from "../types/game";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://qnb0u4srf9.execute-api.eu-west-2.amazonaws.com/fetchOwnedGames"
        );

        if (!res.ok) {
          setError("Failed to fetch");
          return;
        }

        const data = await res.json();
        setGames(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
};
