 # notes
[notes to be used on test](notes.md)


# startup
CS 260 Web Application Startup Project
[startup specification](startupSpec.md)

### Elevator Pitch
Want to keep your brain healthy by incorporating logical thinking into your daily routine? Want to have fun? Then "Connect4 - Connected to the Internet" is the game for you! Have fun while playing one of your favorite old-school games and strengthening your critical thinking skills. The game's stakes are low, but the reward is high.

### Key Features
- Secure login over HTTPS
- Ability to select player chip color
- Display of game board
- Ability to select a column to place a playing chip in
- Player vs Player local gameplay
- Notification of game win
- Game results are persistently stored
- Ability to restart game
- Ability to view all player high scores
- Ability to see when other players start a game

### Technology Use
I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for gameplay.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, color choice display, playing chip insertion, display other users' game initiation and high scores, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving choices
  - submitting votes
  - retrieving vote status
- **DB** - Store users, choices, and votes in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
- **WebSocket** - As each user votes, their votes are broadcast to all other users.
- **React** - Application ported to use the React web framework.



### Sketches
