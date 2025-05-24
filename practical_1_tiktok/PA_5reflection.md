### TikTok Clone
## 1. Documentation 

# Main Concepts Applied

1. Cursor-Based Pagination (Backend Concept)
Replaces traditional offset-based pagination.

Uses a unique identifier (cursor) to fetch items after a specific point.
Efficient and consistent when working with large or dynamic datasets (like video feeds).
Example: Instead of ?page=2&limit=10, you send ?cursor=1234&limit=10.

 2. Infinite Scrolling (Frontend UX Pattern)
Loads more data as the user scrolls, creating a seamless feed experience (e.g., like TikTok or Instagram).
Avoids manual page navigation.

 3. TanStack Query’s useInfiniteQuery Hook
Handles pagination logic internally:
Keeps track of cursors
Caches results
Provides functions like fetchNextPage() and hasNextPage
Simplifies working with paginated APIs on the frontend.

## 2.Reflection
# Discuss what you learned. 
# What I Learned

I learn  how to build a performant, consistent, and user-friendly infinite scrolling video feed using cursor-based pagination and TanStack Query’s infinite query capabilities, integrated with the Intersection Observer API for efficient scroll detection.

# Mention any challenges you faced (include screenshots) and how you overcame them.

ntersection Observer Not Triggering
Challenge:
The Intersection Observer wasn’t firing consistently when the last video in the feed entered the viewport.

How I Overcame It:

Realized the observed element wasn't mounted or visible yet when initialized.
Ensured the ref was attached to the correct last element after the data was loaded.
Added a check to avoid setting up the observer multiple times
