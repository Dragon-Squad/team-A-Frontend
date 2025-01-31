import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProjectById } from "@/hooks/use-project";
import { useDonate, useDonateGuest } from "@/hooks/use-donate";
import { getLocalStorageItem } from "@/utils/helper";
import { useCategory } from "@/hooks/use-category";
import { useRegion } from "@/hooks/use-region";

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { donate } = useDonate();
  const { donateGuest } = useDonateGuest();
  const { data: categories } = useCategory();
  const { data: regions } = useRegion();

  const { data: project, loading, error } = useProjectById(id!);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [donationType, setdonationType] = useState<string>("one-time");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const userId = getLocalStorageItem<string>("userId");
  console.log("Payment type:", donationType);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    if (!selectedAmount && !customAmount) {
      setErrorMessage("Please fill in all fields before donating.");
      return;
    }

    setErrorMessage("");
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount!;
    donate(localStorage.getItem("userId")!, amount, id!, donationType, message)
      .then((response) => {
        console.log("Donation successful:", response);
        if (response.checkoutUrl) {
          window.location.href = response.checkoutUrl;
        }
      })
      .catch((error) => {
        console.error("Donation failed:", error);
        setErrorMessage("Donation failed. Please try again.");
      });
  };

  const handleGuestDonate = () => {
    if (!selectedAmount && !customAmount) {
      setErrorMessage("Please fill in all fields before donating.");
      return;
    }

    setErrorMessage("");
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount!;
    donateGuest(firstName, lastName, email, address, amount, id!, message)
      .then((response) => {
        console.log("Donation successful:", response);
        if (response.checkoutUrl) {
          window.location.href = response.checkoutUrl;
        }
      })
      .catch((error) => {
        console.error("Donation as guest failed:", error);
        setErrorMessage("Donation as guest failed. Please try again.");
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading project: {error}</div>;
  if (!project) return <div>Project not found</div>;

  const donationPercentage = (project.raisedAmount / project.goalAmount) * 100;

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="md:col-span-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {project.title}
            </h1>
            <p className="text-gray-600 mt-4">{project.description}</p>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Goal: ${project.goalAmount.toLocaleString()}</span>
              <span>Raised: ${project.raisedAmount.toLocaleString()}</span>
            </div>
            <div className="relative mt-4 bg-gray-200 rounded-full h-4">
              <div
                className="absolute top-0 left-0 h-4 bg-orange-500 rounded-full"
                style={{ width: `${donationPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Donation Amount
            </h2>
            <div className="flex items-center gap-4 mb-6">
              {[10, 25, 50, 100, 500].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountClick(amount)}
                  className={`px-4 py-2 rounded-full ${
                    selectedAmount === amount
                      ? "bg-orange-600"
                      : "bg-orange-500"
                  } text-white hover:bg-orange-600`}
                >
                  ${amount}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="bg-white w-32 px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            {userId && (
              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    value="one-time"
                    checked={donationType === "one-time"}
                    onChange={() => setdonationType("one-time")}
                  />
                  One-time
                </label>
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    value="monthly"
                    checked={donationType === "monthly"}
                    onChange={() => setdonationType("monthly")}
                  />
                  Monthly
                </label>
              </div>
            )}
            <textarea
              placeholder="Add a message (optional, up to 250 characters)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={250}
              className="bg-white w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            />
            {!userId && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-white w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white w-full px-4 py-2 border rounded-lg focus:outline-none"
                />
              </div>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <div className="text-xl font-bold text-gray-800">
              Donation Total: $
              {customAmount
                ? customAmount
                : selectedAmount
                  ? selectedAmount
                  : 0}
            </div>
            {userId && (
              <button
                onClick={handleDonate}
                className="w-full mt-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Donate Now
              </button>
            )}
            {!userId && (
              <button
                onClick={handleGuestDonate}
                className="w-full mt-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Donate As Guest
              </button>
            )}
          </div>
        </div>
        <div className="md:col-span-4 space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Categories</h3>
            <ul className="mt-4 text-gray-600">
              {categories?.map((category) => (
                <li key={category.name} className="py-2">
                  <Link
                    to={`/projects/category/${category.name}?categoryId=${category._id}`}
                    className="text-orange-500 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-4 space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Regions</h3>
            <ul className="mt-4 text-gray-600">
              {regions?.map((region) => (
                <li key={region.name} className="py-2">
                  <Link
                    to={`/projects/region/${region.name}?regionId=${region._id}`}
                    className="text-orange-500 hover:underline"
                  >
                    {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
