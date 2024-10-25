"use client"; // This line makes the component a Client Component

import Header from "./components/Header"; // Ensure the casing matches the component file name
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Home() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="min-h-screen bg-gradient-to-r from-blacky3 to-blacky flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-opacity-75 p-6">
        <h1 className="text-5xl font-extrabold text-yellowish my-4">Welcome to Edgeforce Solutions</h1>
        <h2 className="text-3xl text-blacky4 mb-6">Electronic Circuits</h2>
        <button 
          onClick={() => router.push('/pages/vehicles')} 
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          Get Started
        </button>
      </main>
      <footer className="bg-blacky3 text-blacky4 text-center p-4 mt-auto">
        © 2024 Edgeforce Solutions. All Rights Reserved.
      </footer>
    </div>
  );
}



// import VideoPlayer from "./components/VideoPlayer";
// import videos from "./data/videos";

// export default function Home() {
//   return (
//     <div>
//       <VideoPlayer videos={videos} />
//     </div>
//   );
// }

