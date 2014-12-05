/**JOB ROBERTS
 * PWA1
 * Duel Fight Game -Version 2
 * Date: 12/02/14

*/
//CONSOLE LOG START PROGRAM
// self-executing function
(function(){

    console.log("FIGHT!!!");                        // Display to the Console: "FIGHT"!!(start program)

    //Fighter's damage and health using Arrays!
    var soldier1 = ["BuddyBoy",20,100];                    // Fighter #1  name variable declared
    var soldier2 = ["Coda",20,100];                   // Fighter #2 name Variable declared

    //player damage
    //var player1Damage = 20;                        // Variable for damage to be deducted from fighter#1
    //var player2Damage = 20;                        // Variable for damage to be deducted from fighter#2

    //player health
   // var playerOneHealth = 100;                     // Variable Declared for begging Health for Fighter #1
    //var playerTwoHealth = 100;                     // Variable Declared for begging Health for Fighter #2

    //initiate round variable declared
    var round=0;

    // After user clicks "OK"button run the main function of the game and loop through each round.
    function fight(){
        alert(soldier1[0]+soldier1[2]+"  *START*  "+soldier2[0]+soldier2[2]); // Alert box using arrays to display FIGHTERS health and damage!!

        //Loop through the rounds up to 10 rounds; If i < 10 continue to next round
        for (var i = 0; i < 10; i++)
        {
           //Defined damage using Arrays!
           var minDamage1 = soldier1[1] * .5;
           var minDamage2 = soldier2[1] * .5;
           var f1 = Math.floor(Math.random()*(soldier1[1]-minDamage1)+minDamage1);
           var f2 = Math.floor(Math.random()*(soldier2[1]-minDamage2)+minDamage2);


            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //var minDamage1 = player1Damage * .5;                    //Damage variable declared for player #1
            //var minDamage2 = player2Damage * .5;                    //Damage Variable declared for player #2
            //var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //variable declares random number health for player#1
            //var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //variable declares random number health for player#2


           //Inflict Damage using Arrays!
            soldier1[2]-=f1;
            soldier2[2]-=f2;


             // *OLD*
            //inflict damage
           // playerOneHealth-=f1; //playerOne health =playerOneHealth-f1
            //playerTwoHealth-=f2; //playerTwoHealth=playerTwoHealth-f2

            //Console.log to check on the progress of each player
            console.log(soldier1[2]+" "+soldier2[2]);

            //check for victor
            var result = winnerCheck();                    // Check to see who the winner is
            console.log(result);                          // Display the result to the console

            //Was there a winner in "Winner Check"? If there was no winner end game Else continue to next round
            if (result==="no winner")
            {
                round++;                                   // The fighters continue to next round
                //Tell pop-up to display in the browser
                 //alert box using arrays to display each round is over!!
                alert(soldier1[0]+":"+soldier1[2]+"  *ROUND "+round+" OVER"+"* "+soldier2[0]+":"+soldier2[2]);
                //*OLD* alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{

                alert(result);                             // Display pop-up in browser the result after each round
                break;
            }

          }
    }
          //Run the "Winner Check" function If there is a "Winner" show winner If not End the round.
    function winnerCheck(){
        var result="no winner";
                                   // Condition executed using Arrays!
        if (soldier1[2]<1 && soldier2[2]<1)        // Condition statement that checks players health against each other
        {
            result = "You Both Die";
              //Else if condition using Arrays!                                          // If Players health are both '0' than display result in pop-up
        } else if(soldier1[2]<1){                      // Run the function to check Player #1 health
            result = soldier2[0]+ "WINS!!!";               // If player #1 health is < 1 Display pop-up in browser player #2 wins
        } else if (soldier2[2]<1)                      // If player #2 health is < 1 Display pop-up in browser player # 1 Wins
        {     // result prints using Array!!
            result = soldier1[0] +" WINS!!!"
        }
       return result;                                      //  Display pop-up in browser the "WINNER" of the game
    }

    /*******  The program gets started below *******/
    fight();                                               //  After fight is over user can click button for another fight

})();                                                      //  End function
