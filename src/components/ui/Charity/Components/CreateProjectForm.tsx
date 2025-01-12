import React, { useState } from "react";

const categories = [
  { _id: "6780e3298f09518b69a9a694", name: "Education" },
  { _id: "6780e3298f09518b69a9a695", name: "Environment" },
  { _id: "6780e3298f09518b69a9a696", name: "Religion" },
  { _id: "6780e3298f09518b69a9a697", name: "Humanitarian" },
  { _id: "6780e3298f09518b69a9a698", name: "Housing" },
  { _id: "6780e3298f09518b69a9a699", name: "Other" },
];

const regions = [
  { _id: "6780e3298f09518b69a9a69d", name: "Europe" },
  { _id: "6780e3298f09518b69a9a69e", name: "North America" },
  { _id: "6780e3298f09518b69a9a69f", name: "South America" },
  { _id: "6780e3298f09518b69a9a6a0", name: "Australia" },
  { _id: "6780e3298f09518b69a9a6a1", name: "Antarctica" },
  { _id: "6780e3298f09518b69a9a6a2", name: "Global" },
];

const CreateProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    startDate: "",
    endDate: "",
    regionId: "",
    categories: [] as string[],
    images: [] as File[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, regionId: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl sm:max-w-lg"
      >
        <button
          type="button"
          className="text-orange-500 hover:underline mb-4"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Project
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 "
          >
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100"
            placeholder="Enter project description"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Goal Amount */}
        <div className="mb-4">
          <label
            htmlFor="goalAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Goal Amount (USD)
          </label>
          <input
            type="number"
            id="goalAmount"
            name="goalAmount"
            value={formData.goalAmount}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100"
            placeholder="Enter goal amount"
            required
          />
        </div>

        {/* Start and End Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100 text-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100 text-gray-700 "
              required
            />
          </div>
        </div>

        {/* Region */}
        <div className="mb-4">
          <label
            htmlFor="regionId"
            className="block text-sm font-medium text-gray-700 "
          >
            Region
          </label>
          <select
            id="regionId"
            name="regionId"
            value={formData.regionId}
            onChange={handleRegionChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500  bg-gray-100 text-gray-700 "
            required
          >
            <option value="">Select a region</option>
            {regions.map((region) => (
              <option key={region._id} value={region._id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categories
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {categories.map((category) => (
              <button
                key={category._id}
                type="button"
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  formData.categories.includes(category._id)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleCategoryChange(category._id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
