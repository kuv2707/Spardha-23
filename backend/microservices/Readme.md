# Game Scores Microservice

This microservice provides utility to show match fixtures of games.

## Tech Stack Used

- MongoDB
- Express

## API Documentation

Refer to [API Endpoints Document](https://microservice-fmi4.onrender.com/api-docs/) for detailed information on the available API endpoints.

## Setting Up the Project

1. Clone the repository
2. Install dependencies:    
   ```
   npm install
   ```
3. Create a `.env` file by referring to `.env.example` provided
4. Run the server in development mode:
   ```
   npm run dev
   ``` 

## Calling the API:

1. Base Url: https://microservice-fmi4.onrender.com/
2. To call an API, say getting allGames (Sample API Call):
   ```
   axios.get("https://microservice-fmi4.onrender.com/api/v1/games/allGames").then(function (response) {
    console.log('Response data:', response.data);
   })
   .catch(function (error) {
      console.error('Error:', error);
   });
   ```