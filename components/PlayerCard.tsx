"use client"
interface PlayerProps {
  player: {
    id: number;
    name: string;
    position: string;
    price: number;
  };
}

export default function PlayerCard({ player }: PlayerProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Price: ${player.price}</p>
    </div>
  );
}
