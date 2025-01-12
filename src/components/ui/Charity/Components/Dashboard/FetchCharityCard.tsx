import { useFetchCharity } from "@/hooks/use-charity";
import React from "react";
import CharityCard from "./CharityCard";

const FetchCharityCard: React.FC = () => {
  const { charity, loading, error } = useFetchCharity();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!charity) return <p>No charity data available</p>;

  return (
    <div className="flex">
      <CharityCard
        id={charity._id}
        name={charity.name}
        type={charity.type}
        category={charity.category}
        region={charity.region}
      />
    </div>
  );
};

export default FetchCharityCard;
