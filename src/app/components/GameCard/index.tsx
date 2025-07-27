import Image from "next/image";
import styles from "./index.module.scss";
import { Game } from "../../types/game";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className={styles.gameCard}>
      <Image
        src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
        alt={game.name}
        width={100}
        height={100}
        className={styles.gameImage}
      />
      <p className={styles.gameName}>{game.name}</p>
      <p className={styles.playTime}>
        {Math.floor(game.playtime_forever / 60)} hours
      </p>
    </div>
  );
};

export default GameCard;
