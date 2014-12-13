/**JOB ROBERTS
 * PWA1
 * Duel Fight Game -Version 2
 * Date: 12/10/14

*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                        // Display to the Console: "FIGHT"!!(start program)
var fighter1_txt = document.querySelector("#C").querySelector("p"); // DOM defined for fighter 1
var fighter2_txt = document.querySelector("#Bb").querySelector("p");// DOM Defined for fighter 2
var round_txt = document.querySelector("h5");// DOM Defined for heading
var button = document.getElementById("fight_btn");//DOM defined for button

    console.log();
//Click Event
button.addEventListener("click", fight, false);


    var fighters =[           // Fighters name variable defined
        {
            name:"Coda",
            damage:20,
            health:100
        },
        {
            name:"Buddy Boy",
            damage:20,
            health:100

        }];
    var round = 1;

    round_txt.innerHTML= "Click Fight Button to Start!";
    fighter1_txt.innerHTML = fighters[0].name +":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name +":  " + fighters[1].health;





   // var round=0;

    // After user clicks "OK"button run the main function of the game and loop through each round.
    function fight(){


        fighter1_txt.innerHTML = fighters[0].name +":  " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name +":  " + fighters[1].health;

             //damage
           var f1 = Math.floor(Math.random()*(fighters[0].damage + fighters[0].damage *.5));
           var f2 = Math.floor(Math.random()*(fighters[1].damage + fighters[1].damage *.5));



           //Inflict Damage using Arrays!
          fighters[0].health -= f1;
          fighters[1].health -= f2;

            console.log(fighters[0].health, fighters[1].health);


            //check for winner
            var result = winnerCheck();                    // Check to see who the winner is
            console.log(result);

            round_txt.innerHTML = "Round #" + round + "Results";
            round++;


            //Was there a winner in "Winner Check"? If there was no winner end game Else continue to next round
            if (result === "no winner")
            {
                  fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
                  fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;

            } else{
               fighter1_txt.innerHTML = result;
               fighter2_txt.innerHTML = "";
            button.removeEventListener("click", fight, false);


            document.querySelector('.buttonblue').innerHTML = 'Done!';

          }
    }
          //Run the "Winner Check" function If there is a "Winner" show winner If not End the round.
    function winnerCheck(){
        var result="no winner";
                                   // Condition executed using Arrays!
        if (fighters[0].health < 1 && fighters[1].health < 1)        // Condition statement that checks players health against each other
        {
            result = "You Both Die";
              //Else if condition using Arrays!                                          // If Players health are both '0' than display result in pop-up
        } else if(fighters[0].health < 1){                      // Run the function to check Player #1 health
            result = fighters[1].name + "WINS!!!";               // If player #1 health is < 1 Display pop-up in browser player #2 wins
        } else if (fighters[1].health < 1)                      // If player #2 health is < 1 Display pop-up in browser player # 1 Wins
        {     // result prints using Array!!
            result = fighters[0].name +" WINS!!!"
        }
       return result;                                      //  Display pop-up in browser the "WINNER" of the game
    }

                                                   //  After fight is over user can click button for another fight

})();                                                      //  End function
