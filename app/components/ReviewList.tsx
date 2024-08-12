"use client";

import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/api';
import ReviewCard from './ReviewCard';

const ReviewList: React.FC = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const fetchedReviews = await getReviews();
                setReviews(fetchedReviews);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            }
        }

        fetchReviews();
    }, []);

    if (loading) return <div>Loading reviews...</div>;

    return (
        <div className="space-y-6">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
