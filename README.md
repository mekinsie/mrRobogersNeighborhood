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
```
Describe: forLoop(number)

Test 1: "It should return an array with 0 if the number 0 is inputted."
Expect (forLoop(0)).toEqual([0]);


Test 2: "It should return an array that counts up from 0 to the inputted number."
Expect (forLoop(5)).toEqual([0, 1, 2, 3, 4, 5]);

Test 3: "It should return an array that counts up from 0 to the inputted number except for the number 1, which will be replaced with 'Beep!'."
Expect (forLoop(5)).toEqual([0, "Beep!", 2, 3, 4, 5]);

Test 4: "It should return an array that counts up from 0 to the inputted number except for the numbers that contain a 1, 2, or 3 which will be replaced with specialized messages."
Expect (forLoop(3)).toEqual(["Wont you be my neighbor?"]);

Test 5: "It should return a specialized message if the number is greater than 9 and contains any of the digits 1,2 and 3."
Expect (forLoop(10)).toEqual(["Beep!"]);

Test 6: "Number 3 message is prioritized over 2, and 2 prioritized over 1 for numbers with multiple digits."
Expect (forLoop(32)).toEqual(["Wont you be my neighbor?"]);
```
## Description

This web application takes a number from a user and returns a range of numbrs from 0 to their inputted number with some surprise messages.

Logic:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

However, 3 takes priority over 2, and 2 takes priority over 1.
Ex:
* the 3 in 23 takes priority over the 2, so the message will be "Won't you be my neighbor?"
* The 2 in 21 takes priority over the 1, so the message will be "Boop".

## Setup/Installation Requirements
View directly:
* You can view this directly on my <a href="https://mekinsie.github.io/mrRobogersNeighborhood" target="_blank">github pages</a>.

Download the repo:
* Go to https://github.com/mekinsie/mrRobogersNeighborhood_
* Navigate to and click the green <img src="code.PNG" alt="code" height="20"> button on middle upper right part of webpage.
* Click on "Download ZIP"
* Navigate to the downloaded zip and open it.
* Open the folder inside the zip.
* Double-click on the HTML file to open it in your default browser.

Clone the repo:
* Go to https://github.com/mekinsie/mrRobogersNeighborhood_
* Navigate to and click the green <img src="code.PNG" alt="code" height="20"> button on middle upper right part of webpage.
* Copy the HTTPs address to your clipboard.
* Open terminal or bash and navigate to the directory you wish to download the repo to.
* Once you have chosen your desired directory, open your terminal, type "git clone [paste link]" and press enter:
```bash 
$ git clone https://github.com/mekinsie/[link]
```
* To open the folder in your default code editor, navigate to the downloaded folder and type "code ." into your terminal:
``` bash
$ code .
```
* To view the html file in your default browser from your cloned repo, double-click on the HTML file in the directory.

## Known Bugs

* _No known bugs_

## License

_GPL_

Copyright (c) 2021 **_Mekinsie Callahan_**

## Contact Information

Reach me: via <a href="https://www.linkedin.com/in/mekinsie/" target="_blank">Linkedin</a> or <a href="mailto:mekinsie.aja@gmail.com" target="_blank">email</a></li>.

Checkout my <a href="https://github.com/mekinsie" target="_blank">github</a>.

