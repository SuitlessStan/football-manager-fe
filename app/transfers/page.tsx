"use client";

import PlayerCard from "../../components/PlayerCard";
import { useEffect, useState } from "react";
import api from "@/utils/api";

interface Player {
  id: number;
  name: string;
  position: string;
  price: number;
}

export default function TransfersPage() {
  const [transfers, setTransfers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransfers = async () => {
      setLoading(true);
      try {
        const response = await api.get("/transfers");
        setTransfers(response.data.transfers);
      } catch (error) {
        console.error("Failed to fetch transfers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransfers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transfer Market</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transfers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
}
