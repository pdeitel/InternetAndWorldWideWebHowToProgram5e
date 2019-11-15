// Fig. 14.27 cannon.js
// Logic of the Cannon Game
var canvas; // the canvas
var context; // used for drawing on the canvas

// constants for game play
var TARGET_PIECES = 7; // sections in the target
var MISS_PENALTY = 2; // seconds deducted on a miss
var HIT_REWARD = 3; // seconds added on a hit
var TIME_INTERVAL = 25; // screen refresh interval in milliseconds

// variables for the game loop and tracking statistics
var intervalTimer; // holds interval timer
var timerCount; // number of times the timer fired since the last second
var timeLeft; // the amount of time left in seconds
var shotsFired; // the number of shots the user has fired
var timeElapsed; // the number of seconds elapsed

// variables for the blocker and target
var blocker; // start and end points of the blocker
var blockerDistance; // blocker distance from left
var blockerBeginning; // blocker distance from top
var blockerEnd; // blocker bottom edge distance from top
var initialBlockerVelocity; // initial blocker speed multiplier
var blockerVelocity; // blocker speed multiplier during game

var target; // start and end points of the target
var targetDistance; // target distance from left
var targetBeginning; // target distance from top
var targetEnd; // target bottom's distance from top
var pieceLength; // length of a target piece
var initialTargetVelocity; // initial target speed multiplier
var targetVelocity; // target speed multiplier during game

var lineWidth; // width of the target and blocker
var hitStates; // is each target piece hit?
var targetPiecesHit; // number of target pieces hit (out of 7)

// variables for the cannon and cannonball
var cannonball; // cannonball image's upper-left corner
var cannonballVelocity; // cannonball's velocity
var cannonballOnScreen; // is the cannonball on the screen
var cannonballRadius; // cannonball radius
var cannonballSpeed; // cannonball speed
var cannonBaseRadius; // cannon base radius
var cannonLength; // cannon barrel length
var barrelEnd; // the end point of the cannon's barrel
var canvasWidth; // width of the canvas
var canvasHeight; // height of the canvas

// variables for sounds
var targetSound;
var cannonSound;
var blockerSound;

// called when the app first launches
function setupGame()
{
   // stop timer if document unload event occurs
   document.addEventListener( "unload", stopTimer, false );

   // get the canvas, its context and setup its click event handler
   canvas = document.getElementById( "theCanvas" );
   context = canvas.getContext("2d");

   // start a new game when user clicks Start Game button
   document.getElementById( "startButton" ).addEventListener( 
      "click", newGame, false );

   // JavaScript Object representing game items
   blocker = new Object(); // object representing blocker line
   blocker.start = new Object(); // will hold x-y coords of line start
   blocker.end = new Object(); // will hold x-y coords of line end
   target = new Object(); // object representing target line
   target.start = new Object(); // will hold x-y coords of line start
   target.end = new Object(); // will hold x-y coords of line end
   cannonball = new Object(); // object representing cannonball point
   barrelEnd = new Object(); // object representing end of cannon barrel

   // initialize hitStates as an array
   hitStates = new Array(TARGET_PIECES);

   // get sounds
   targetSound = document.getElementById( "targetSound" );
   cannonSound = document.getElementById( "cannonSound" );
   blockerSound = document.getElementById( "blockerSound" );
} // end function setupGame

// set up interval timer to update game
function startTimer()
{
   canvas.addEventListener( "click", fireCannonball, false );
   intervalTimer = window.setInterval( updatePositions, TIME_INTERVAL );
} // end function startTimer

// terminate interval timer
function stopTimer()
{
   canvas.removeEventListener( "click", fireCannonball, false );
   window.clearInterval( intervalTimer );
} // end function stopTimer

// called by function newGame to scale the size of the game elements
// relative to the size of the canvas before the game begins
function resetElements()
{
   var w = canvas.width;
   var h = canvas.height;
   canvasWidth = w; // store the width
   canvasHeight = h; // store the height
   cannonBaseRadius = h / 18; // cannon base radius 1/18 canvas height
   cannonLength = w / 8; // cannon length 1/8 canvas width

   cannonballRadius = w / 36; // cannonball radius 1/36 canvas width
   cannonballSpeed = w * 3 / 2; // cannonball speed multiplier

   lineWidth = w / 24; // target and blocker 1/24 canvas width

   // configure instance variables related to the blocker
   blockerDistance = w * 5 / 8; // blocker 5/8 canvas width from left
   blockerBeginning = h / 8; // distance from top 1/8 canvas height
   blockerEnd = h * 3 / 8; // distance from top 3/8 canvas height
   initialBlockerVelocity = h / 2; // initial blocker speed multiplier
   blocker.start.x = blockerDistance;
   blocker.start.y = blockerBeginning;
   blocker.end.x = blockerDistance;
   blocker.end.y = blockerEnd;

   // configure instance variables related to the target
   targetDistance = w * 7 / 8; // target 7/8 canvas width from left
   targetBeginning = h / 8; // distance from top 1/8 canvas height
   targetEnd = h * 7 / 8; // distance from top 7/8 canvas height
   pieceLength = (targetEnd - targetBeginning) / TARGET_PIECES;
   initialTargetVelocity = -h / 4; // initial target speed multiplier
   target.start.x = targetDistance;
   target.start.y = targetBeginning;
   target.end.x = targetDistance;
   target.end.y = targetEnd;

   // end point of the cannon's barrel initially points horizontally
   barrelEnd.x = cannonLength;
   barrelEnd.y = h / 2;
} // end function resetElements

// reset all the screen elements and start a new game
function newGame()
{
   resetElements(); // reinitialize all game elements
   stopTimer(); // terminate previous interval timer

   // set every element of hitStates to false--restores target pieces
   for (var i = 0; i < TARGET_PIECES; ++i)
      hitStates[i] = false; // target piece not destroyed

   targetPiecesHit = 0; // no target pieces have been hit
   blockerVelocity = initialBlockerVelocity; // set initial velocity
   targetVelocity = initialTargetVelocity; // set initial velocity
   timeLeft = 10; // start the countdown at 10 seconds
   timerCount = 0; // the timer has fired 0 times so far
   cannonballOnScreen = false; // the cannonball is not on the screen
   shotsFired = 0; // set the initial number of shots fired
   timeElapsed = 0; // set the time elapsed to zero

   startTimer(); // starts the game loop
} // end function newGame

// called every TIME_INTERVAL milliseconds
function updatePositions()
{
   // update the blocker's position
   var blockerUpdate = TIME_INTERVAL / 1000.0 * blockerVelocity;
   blocker.start.y += blockerUpdate;
   blocker.end.y += blockerUpdate;

   // update the target's position
   var targetUpdate = TIME_INTERVAL / 1000.0 * targetVelocity;
   target.start.y += targetUpdate;
   target.end.y += targetUpdate;

   // if the blocker hit the top or bottom, reverse direction
   if (blocker.start.y < 0 || blocker.end.y > canvasHeight)
      blockerVelocity *= -1;

   // if the target hit the top or bottom, reverse direction
   if (target.start.y < 0 || target.end.y > canvasHeight)
      targetVelocity *= -1;

   if (cannonballOnScreen) // if there is currently a shot fired
   {
      // update cannonball position
      var interval = TIME_INTERVAL / 1000.0;

      cannonball.x += interval * cannonballVelocityX;
      cannonball.y += interval * cannonballVelocityY;

      // check for collision with blocker
      if ( cannonballVelocityX > 0 && 
         cannonball.x + cannonballRadius >= blockerDistance &&
         cannonball.x + cannonballRadius <= blockerDistance + lineWidth &&
         cannonball.y - cannonballRadius > blocker.start.y &&
         cannonball.y + cannonballRadius < blocker.end.y)
      {
         blockerSound.play(); // play blocker hit sound
         cannonballVelocityX *= -1; // reverse cannonball's direction
         timeLeft -= MISS_PENALTY; // penalize the user
      } // end if

      // check for collisions with left and right walls
      else if (cannonball.x + cannonballRadius > canvasWidth || 
         cannonball.x - cannonballRadius < 0)
      {
         cannonballOnScreen = false; // remove cannonball from screen
      } // end else if

      // check for collisions with top and bottom walls
      else if (cannonball.y + cannonballRadius > canvasHeight || 
         cannonball.y - cannonballRadius < 0)
      {
         cannonballOnScreen = false; // make the cannonball disappear
      } // end else if

      // check for cannonball collision with target
      else if (cannonballVelocityX > 0 && 
         cannonball.x + cannonballRadius >= targetDistance &&
         cannonball.x + cannonballRadius <= targetDistance + lineWidth &&
         cannonball.y - cannonballRadius > target.start.y &&
         cannonball.y + cannonballRadius < target.end.y)
      {
         // determine target section number (0 is the top)
         var section = 
            Math.floor((cannonball.y  - target.start.y) / pieceLength);

         // check whether the piece hasn't been hit yet
         if ((section >= 0 && section < TARGET_PIECES) && 
            !hitStates[section])
         {
            targetSound.play(); // play target hit sound
            hitStates[section] = true; // section was hit
            cannonballOnScreen = false; // remove cannonball
            timeLeft += HIT_REWARD; // add reward to remaining time

            // if all pieces have been hit
            if (++targetPiecesHit == TARGET_PIECES)
            {
               stopTimer(); // game over so stop the interval timer
               draw(); // draw the game pieces one final time
               showGameOverDialog("You Won!"); // show winning dialog
            } // end if
         } // end if
      } // end else if
   } // end if

   ++timerCount; // increment the timer event counter

   // if one second has passed
   if (TIME_INTERVAL * timerCount >= 1000)
   {
      --timeLeft; // decrement the timer
      ++timeElapsed; // increment the time elapsed
      timerCount = 0; // reset the count
   } // end if

   draw(); // draw all elements at updated positions

   // if the timer reached zero
   if (timeLeft <= 0)
   {
      stopTimer();
      showGameOverDialog("You lost"); // show the losing dialog
   } // end if
} // end function updatePositions

// fires a cannonball
function fireCannonball(event)
{
   if (cannonballOnScreen) // if a cannonball is already on the screen
      return; // do nothing

   var angle = alignCannon(event); // get the cannon barrel's angle

   // move the cannonball to be inside the cannon
   cannonball.x = cannonballRadius; // align x-coordinate with cannon
   cannonball.y = canvasHeight / 2; // centers ball vertically

   // get the x component of the total velocity
   cannonballVelocityX = (cannonballSpeed * Math.sin(angle)).toFixed(0);

   // get the y component of the total velocity
   cannonballVelocityY = (-cannonballSpeed * Math.cos(angle)).toFixed(0);
   cannonballOnScreen = true; // the cannonball is on the screen
   ++shotsFired; // increment shotsFired

   // play cannon fired sound
   cannonSound.play();
} // end function fireCannonball

// aligns the cannon in response to a mouse click
function alignCannon(event)
{
   // get the location of the click 
   var clickPoint = new Object();
   clickPoint.x = event.x;
   clickPoint.y = event.y;

   // compute the click's distance from center of the screen
   // on the y-axis
   var centerMinusY = (canvasHeight / 2 - clickPoint.y);

   var angle = 0; // initialize angle to 0

   // calculate the angle the barrel makes with the horizontal
   if (centerMinusY !== 0) // prevent division by 0
      angle = Math.atan(clickPoint.x / centerMinusY);

   // if the click is on the lower half of the screen
   if (clickPoint.y > canvasHeight / 2)
      angle += Math.PI; // adjust the angle

   // calculate the end point of the cannon's barrel
   barrelEnd.x = (cannonLength * Math.sin(angle)).toFixed(0);
   barrelEnd.y = 
      (-cannonLength * Math.cos(angle) + canvasHeight / 2).toFixed(0);

   return angle; // return the computed angle
} // end function alignCannon

// draws the game elements to the given Canvas
function draw()
{
   canvas.width = canvas.width; // clears the canvas (from W3C docs)

   // display time remaining
   context.fillStyle = "black";
   context.font = "bold 24px serif";
   context.textBaseline = "top";
   context.fillText("Time remaining: " + timeLeft, 5, 5);

   // if a cannonball is currently on the screen, draw it
   if (cannonballOnScreen)
   { 
      context.fillStyle = "gray";
      context.beginPath();
      context.arc(cannonball.x, cannonball.y, cannonballRadius, 
         0, Math.PI * 2);
      context.closePath();
      context.fill();
   } // end if

   // draw the cannon barrel
   context.beginPath(); // begin a new path
   context.strokeStyle = "black";
   context.moveTo(0, canvasHeight / 2); // path origin
   context.lineTo(barrelEnd.x, barrelEnd.y); 
   context.lineWidth = lineWidth; // line width
   context.stroke(); //draw path

   // draw the cannon base
   context.beginPath();
   context.fillStyle = "gray";
   context.arc(0, canvasHeight / 2, cannonBaseRadius, 0, Math.PI * 2);
   context.closePath();
   context.fill();

   // draw the blocker
   context.beginPath(); // begin a new path
   context.moveTo(blocker.start.x, blocker.start.y); // path origin
   context.lineTo(blocker.end.x, blocker.end.y); 
   context.lineWidth = lineWidth; // line width
   context.stroke(); //draw path

   // initialize currentPoint to the starting point of the target
   var currentPoint = new Object();
   currentPoint.x = target.start.x;
   currentPoint.y = target.start.y; 

   // draw the target
   for (var i = 0; i < TARGET_PIECES; ++i)
   {
      // if this target piece is not hit, draw it
      if (!hitStates[i])
      {
         context.beginPath(); // begin a new path for target

         // alternate coloring the pieces yellow and blue
         if (i % 2 === 0)
            context.strokeStyle = "yellow";
         else
            context.strokeStyle = "blue";

         context.moveTo(currentPoint.x, currentPoint.y); // path origin
         context.lineTo(currentPoint.x, currentPoint.y + pieceLength); 
         context.lineWidth = lineWidth; // line width
         context.stroke(); // draw path
      } // end if
	 
      // move currentPoint to the start of the next piece
      currentPoint.y += pieceLength;
   } // end for
} // end function draw

// display an alert when the game ends
function showGameOverDialog(message)
{
   alert(message + "\nShots fired: " + shotsFired + 
      "\nTotal time: " + timeElapsed + " seconds ");
} // end function showGameOverDialog

window.addEventListener("load", setupGame, false);


/*************************************************************************
* (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
* Pearson Education, Inc. All Rights Reserved.                           *
*                                                                        *
* DISCLAIMER: The authors and publisher of this book have used their     *
* best efforts in preparing the book. These efforts include the          *
* development, research, and testing of the theories and programs        *
* to determine their effectiveness. The authors and publisher make       *
* no warranty of any kind, expressed or implied, with regard to these    *
* programs or to the documentation contained in these books. The authors *
* and publisher shall not be liable in any event for incidental or       *
* consequential damages in connection with, or arising out of, the       *
* furnishing, performance, or use of these programs.                     *
*************************************************************************/