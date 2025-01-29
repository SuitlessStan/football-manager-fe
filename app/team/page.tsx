"use client";

import TeamSummary from "../../components/TeamSummary";
import { useEffect, useState } from "react";
import api from "@/utils/api";

interface Team {
  id: number;
  name: string;
  budget: number;
  players: { id: number; name: string; position: string }[];
}

export default function TeamPage() {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const response = await api.get("/teams/1");
        setTeam(response.data.team);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Team</h1>
      {loading ? <p>Loading...</p> : team ? <TeamSummary team={team} /> : <p>No team found.</p>}
    </div>
  );
}
