"use client";
import { useState } from 'react';
import Header from '@/app/components/header';
import Card from '@/app/components/card'; 


export default function Vehicles() {
    const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

    const cardData = [
        {
            image: "/images/t721.png",
            title: "T-72",
            description: "The T-72 is a Soviet-designed main battle tank that has been widely exported.",
            vehicleId: "T-72",
        },
        {
            image: "/images/t901.png",
            title: "T-90",
            description: "The T-90 is a third-generation Russian main battle tank that features advanced armor and weapons.",
            vehicleId: "T-90",
        },
        {
            image: "/images/bmp23.png",
            title: "BMP-2",
            description: "The BMP-2 is a Soviet infantry fighting vehicle that entered service in the 1980s.",
            vehicleId: "BMP-2",
        },
    ];

    const handleCardClick = (index) => {
        setExpandedCard(index); // Expand the selected card
    };

    const handleClose = () => {
        setExpandedCard(null); // Reset to show all cards
    };

    return (
        <div className="bg-black flex flex-col min-h-screen">
            <Header />
            <main className='flex flex-grow flex-col font-bold justify-center items-center p-2'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                    {expandedCard === null ? (
                        cardData.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                vehicleId={card.vehicleId} // Pass vehicleId here
                                isExpanded={false} // Pass non-expanded state
                                onExpand={() => handleCardClick(index)} // Expand handler
                            />
                        ))
                    ) : (
                        <Card
                            image={cardData[expandedCard].image}
                            title={cardData[expandedCard].title}
                            description={cardData[expandedCard].description}
                            vehicleId={cardData[expandedCard].vehicleId} // Pass vehicleId for the expanded card
                            isExpanded={true} // Pass expanded state
                            onClose={handleClose} // Close handler
                        />
                    )}
                </div>
            </main>
        </div>
    );
}



// "use client";
// import { useState } from 'react';
// import Header from "@/app/components/Header";
// import Card from "@/app/components/Card"; 
// import { useRouter } from 'next/navigation';

// export default function Vehicles() {
//     const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded
//     const router = useRouter();

//     const cardData = [
//         {
//             image: "/images/t721.png",
//             title: "T-72",
//             description: "The T-72 is a Soviet-designed main battle tank that has been widely exported.",
//             link: "/pages/topics",
//             vehicleId: "T-72",

//         },
//         {
//             image: "/images/t901.png",
//             title: "T-90",
//             description: "The T-90 is a third-generation Russian main battle tank that features advanced armor and weapons.",
//             link: "/pages/topics/t90",
//             vehicleId: "T-90",
//         },
//         {
//             image: "/images/bmp23.png",
//             title: "BMP-2",
//             description: "The BMP-2 is a Soviet infantry fighting vehicle that entered service in the 1980s.",
//             link: "/pages/topics/bmp2",
//             vehicleId: "BMP-2",
//         },
//     ];

//     const handleCardClick = (index) => {
//         setExpandedCard(index); // Expand the selected card
//     };

//     const handleClose = () => {
//         setExpandedCard(null); // Reset to show all cards
//     };

//     return (
//         <div className="bg-black flex flex-col min-h-screen">
//             <Header />
//             <main className='flex flex-grow flex-col font-bold justify-center items-center p-2'>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
//                     {expandedCard === null ? (
//                         // Render all cards if no card is expanded
//                         cardData.map((card, index) => (
//                             <Card
//                                 key={index}
//                                 image={card.image}
//                                 title={card.title}
//                                 description={card.description}
//                                 link={card.link}
//                                 isExpanded={false} // Pass non-expanded state
//                                 onExpand={() => handleCardClick(index)} // Expand handler
//                             />
//                         ))
//                     ) : (
//                         // Render only the expanded card
//                         <Card
//                             image={cardData[expandedCard].image}
//                             title={cardData[expandedCard].title}
//                             description={cardData[expandedCard].description}
//                             link={cardData[expandedCard].link}
//                             isExpanded={true} // Pass expanded state
//                             onClose={handleClose} // Close handler
//                         />
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }


