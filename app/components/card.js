"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Card = ({ image, title, description, vehicleId, isExpanded, onExpand, onClose }) => {
  const router = useRouter();
  const [imageSlideUp, setImageSlideUp] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setImageSlideUp(true), 100); // Delay image slide-up animation
    } else {
      setImageSlideUp(false);
    }
  }, [isExpanded]);

  

  const handleCategoryClick = (category) => {
    router.push(`/pages/topics?vehicleId=${vehicleId}&category=${category}`);
  };
  

  return (
    <>
      {isExpanded ? (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-blacky4 text-blacky3 rounded-lg shadow-md flex flex-row h-[400px] w-[900px] overflow-hidden transition-all duration-500">
            <div className={`relative h-full w-1/2 transition-transform duration-700 ${imageSlideUp ? 'translate-y-0' : 'translate-y-full'}`}>
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
              />
            </div>
            <div className="flex-grow p-4 w-1/2 flex flex-col justify-center">
              <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">X</button>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-lg mb-6">{description}</p>
              <div className="flex flex-col space-y-4 w-full">
                <button onClick={() => handleCategoryClick("Electrical")} className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Electrical</button>
                <button onClick={() => handleCategoryClick("Electronics")} className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Electronics</button>
                <button onClick={() => handleCategoryClick("Components")} className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Components</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blacky4 text-blacky3 rounded-lg shadow-md flex flex-col h-[500px] w-[350px] overflow-hidden cursor-pointer transition-all duration-500" onClick={onExpand}>
          <div className="relative h-2/3">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="rounded-t-lg"
            />
          </div>
          <div className="flex-grow p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-base mb-4">{description}</p>
            <span className="flex items-center text-blue-500 hover:underline">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;


// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// const Card = ({ image, title, description, link, isExpanded, onExpand, onClose }) => {
//   const [imageSlideUp, setImageSlideUp] = useState(false);

//   useEffect(() => {
//     if (isExpanded) {
//       setTimeout(() => setImageSlideUp(true), 100); // Delay the image slide-up animation
//     } else {
//       setImageSlideUp(false);
//     }
//   }, [isExpanded]);

//   return (
//     <>
//       {isExpanded ? (
//         <div className="fixed inset-0 flex justify-center items-center z-50">
//           <div className="relative bg-blacky4 text-blacky3 rounded-lg shadow-md flex flex-row h-[400px] w-[900px] overflow-hidden transition-all duration-500"> {/* Adjusted height and width */}
//             <div className={`relative h-full w-1/2 transition-transform duration-700 ${imageSlideUp ? 'translate-y-0' : 'translate-y-full'}`}> {/* Image slides up when expanded */}
//               <Image
//                 src={image}
//                 alt={title}
//                 layout="fill"
//                 objectFit="contain"
//                 className="rounded-t-lg"
//               />
//             </div>
//             <div className="flex-grow p-4 w-1/2 flex flex-col justify-center"> {/* Right side details */}
//               <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">X</button> {/* Close button */}
//               <h2 className="text-3xl font-bold mb-4">{title}</h2>
//               <p className="text-lg mb-6">{description}</p>
//               <div className="flex flex-col space-y-4 w-full"> {/* Buttons in a column with uniform width */}
//                 <Link href={link} passHref>
//                   <button className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Electrical</button>
//                 </Link>
//                 <Link href="/electronics" passHref> {/* Adjust link paths as necessary */}
//                   <button className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Electronics</button>
//                 </Link>
//                 <Link href="/components" passHref>
//                   <button className="w-full px-4 py-2 bg-blacky3 text-white rounded-md hover:bg-blacky1 transition-all duration-300">Components</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div
//           className="bg-blacky4 text-blacky3 rounded-lg shadow-md flex flex-col h-[500px] w-[350px] overflow-hidden cursor-pointer transition-all duration-500"
//           onClick={onExpand} // Trigger expand on click
//         >
//           <div className="relative h-2/3">
//             <Image
//               src={image}
//               alt={title}
//               layout="fill"
//               objectFit="contain"
//               className="rounded-t-lg"
//             />
//           </div>
//           <div className="flex-grow p-4">
//             <h2 className="text-xl font-bold mb-2">{title}</h2>
//             <p className="text-base mb-4">{description}</p>
//             <span className="flex items-center text-blue-500 hover:underline">
//               Learn More
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd" />
//               </svg>
//             </span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;

