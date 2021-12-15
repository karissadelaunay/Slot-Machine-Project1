# Slot Machine-project-1
psudo code:
1. create objects: choices, Win, Lose 
2. create a lookup for the img's that are generated in the slots
3. cache the elements to the DOM that will be updating (win, lose)
4. create an event listener for a click on the start button to start the game
5. create a count down element for when the player clicks on the screen a count down happens from 3, 2, 1, then pictures change
6. call init()
7. initialize the state variables
8. set wins and losses to null to start
9. call render to transfer the wins and loses to the DOM (probably a for in loop)
10. generate random img in all three spots when screen is clicked (getRandom)
11. update the choices state
12. if, else if, else statement to reflect if the images generated a win or a loss
13. update the score
14. If all images match put a yellow boarder to indicate a win.
15. randomly generate the value of the choices stored in an array.
16. return random index
17. add reset button to reset wins and loses back to 0.

<img width="1440" alt="Screen Shot 2021-12-10 at 3 16 20 PM" src="https://user-images.githubusercontent.com/94722723/145652854-70bf8f14-8977-4dcc-8a7e-5b89dcec25c7.png">
<img width="1440" alt="Screen Shot 2021-12-10 at 3 15 51 PM" src="https://user-images.githubusercontent.com/94722723/145652858-ad8a4331-b9d8-47cd-be28-4e1b71c637a7.png">



<img width="1440" alt="Screen Shot 2021-12-15 at 1 55 45 PM" src="https://user-images.githubusercontent.com/94722723/146271285-1fd5bfb0-11d8-453a-bc76-621b81de04da.png">
ICEBOX FEATURES:

1. add visual of an actual slot machine and have pictures rotate in animation
2. add handle that when you click, it pulls down to start the game
3. add betting feature
