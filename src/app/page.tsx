"use client";
import GameCard from "./components/GameCard";
import styles from "./page.module.scss";
import { useGames } from "./hooks/useGames";

const Home = () => {
  const { games, loading, error } = useGames();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.gamesContainer}>
      {games.map((game) => (
        <GameCard key={game.appid} game={game} />
      ))}
    </div>
  );
};

export default Home;
