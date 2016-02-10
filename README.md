frontend-nanodegree-arcade-game
===============================


For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


## Implemented so far
Inside the app.js file

The Enemy function:

- Loading the image by setting this.sprite to the appropriate image in the image folder
- Setting the Enemy initial location
- Setting the Enemy speed
- Updates the Enemy location
- *Handles collision with the Player* (**need to implement**)
- You can add your own Enemy methods as needed


The Player function:
- Loading the image by setting this.sprite to the appropriate image in the image folder
- Setting the Player initial location
- The update method for the Player
- The render method for the Player
- The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
  - Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
  - Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
  - *If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).*  (**need to implement**)
- You can add your own Player methods as needed.


Init:
- Creating a new Player object
- Creating several new Enemies objects and placing them in an array called allEnemies