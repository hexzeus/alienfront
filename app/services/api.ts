const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alienback.onrender.com';

const checkResponse = async (response: Response) => {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }
    return response.json();
};

export const getReviews = async (skip = 0, limit = 10) => {
    const response = await fetch(`${API_URL}/reviews/?skip=${skip}&limit=${limit}`);
    return checkResponse(response);
};

export const getReview = async (reviewId: number) => {
    const response = await fetch(`${API_URL}/reviews/${reviewId}`);
    return checkResponse(response);
};

export const createReview = async (reviewData: any) => {
    const response = await fetch(`${API_URL}/reviews/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    return checkResponse(response);
};

export const updateReview = async (reviewId: number, reviewData: any) => {
    const response = await fetch(`${API_URL}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
    });
    return checkResponse(response);
};

export const deleteReview = async (reviewId: number) => {
    const response = await fetch(`${API_URL}/reviews/${reviewId}`, {
        method: 'DELETE',
    });
    return checkResponse(response);
};

export const getUsers = async (skip = 0, limit = 10) => {
    const response = await fetch(`${API_URL}/users/?skip=${skip}&limit=${limit}`);
    return checkResponse(response);
};

export const getUser = async (userId: number) => {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return checkResponse(response);
};

export const createUser = async (userData: any) => {
    const response = await fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return checkResponse(response);
};

export const updateUser = async (userId: number, userData: any) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return checkResponse(response);
};

export const deleteUser = async (userId: number) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
    });
    return checkResponse(response);
};

export const getLocations = async (skip = 0, limit = 10) => {
    const response = await fetch(`${API_URL}/locations/?skip=${skip}&limit=${limit}`);
    return checkResponse(response);
};

export const getLocation = async (locationId: number) => {
    const response = await fetch(`${API_URL}/locations/${locationId}`);
    return checkResponse(response);
};

export const createLocation = async (locationData: any) => {
    const response = await fetch(`${API_URL}/locations/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
    });
    return checkResponse(response);
};

export const updateLocation = async (locationId: number, locationData: any) => {
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
    });
    return checkResponse(response);
};

export const deleteLocation = async (locationId: number) => {
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: 'DELETE',
    });
    return checkResponse(response);
};
