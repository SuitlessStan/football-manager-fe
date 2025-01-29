"use client"
interface TeamSummaryProps {
  team: {
    id: number;
    name: string;
    budget: number;
    players: { id: number; name: string; position: string }[];
  };
}

export default function TeamSummary({ team }: TeamSummaryProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{team.name}</h2>
      <p>Budget: ${team.budget}</p>
      <h3 className="mt-4">Players:</h3>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}
