"use client"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Team {
  id: number;
  name: string;
  budget: number;
  players: { id: number; name: string; position: string }[];
}

export default function TeamDetailsPage() {
  const router = useRouter();
  const { teamId } = router.query;
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    if (!teamId) return;
    const fetchTeamDetails = async () => {
      const response = await fetch(`/api/teams/${teamId}`);
      const data = await response.json();
      setTeam(data.team);
    };
    fetchTeamDetails();
  }, [teamId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Team Details</h1>
      {team ? <pre>{JSON.stringify(team, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
