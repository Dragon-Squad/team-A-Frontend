import {
  IconRocket,
  IconGift,
  IconWorld,
  IconHeartHandshake,
} from "@tabler/icons-react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <IconRocket className="w-8 h-8 text-orange-500" />,
      value: "1.2k+",
      label: "Projects Completed",
    },
    {
      icon: <IconGift className="w-8 h-8 text-orange-500" />,
      value: "100",
      label: "Monthly Donate",
    },
    {
      icon: <IconWorld className="w-8 h-8 text-orange-500" />,
      value: "480",
      label: "Partners Worldwide",
    },
    {
      icon: <IconHeartHandshake className="w-8 h-8 text-orange-500" />,
      value: "1.4m",
      label: "Donations Received",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto flex justify-between items-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">{stat.icon}</div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
