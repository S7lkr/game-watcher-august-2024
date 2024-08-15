# jackpiro-games-july-2024
SoftUni React Course Project
+ NOTE: (do not forget to commit frequently after each step taken)

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add softuni practice server
- [x] Add base vite react project as client
- [x] CleanUp the 'default vite' client
- [x] Add project resources
- [x] Convert html to jsx (class -> className, for -> htmlFor, img & input -> self-closing tag)
- [x] Separate html into components

## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in the navigation

## 3. Create Service Layer
- [x] Abstract requester (create universal fetch-er)
- [x] Service layer architecture
- [x] Add games api
- [x] Preseed practice server (create a new .json in 'data' folder and fill in with data)

## 4. Page Implementations
- [x] Game list (catalogue): GET all games from server
- [x] Details
  - [x] Details Link
  - [x] Details Route
  - [x] Api function - getOne (request to server for a particular game)
- [x] Home - Latest Games

## 5. Comments (Advanced)
- [x] Create service for nested resource 'comments'
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form
  
## 6. API Hooks
- [x] Form Hook
- [x] GameAPI Hooks
- [x] Comment Hooks

## 7. Authentication (user access to components & functionalities)
- [x] Auth API
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth API Hooks
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth state & context
- [x] Token management
- [x] Login
- [x] Register
  - [x] Add register validation
- [x] Logout
- [x] Authorized Requests

## 8. UI Implementation
- [x] Dynamic Navigation
- [x] Create game
  - [x] API function
  - [x] Hook
- [x] Latest Games
- [x] Edit game
- [x] Delete game
- [x] Search game

## 9. Refactoring
- [x] Extract authState from App component
- [x] Create persisting auth state (using localStorage)
- [x] Comments
- [x] Refactor comments with useReducer
- [x] Edit and delete game ownership rendering
- [x] Add route guards

## 10. About section
- [x] Create About Component
- [x] About sub-components
  - [x] Contact Us
  - [x] Our Team
  - [x] Services


--------------------------------------
## NOTES: 
--------------------------------------
## 1. URL:
 1. Latest Games URL -> `http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3`
 2. Use: URLSearchParams

## 2. seedData -> line:1341 in server.js (make persistent data)