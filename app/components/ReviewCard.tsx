"use client"; // Ensure this is a client component

import Image from "next/image";

interface ReviewCardProps {
    review: {
        id: number;
        placeName: string;
        rating: number;
        comment: string;
        imageUrl: string;
        cleanliness: number;
        privacy: number;
        accessibility: number;
    };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="bg-gradient-to-b from-alienPurple to-darkSpace text-alienGreen p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <Image src={review.imageUrl} alt={review.placeName} width={640} height={360} className="w-full h-64 object-cover rounded-md shadow-md" />
            <h3 className="text-3xl mt-4 font-bold">{review.placeName}</h3>
            <p className="mt-2 text-lg">{review.comment}</p>
            <div className="mt-6 space-y-2">
                <span className="block">⭐ Rating: {review.rating}</span>
                <span className="block">🧼 Cleanliness: {review.cleanliness}</span>
                <span className="block">🔒 Privacy: {review.privacy}</span>
                <span className="block">♿ Accessibility: {review.accessibility}</span>
            </div>
        </div>
    );
};

export default ReviewCard;
