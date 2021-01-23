# _Mr. Roboger's Neighborhood_

#### _An interaction with Mr. Roboger!_

#### By _**Mekinsie Callahan**_

## Technologies Used

* _CSS_
* _HTML5_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Specs

Describe: forLoop(number)<br><br>
**Test 1:** "It should return an array with 0 if the number 0 is inputted."
Expect (forLoop(0)).toEqual([0]);
<br><br>
**Test 2:** "It should return an array that counts up from 0 to the inputted number."
Expect (forLoop(5)).toEqual([0, 1, 2, 3, 4, 5]);
<br><br>
**Test 3:** "It should return an array that counts up from 0 to the inputted number except for the number 1, which will be replaced with 'Beep!'."
Expect (forLoop(5)).toEqual([0, "Beep!", 2, 3, 4, 5]);
<br><br>
**Test 4:** "It should return an array that counts up from 0 to the inputted number except for the numbers that contain a 1, 2, or 3 which will be replaced with specialized messages."
Expect (forLoop(3)).toEqual(["Wont you be my neighbor?"]);
<br><br>
**Test 5:** "It should return a specialized message if the number is greater than 9 and contains any of the digits 1,2 and 3."
Expect (forLoop(10)).toEqual(["Beep!"]);
<br><br>
**Test 6:** "Number 3 message is prioritized over 2, and 2 prioritized over 1 for numbers with multiple digits."
Expect (forLoop(32)).toEqual(["Wont you be my neighbor?"]);

## Description

_This web application takes a number from a user and returns a range of numbrs from 0 to their inputted number with some surprise messages._

_Logic:_ 
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

_However, 3 takes priority over 2, and 2 takes priority over 1._
_Ex:_ 
* _The 3 in 23 takes priority over the 2, so the message will be "Won't you be my neighbor?"_
* _The 2 in 21 takes priority over the 1, so the message will be "Boop"._

## Setup/Installation Requirements
* _Go to https://github.com/mekinsie/mrRobogersNeighborhood_
* _Navigate to and click the green "Code" button on middle upper right part of webpage._
* _Copy the HTTPs address to your clipboard._
* _Open terminal or bash and navigate to the directory you wish to download the repo to._
* _Type into the terminal "git clone [paste HTTPs address] and press enter._
* _Open the file named "index.html" in the directory you just downloaded the repo to. This will open the portfolio page in your default web browser._

## Known Bugs

* _No known bugs_

## License

_GPL_

Copyright (c) 2021 **_Mekinsie Callahan_**

## Contact Information

Reach me: via <a href="https://www.linkedin.com/in/mekinsie/" target="_blank">Linkedin</a> or <a href="mailto:mekinsie.aja@gmail.com" target="_blank">email</a></li>.

Checkout my <a href="https://github.com/mekinsie" target="_blank">github</a>.

