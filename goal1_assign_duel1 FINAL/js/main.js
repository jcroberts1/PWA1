/**JOB ROBERTS
 * PWA1
 * Duel Fight Game - FINISHED
 * Date: 11/27/14

 Assignment 1
 Part 1/3 of series
*/
//CONSOLE LOG START PROGRAM
// self-executing function
(function(){

    console.log("FIGHT!!!");                        // Display to the Console: "FIGHT"!!(start program)

    //PLAYER VARIABLES DEFINED
    var playerOneName = "kabal";                    // Fighter #1  name variable declared
    var playerTwoName = "kratos";                   // Fighter #2 name Variable declared

    //player damage
    var player1Damage = 20;                        // Variable for damage to be deducted from fighter#1
    var player2Damage = 20;                        // Variable for damage to be deducted from fighter#2

    //player health
    var playerOneHealth = 100;                     // Variable Declared for begging Health for Fighter #1
    var playerTwoHealth = 100;                     // Variable Declared for begging Health for Fighter #2

    //initiate round variable declared
    var round=0;

    // After user clicks "OK"button run the main function of the game and loop through each round.
    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // Pop-up player #1 & player #2 name and health

        //Loop through the rounds up to 10 rounds; If i < 10 continue to next round
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;                    //Damage variable declared for player #1
            var minDamage2 = player2Damage * .5;                    //Damage Variable declared for player #2
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //variable declares random number health for player#1
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //variable declares random number health for player#2

            //inflict damage
            playerOneHealth-=f1; //playerOne health =playerOneHealth-f1
            playerTwoHealth-=f2; //playerTwoHealth=playerTwoHealth-f2

            //Console.log to check on the progress of each player
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();                    // Check to see who the winner is
            console.log(result);                          // Display the result to the console

            //Was there a winner in "Winner Check"? If there was no winner end game Else continue to next round
            if (result==="no winner")
            {
                round++;                                   // The fighters continue to next round
                //Tell pop-up to display in the browser
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);                             // Display pop-up in browser the result after each round
                break;
            };

          };
    };
          //Run the "Winner Check" function If there is a "Winner" show winner If not End the round.
    function winnerCheck(){
        var result="no winner";                            // No Winner variable is declared
        if (playerOneHealth<1 && playerTwoHealth<1)        // Condition statement that checks players health
        {
            result = "You Both Die";                       // If Players health are both '0' than display result in pop-up
        } else if(playerOneHealth<1){                      // Run the function to check Player #1 health
            result =playerTwoName+" WINS!!!"               // If player #1 health is < 1 Display pop-up in browser player #2 wins
        } else if (playerTwoHealth<1)                      // If player #2 health is < 1 Display pop-up in browser player # 1 Wins
        {
            result = playerOneName+" WINS!!!"
        };
       return result;                                      //  Display pop-up in browser the "WINNER" of the game
    };

    /*******  The program gets started below *******/
    fight();                                               //  After fight is over user can click button for another fight

})();                                                      //  End function