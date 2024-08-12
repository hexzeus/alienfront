"use client"; // Mark this file as a Client Component

import React, { useEffect, useState } from 'react';
import { getReview } from '../services/api';

interface ReviewDetailsProps {
    reviewId: number;
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({ reviewId }) => {
    const [review, setReview] = useState<any>(null);

    useEffect(() => {
        async function fetchReview() {
            try {
                const fetchedReview = await getReview(reviewId);
                setReview(fetchedReview);
            } catch (error) {
                console.error("Failed to fetch review:", error);
            }
        }

        fetchReview();
    }, [reviewId]);

    if (!review) return <div>Loading...</div>;

    return (
        <div className="bg-darkSpace text-alienGreen p-4 rounded-lg shadow-lg">
            <img src={review.imageUrl} alt={review.placeName} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl mt-2">{review.placeName}</h3>
            <p>{review.comment}</p>
            <div className="mt-4">
                <span>Rating: {review.rating}</span>
                <span>Cleanliness: {review.cleanliness}</span>
                <span>Privacy: {review.privacy}</span>
                <span>Accessibility: {review.accessibility}</span>
            </div>
        </div>
    );
};

export default ReviewDetails;
