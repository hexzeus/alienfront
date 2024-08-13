import React from 'react';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';



export default function Home() {
  return (
    <div className="space-y-8">
      <ReviewForm />
      <ReviewList />
    </div>
  );
}
