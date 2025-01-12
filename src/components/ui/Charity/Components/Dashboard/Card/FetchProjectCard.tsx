import { useFetchCharity } from "@/hooks/use-charity";
import React from "react";
import ProjectCard from "./ProjectCard";

const FetchProjectCard: React.FC = () => {
  const { charity, loading, error } = useFetchCharity();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!charity) return <p>No charity data available</p>;

  return (
    <div className="flex">
      <ProjectCard
        id={charity.id}
        title={""}
        description={""}
        goalAmount={0}
        raisedAmount={0}
        startDate={""}
        endDate={""}
        status={""}
        charity={{
          id: "",
          userId: "",
          name: "",
          address: [],
          region: [],
          category: [],
          type: "",
          hashedStripeId: "",
          taxCode: "",
          __v: 0,
        }}
        categories={[]}
        region={{
          id: "",
          name: "",
        }}
        createdAt={""}
        images={[]}
        videos={[]}
      />
    </div>
  );
};

export default FetchProjectCard;
