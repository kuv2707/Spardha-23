# Game Scores Microservice

This microservice provides live data broadcast of game scores using websockets for real-time updates.

## Tech Stack Used

- MongoDB
- Express
- SocketIO

## API Documentation

Refer to [API Endpoints Document](https://microservice-fmi4.onrender.com/api-docs/) for detailed information on the available API endpoints.

## Setting Up the Project

1. Navigate to the microservices directory:    
   ```
   cd /backend/microservices
   ```
3. Install dependencies:    
   ```
   npm install
   ```
5. Create a `.env` file by referring to `.env.example` provided
6. Run the server in development mode:
   ```
   npm run dev
   ```

## Basic React Implementation

Below is a basic React implementation that connects to the server using Socket.IO to receive and display live game data.

```jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Connect to the socket.io server
    const socket = io('https://microservice-fmi4.onrender.com/'); // Replace with your server URL

    // Listen for events from the server
    socket.on('allData', (data) => {
      // Use this data to render the games
      console.log('Received data from server:', data);
      setGames(data.data);
    });

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{game.game_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

## Testing Basic Functionality

To test the basic functionality of the microservice and its real-time game score broadcasting feature, you can use the provided `index.html` file.

1. Open the `index.html` file in a web browser.

2. The page will connect to the server and display live game data using WebSocket communication.

3. You should see a list of game names displayed on the page.

4. As the game data updates on the server, the list will be updated in real-time on the page without requiring a page refresh.

This simple test demonstrates the real-time capabilities of the microservice in broadcasting game scores to connected clients.

**Note**: Make sure the microservice server is running and accessible before testing the basic functionality.

---

Feel free to experiment with the provided `index.html` and React implementation to understand how the microservice works and how real-time data is being broadcasted.

