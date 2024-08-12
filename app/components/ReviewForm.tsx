"use client";

import React, { useState } from 'react';
import { createReview } from '../services/api';

const ReviewForm: React.FC = () => {
    const [placeName, setPlaceName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [image, setImage] = useState<File | null>(null);  // Use File type for image
    const [cleanliness, setCleanliness] = useState(0);
    const [privacy, setPrivacy] = useState(0);
    const [accessibility, setAccessibility] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Fixed user and location IDs
    const userId = 1;
    const locationId = 2;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!image) {
            setError('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('placeName', placeName);
        formData.append('rating', rating.toString());
        formData.append('comment', comment);
        formData.append('image', image);  // Attach image as file
        formData.append('cleanliness', cleanliness.toString());
        formData.append('privacy', privacy.toString());
        formData.append('accessibility', accessibility.toString());
        formData.append('userId', userId.toString());
        formData.append('locationId', locationId.toString());

        try {
            const newReview = await createReview(formData);  // Send FormData
            console.log('Review created:', newReview);
            setError(null);

            // Reset form fields
            setPlaceName('');
            setRating(0);
            setComment('');
            setImage(null);  // Reset image
            setCleanliness(0);
            setPrivacy(0);
            setAccessibility(0);
        } catch (error) {
            console.error('Failed to create review:', error);
            setError('Failed to create review. Please try again.');
        }
    };

    const renderRatingButtons = (currentRating: number, setRating: (value: number) => void) => {
        return (
            <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        className={`w-10 h-10 rounded-full ${currentRating >= value ? 'bg-alienGreen' : 'bg-gray-600'
                            } hover:bg-alienBlue`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-darkSpace to-alienPurple text-alienGreen p-6 rounded-xl shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold">Submit a New Review</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block mb-2 text-lg font-medium">Place Name</label>
                <input
                    type="text"
                    value={placeName}
                    onChange={(e) => setPlaceName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-alienGreen focus:outline-none focus:ring-2 focus:ring-alienBlue"
                    required
                />
            </div>
            <div>
                <label className="block mb-2 text-lg font-medium">Rating</label>
                {renderRatingButtons(rating, setRating)}
            </div>
            <div>
                <label className="block mb-2 text-lg font-medium">Comment</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-alienGreen focus:outline-none focus:ring-2 focus:ring-alienBlue"
                    required
                />
            </div>
            <div>
                <label className="block mb-2 text-lg font-medium">Image</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}  // Update image state
                    className="w-full p-3 rounded-lg bg-gray-800 text-alienGreen focus:outline-none focus:ring-2 focus:ring-alienBlue"
                    required
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label className="block mb-2 text-lg font-medium">Cleanliness</label>
                    {renderRatingButtons(cleanliness, setCleanliness)}
                </div>
                <div>
                    <label className="block mb-2 text-lg font-medium">Privacy</label>
                    {renderRatingButtons(privacy, setPrivacy)}
                </div>
                <div>
                    <label className="block mb-2 text-lg font-medium">Accessibility</label>
                    {renderRatingButtons(accessibility, setAccessibility)}
                </div>
            </div>
            <button type="submit" className="w-full py-3 mt-4 bg-alienGreen text-darkSpace rounded-lg text-lg font-semibold hover:bg-alienBlue transition-colors">
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;
