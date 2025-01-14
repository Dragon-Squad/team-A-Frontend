import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSubscribeCategory } from "@/hooks/use-category";

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("categoryId") || "";
  console.log(categoryId);
  const { subscribe, loading } = useSubscribeCategory(categoryId);

  const handleSubscribe = async () => {
    await subscribe();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <button
        onClick={handleSubscribe}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </div>
  );
};

export default CategoryPage;
