# BattleShip-Project-1
psudo code:
1. make a game onject
2. make a constant for the game game with keys for the two boards, hits, misses, ships.
3. make state variables for the player the computer and for throws
4. what parts of the DOM will constantly be updating: cache those elements (cache both grids, ships(maybe), start game button, win/lose sign
5. addEventListener to start game button, ships(for player to click and place), and throws(for player to pick which square to throw bomb at
6. ***not sure how to write this correctly*** make game boards in javaScript with an Array with the values for x and an Array for the values for y to create the cells that are interactable (a double array).

<------functions------->

7. init()
8. for player and throw
9. to create random board for computer (and player if placing ships by player is not acheivable)
10. set positions for everything in the board
11. add positions for throws
12. render placing ships
*****would be nice* to let player place ships
to move ships from side of board to positions placed by player*****
13. call throws when all ships are placed and game begins
14. once player turn happens change turn and let computer throw
15. repeat throws and turns until all ships are hit on either computer board or player board
(not sure if I need seperate functions for that or can create a loop to keep going through turns with an end feature that is triggered when all ships on either board are destroyed)
16.render throws
17. render hits
18.render missses
19. if player wins return "WINNER" on screen with a replay button
20. if computer wins return "YOU LOSE" with a replay button.

<img width="1440" alt="Screen Shot 2021-12-10 at 1 45 03 PM" src="https://user-images.githubusercontent.com/94722723/145645246-2c2cd093-e6f1-43bc-9424-ee1d107dacd2.png">
<img width="1440" alt="Screen Shot 2021-12-10 at 1 44 48 PM" src="https://user-images.githubusercontent.com/94722723/145645261-de5a4853-61e6-4624-b587-5a6d4ab9b50b.png">
<img width="1440" alt="Screen Shot 2021-12-10 at 1 45 17 PM" src="https://user-images.githubusercontent.com/94722723/145645272-daf345fc-34bb-409a-a8fb-325a12204093.png">
