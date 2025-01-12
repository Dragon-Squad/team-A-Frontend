import React, { useState, useEffect } from "react";
import { updatedCharityObject } from "@/types/charity";
import { useFetchCharity, useUpdateCharity } from "@/hooks/use-charity";
import {
  IconArrowLeft,
  IconEdit,
  IconCheck,
  IconX,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Education" },
  { name: "Environment" },
  { name: "Religion" },
  { name: "Humanitarian" },
  { name: "Housing" },
  { name: "Other" },
];

const regions = [
  { name: "Europe" },
  { name: "North America" },
  { name: "South America" },
  { name: "Australia" },
  { name: "Antarctica" },
  { name: "Global" },
];

const CharityProfilePage = () => {
  const navigate = useNavigate();
  const {
    updatedCharity,
    loading: updating,
    error: updateError,
    updateCharity,
  } = useUpdateCharity();
  const {
    user: fetchedCharity,
    loading: fetching,
    error: fetchError,
  } = useFetchCharity();

  const [isEditing, setIsEditing] = useState(false);

  // Local state for form input
  const [charityData, setCharityData] = useState<updatedCharityObject>({
    name: "",
    category: [],
    type: "",
    region: [],
  });

  // Update state with fetched charity data
  useEffect(() => {
    if (fetchedCharity) {
      setCharityData({
        name: fetchedCharity.name || "",
        category: fetchedCharity.category || [],
        type: fetchedCharity.type || "",
        region: fetchedCharity.region || [],
      });
    }
  }, [fetchedCharity]);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCharityData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setCharityData((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category],
    }));
  };

  // Handle region change
  const handleRegionChange = (region: string) => {
    setCharityData((prev) => ({
      ...prev,
      region: prev.region.includes(region)
        ? prev.region.filter((reg) => reg !== region)
        : [...prev.region, region],
    }));
  };

  // Handle save button click
  const handleSaveClick = async () => {
    if (!charityData.name || !charityData.type) {
      alert("Please fill in all required fields (name and type).");
      return;
    }
    await updateCharity(charityData);
    setIsEditing(false);
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-gray-700">
        Loading charity information...
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-red-500">
        Error: {fetchError}
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 px-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
      >
        <IconArrowLeft size={20} /> Back
      </button>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 relative">
        <h1 className="text-3xl font-bold text-orange-700 mb-8 text-center flex items-center gap-2">
          <IconBuildingCommunity size={30} /> Charity Profile
        </h1>

        {isEditing ? (
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Charity Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter charity name"
                value={charityData.name}
                onChange={handleInputChange}
                className="border p-2 w-full rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Category:
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      charityData.category.includes(category.name)
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => handleCategoryChange(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Region:</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {regions.map((region) => (
                  <button
                    key={region.name}
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      charityData.region.includes(region.name)
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => handleRegionChange(region.name)}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block font-medium text-gray-700">
                Type:
              </label>
              <input
                id="type"
                name="type"
                type="text"
                placeholder="Enter charity type"
                value={charityData.type}
                onChange={handleInputChange}
                className="border p-2 w-full rounded-lg"
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                <IconX size={20} /> Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveClick}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                {updating ? (
                  <IconCheck size={20} className="animate-spin" />
                ) : (
                  <IconCheck size={20} />
                )}{" "}
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="font-medium text-gray-600 w-40">Name:</span>
              <span className="text-gray-800">{charityData.name || "N/A"}</span>
            </div>

            <div className="flex items-center">
              <span className="font-medium text-gray-600 w-40">Category:</span>
              <span className="text-gray-800">
                {charityData.category.join(", ") || "N/A"}
              </span>
            </div>

            <div className="flex items-center">
              <span className="font-medium text-gray-600 w-40">Type:</span>
              <span className="text-gray-800">{charityData.type || "N/A"}</span>
            </div>

            <div className="flex items-center">
              <span className="font-medium text-gray-600 w-40">Region:</span>
              <span className="text-gray-800">
                {charityData.region.join(", ") || "N/A"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              <IconEdit size={20} /> Edit Information
            </button>
          </div>
        )}

        {/* Error message */}
        {updateError && (
          <p className="text-red-500 mt-4">Error: {updateError}</p>
        )}

        {/* Success message */}
        {updatedCharity && (
          <div className="mt-6 border p-4 rounded-lg">
            <h2 className="text-xl font-bold text-green-600">
              Charity Updated Successfully
            </h2>
            <p>
              <strong>ID:</strong> {updatedCharity.charity.id}
            </p>
            <p>
              <strong>Name:</strong> {updatedCharity.charity.name}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              {updatedCharity.charity.category.join(", ")}
            </p>
            <p>
              <strong>Type:</strong> {updatedCharity.charity.type}
            </p>
            <p>
              <strong>Region:</strong>{" "}
              {updatedCharity.charity.region.join(", ") || "None"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharityProfilePage;
