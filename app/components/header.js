import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { FaHome, FaCar } from 'react-icons/fa'; // Import icons

export default function Header() {
  return (
    <header className="bg-blacky3 flex justify-between items-center shadow-md w-full border-b border-blacky4"> {/* Full width */}
      <div className="flex items-center p-4"> {/* Align logo and title to the left */}
        <Image
          src="/images/icon1.png" // Ensure the path is correct
          alt="Edgeforce Logo"
          width={60}
          height={60}
          priority
          className="rounded-full transition-transform transform hover:scale-110 filter drop-shadow-lg" // Added drop-shadow for glow effect
        />
        <div className="ml-3"> {/* Added margin for spacing */}
          <h1 className="text-md font-bold text-yellowish opacity-90">EDGEFORCE</h1> {/* Edgeforce Title with reduced opacity */}
          <h2 className="text-md font-bold text-white opacity-90">SOLUTIONS</h2> {/* Solutions Title with reduced opacity */}
        </div>
      </div>
      <nav className="space-x-6 p-4 flex flex-row"> {/* Navigation links on the right */}
        <Link href="/" className="flex items-center text-md text-yellowish hover:text-white transition-colors">
          <FaHome className="mr-1" /> Home {/* Home icon */}
        </Link>
        <Link href="/pages/vehicles" className="flex items-center text-md text-yellowish hover:text-white transition-colors">
          <FaCar className="mr-1" /> Vehicles {/* Vehicle icon */}
        </Link>
      </nav>
    </header>
  );
}

