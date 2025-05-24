### Main Concepts Applied

Main Concepts Applied
1. API Communication and Configuration
Axios Client Configuration
A reusable Axios instance (api-config.js) is set up with:

Base URL from .env.local
Request interceptors to attach JWT tokens
Response interceptors for error handling



2. JWT Authentication & State Management
JWT Tokens are used to authenticate users.
Tokens are stored securely in localStorage.
A global React Context (authContext.jsx) manages the user’s login state.
The app provides login/logout functionality and protects routes based on auth state.



3. Modular UI Architecture
Reusable Modal (Modal.jsx) for displaying popups
Auth Forms (AuthForms.jsx) for login and registration
Auth Modal (AuthModal.jsx) to combine form and modal



4. Dynamic and Personalized Video Feeds
Real-time data fetching from the backend for:

Home feed (VideoFeed.jsx)
Personalized feed (following/page.jsx)
Explore users (explore-users/page.jsx)




5. Video and User Services (Abstraction Layer)
videoService.js: Abstracts logic for fetching, liking, and commenting on videos.

userService.js: Handles user profile fetches, follow/unfollow logic.


6. User Interaction Features
Like/Unlike videos via API

Commenting system with UI and backend integration
Video playback with custom controls
Follow/unfollow users and reflect status in UI



7. Dynamic Routing and Pages
Next.js dynamic routes are used to build:

User profiles: /profile/[userId]
Follow feed: /following
Explore users: /explore-users
Upload page: /upload



8. Testing and QA Workflow
Manual testing is planned:

Multiple user registrations
Cross-user interactions (likes, follows)
Protected route testing

## 2.Reflection
# Discuss what you learned. 
# What I Learned

 1. Authentication and Authorization
I learned how to implement JWT-based authentication, including securely storing tokens in local storage and attaching them to API requests via Axios interceptors.

Managing global user state through React Context allowed me to dynamically control access to protected routes and components based on login status.

2. Frontend-Backend Integration
By replacing mock data with real backend API responses, I learned how to handle asynchronous data fetching, manage loading/error states, and format backend responses for the UI.

Abstracting API logic into dedicated services (videoService.js and userService.js) taught me how to keep frontend components clean and maintainabl

# Mention any challenges you faced (include screenshots) and how you overcame them.

Real-Time Interaction Lag
Challenge:
After liking a video or following a user, the UI didn’t update immediately, making the app feel unresponsive.

Solution:
I used local state updates (e.g., setIsLiked, setFollowersCount) immediately after successful API responses, and then refreshed the data in the background for consistency.

