import React, { useState, useEffect } from "react";
import { updatedCharityObject } from "@/types/charity";
import { useFetchCharity, useUpdateCharity } from "@/hooks/use-charity";

const TestUpdateCharityPage = () => {
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
      [name]:
        name === "category" || name === "region" ? value.split(",") : value,
    }));
  };

  // Handle button click
  const handleButtonClick = async () => {
    if (!charityData.name || !charityData.type) {
      alert("Please fill in all required fields (name and type).");
      return;
    }
    await updateCharity(charityData);
  };

  if (fetching) {
    return <div>Loading charity information...</div>;
  }

  if (fetchError) {
    return <div className="text-red-500">Error: {fetchError}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test Update Charity</h1>

      {/* Form for updating charity */}
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Charity Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter charity name"
            value={charityData.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block font-medium">
            Category (comma-separated):
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="e.g., Health, Education"
            value={charityData.category.join(",")}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="type" className="block font-medium">
            Type:
          </label>
          <input
            id="type"
            name="type"
            type="text"
            placeholder="Enter charity type"
            value={charityData.type}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="region" className="block font-medium">
            Region (comma-separated):
          </label>
          <input
            id="region"
            name="region"
            type="text"
            placeholder="e.g., US, EU"
            value={charityData.region.join(",")}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        {/* Button to trigger the update */}
        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {updating ? "Updating..." : "Update Charity"}
        </button>
      </form>

      {/* Error message */}
      {updateError && <p className="text-red-500 mt-4">Error: {updateError}</p>}

      {/* Display updated charity info */}
      {updatedCharity && (
        <div className="mt-6 border p-4">
          <h2 className="text-xl font-bold">Charity Updated Successfully</h2>
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
  );
};

export default TestUpdateCharityPage;
