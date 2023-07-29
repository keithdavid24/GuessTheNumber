# Unit 2 Project
## Guess the Number
## Project Rubric
[Guess the Number Rubric](https://docs.google.com/spreadsheets/d/17eXV0FTpW-75rh2MVsmuZ2kCPMThbcEaiukg4C2M3iM/edit?usp=sharing)

### Concept:
In this project, you will need to utilize the fundamental aspects of JavaScript by using **loops**, **conditionals**, **variables**, and **functions** to accomplish this task.

Before starting to code this project, please find a partner and play this game together verbally for a few rounds.

1. Alice thinks of a number
2. Bob guesses a number
3. Alice says "higher", "lower", or "correct"
4. repeat 2 & 3 until Bob guesses correctly
5. repeat 1-4 with Alice guessing

After you get a feel for the game, it's time to write a software version of the game, where the *computer* thinks of a number between 1 and 100 and the *player* tries to guess it.

Think carefully about how the computer will guess a number. Start with it guessing a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) between 1 and 100. Once that's working, high five, take a break, then try to use a more efficient guessing algorithm instead.

Consider your process in how Bob guesses a number and adjusts based off of Alice's response. What numbers should be considered moving into a the next guess?

> "Make it work, make it right, make it fast -- in that order." - Kent Beck

---
## Project Spin-Up
The display of this guessing game will be handled through your web browser. In order for this to be accomplished, a repo has been created to help display the results of your build.

Code has been created only to help with this display but needs the proper logic to be built in order to provide the correct responses.

## Git: Fork & Clone
Within this repo, you will first **fork** this to generate a copy of this repo to your own account.

![]('./../assets-ReadMe/01_git_fork.png)

This should point to your account and share the same name structure as this template repo.

Make sure this is set to your **username** and click **Create fork**

![](assets-ReadMe/02_git_fork_create.png)

This has only generated a repo within the GitHub application. 

You will need to **clone** your newly created repo to your workstation.

Select **<>Code** and **copy** the HTTPS string.

![](./assets-ReadMe/03_git_clone.png)

This will need to pasted within your **projects folder** when generating your local repo on your workstation.

```
Cohort Folder
    - Lecture Notes
    - Projects
        - Unit 1
        - [Unit 2 Here]
```
![](./assets-ReadMe/04_git_clone-paste%20repo.png)

## Workspace
You will see the following folder structure:

![](./assets-ReadMe/05_folder_structure.png)

Within the ```index.html``` document, go ahead and run **Live Server** so that your default browser displays. This will be the interface that you will be testing within.

The only file that you will be working within to complete this project is within the ```script.js``` file. 

### Warning:
**Altering any other files can result in breaking this project.**

---
## Style Guide
- Each ticket may have specific requirements to complete a task. Anything outside of stated requirements can be flexible.
- Once a ticket is completed, commit your code to your repo with a commit message **[ticket number] [status]**
  - ex: `git commit -m "U2_01 WIP"`
    - This would detail that Guess the Number portion is partially complete or a work-in-progress.
---
## Part 1: Guess the Computers Number

A boilerplate function has been created that accepts two different parameters, **userGuess** and **computersNumber**. The computers number is generated when the page is loaded and a user submits a value within the input field.

Your task is to process the value provided and write a condition that helps compare what the user submits to what was generated.

Concept to consider:
- Conditionals

### Ticket: `#U2_01`

- **Given** a user submits a value from the browser.
- **Then** the function should evaluate if the `userGuess` is less than or equal to 100 or greater than or equal to 1.
- **Given** the number is not within the values of 0 and 101.
- **Then** the condition should return a string that states "Please input a number between 1 and 100".
- **Given** the `userGuess` is less than the `computersNumber`.
- **Then** return a string that states "Lower".
- **Given** the `userGuess` is greater than the `computersNumber`.
- **Then** return a string that states "Higher".
- **When** the `userGuess` is equal to the `computersNumber`.
- **Then** return a interpolated string that states, "The number was <`userGuess`>!"

**Ticket Requirement**
- This conditional should reflect an if/else format.

---

## Part 2: The Computer Guesses Your Number

In this section, two different functions have been structured for you, `startCompGuess()` and `compGuess(reply)`.

`startCompGuess()` will be the main logic of handling the computer's guess and displaying to the browser. This function will fire off when the user clicks the **Start** button in the browser.

`compGuess()` will be the response structure from the user as the parameter (reply) will be obtained from the buttons within the browser. This code has already been structured to pass into **this** function. 

In this section, you will need to consider scope of variables, logic to build out within the provided functions, and to create a random number within a new function written by you.

Concepts to consider
- Global/Local Scope
- Functions
- Variables
- Conditionals
- Math Methods

### Ticket: `#U2_02`
- **Given** there is a need to store a value in the global scope of the `script.js` file.
- **Then** create a variable called `currentNumber`.
- **And** assign a value of 1 to the variable.
- **Given** that a value is stored in the `currentNumber` variable.
- **Then** return a string that states, "Is your number <`currentNumber`>?" within the `startCompGuess()` function.

### Ticket: `#U2_03`
- **Given** that there is a variable to store a current value.
- **Then** create a new function outside of all other functions as a **block body arrow function**, called `createGuess`.
- **Then**, within the newly created function, reassign the `currentNumber` variable to house a random number.
- **Then** return the reassigned variable.

**Hint:**
[Math Object](https://www.w3schools.com/jsref/jsref_obj_math.asp)

### Ticket: `#U2_04`
- **Given** the `Lower` button is clicked. 
- **Then** return a string that states, "Your number is lower? Is it <`currentNumber`>?".
- **Given** the `Higher` button is clicked. 
- **Then** return a string that states, "Your number is higher? Is it <`currentNumber`>?".
- **Given** the `That's it!` button is clicked.
- **Then** return a string that states, "I knew it was <`currentNumber`>!"

**Ticket Requirement**
- This conditional needs to be a switch statement.

### Ticket: `#U2_05`
Refactoring your values.
- **Given** the `Lower` button is clicked.
- **Then** the `currentValue` should be stored in a new variable called `lowest`.
- **And** the `createGues()` should consider this variable.
- **Given** the `Higher` button is clicked.
- **Then** the `currentValue` should be stored in a variable called `highest`.
- **And** the `createGues()` should consider this variable.

**Note:** Consider initial values.

### Ticket: `#U2_06`
Considering the `compGuess()` conditional
- **Given** the `Lower` button is clicked.
- **Then** a new guess should be invoked.
- **And** the value should be reassigned to the appropriate variable.
- **Given** the `Higher` button is clicked.
- **Then** a new guess should be invoked.
- **And** the value should be reassigned to the appropriate variable.

# Stretch Goals
### Note:
Stretch goals should not be attempted until previous tickets have been completed and tested.

## Ticket `#U2_07`
- Update the `README.md` in the **root** directory.
  - Detail the concept of this project in psuedo code within the document.
  -  **[Pseudo Code Article](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)**
  -  [What is a README file?](https://www.mygreatlearning.com/blog/readme-file/)
- Deploy this project through **GitHub Pages**.
   -  Update your **README.md** with a hyperlink to the deployed URL.
- Provide a **Error Handling** condition within the `randomNumber()` function that will respond with a "Please input a number between 1 and 100" if a user does not provide a value.
- Create a variable that will track the number of guesses by the user and update the return within `randomNumber()` to display how many guesses it took to get the correct value.
