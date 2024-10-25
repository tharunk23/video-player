

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Card2 = ({ vehicleId, category, topic }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  // Function to handle video icon click
  const handleVideoClick = () => {
    router.push(`/pages/T72`);
  };

  return (
   
    <div className="bg-blacky4 text-white rounded-lg shadow-md p-6 m-4 w-[350px] h-[150px] flex  items-center justify-between transition-all duration-300">
      <div className="text-center flex-grow">
        <div className="text-2xl font-thin bg-opacity-50 bg-black text-center px-2 py-1 rounded-md mb-2">
          {vehicleId}
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-lg text-blacky7 font-bold">{topic.topic}</h2>
          <button onClick={toggleExpand} className="ml-2 text-blacky2 hover:text-gray-400 focus:outline-none">
            {expanded ? '▼' : '►'}
          </button>
        </div>
      </div>

      {/* Subtopics Section - toggles visibility */}
      {expanded && (
        <div className="mt-2 w-full pl-6">
          {/* Video Icon */}
          <div className="flex items-center mb-2">
            <svg
              onClick={handleVideoClick}
              className="w-6 h-6 text-blacky6 mr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 10.5V7c0-.83-.67-1.5-1.5-1.5h-11C3.67 5.5 3 6.17 3 7v10c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3.5l4 4V6.5l-4 4z" />
            </svg>
          </div>

          <ul className="list-disc list-inside text-gray-700 text-left">
            {topic.subtopics.map((subtopic, idx) => (
              <li key={idx} className="text-base mt-1">{subtopic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default Card2;

