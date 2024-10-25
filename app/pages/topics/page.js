"use client";
import { useSearchParams } from 'next/navigation';
import { vehicleTopics } from '@/app/data/VehicleTopics';
import Header from '@/app/components/header';
import Card2 from '@/app/components/card2';

const TopicsPage = () => {
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get("vehicleId");
  const category = searchParams.get("category");

  // Check if params are loaded; otherwise, show a loading state
  if (!vehicleId || !category) return <p>Loading...</p>;

  // Fetch the topics data based on vehicleId and category from the data file
  const topics = vehicleTopics[vehicleId]?.[category] || [];

  return (
    <div className="min-h-screen bg-blacky7 text-white">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-blacky4">
          {vehicleId} {category}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-10 px-5">
          {topics.length === 0 ? (
            <p>No topics available for this category.</p>
          ) : (
            topics.map((topic, index) => (
              <Card2 key={index} vehicleId={vehicleId} topic={topic} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
