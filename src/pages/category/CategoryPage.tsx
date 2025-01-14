import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  useSubscribeCategory,
  useUnsubscribeCategory,
  useNotificationOnCategory,
  useNotificationOffCategory,
} from "@/hooks/use-category";

const CategoryPage: React.FC = () => {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("categoryId") || "";
  const {
    subscribe,
    loading: subscribeLoading,
    error: subscribeError,
  } = useSubscribeCategory(categoryId);
  const {
    unsubscribe,
    loading: unsubscribeLoading,
    error: unsubscribeError,
  } = useUnsubscribeCategory(categoryId);
  const {
    notificationOn,
    loading: notificationOnLoading,
    error: notificationOnError,
  } = useNotificationOnCategory(categoryId);
  const {
    notificationOff,
    loading: notificationOffLoading,
    error: notificationOffError,
  } = useNotificationOffCategory(categoryId);

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubscribe = async () => {
    await subscribe();
    setResponseMessage(
      subscribeError
        ? `Subscription failed: ${subscribeError}`
        : "Subscribed successfully!",
    );
  };

  const handleUnsubscribe = async () => {
    await unsubscribe();
    setResponseMessage(
      unsubscribeError
        ? `Unsubscription failed: ${unsubscribeError}`
        : "Unsubscribed successfully!",
    );
  };

  const handleNotificationOn = async () => {
    await notificationOn();
    setResponseMessage(
      notificationOnError
        ? `Turning on notifications failed: ${notificationOnError}`
        : "Notifications turned on successfully!",
    );
  };

  const handleNotificationOff = async () => {
    await notificationOff();
    setResponseMessage(
      notificationOffError
        ? `Turning off notifications failed: ${notificationOffError}`
        : "Notifications turned off successfully!",
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <div className="space-x-4 mb-4">
        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          disabled={subscribeLoading}
        >
          {subscribeLoading ? "Subscribing..." : "Subscribe"}
        </button>
        <button
          onClick={handleUnsubscribe}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          disabled={unsubscribeLoading}
        >
          {unsubscribeLoading ? "Unsubscribing..." : "Unsubscribe"}
        </button>
        <button
          onClick={handleNotificationOn}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          disabled={notificationOnLoading}
        >
          {notificationOnLoading ? "Turning On..." : "Turn On Notifications"}
        </button>
        <button
          onClick={handleNotificationOff}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          disabled={notificationOffLoading}
        >
          {notificationOffLoading ? "Turning Off..." : "Turn Off Notifications"}
        </button>
      </div>
      {responseMessage && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg text-center">
          <p className="text-gray-800">{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
