# Work Day Scheduler

<a href="https://ekellv.github.io/Workday-Scheduler-With-Web-APIs-MSU-Bootcamp-Challenge-5/">Work Day Scheduler Link</a>

## Description
This is a work day planner that allows a user to input and save tasks throughout the hours of a single day. It also highlights the current hour for the user in a light yellow color, while the past is indicated by a mustard yellow and the future by an olive green. The work day scheduler is set up to run from 8 AM to 5 PM but it could be changed to run for whichever hours the user desires. 
  
The page's HTML and CSS is updated dynamically by JavaScript powered by jQuery and Moments.js. Bootstrap and Google Fonts are used to design the style of the page. 

The application was created with a chunk of starter code provided by the MSU Bootcamp, with the functionality of the hour color coding and tasks saved local storage created by me. I also changed the styling and font from what was provided in the starter code to create something more unique. 

## User Story: 

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage 
* The top of the page displays the current day. 
* The page displays the hours of 8AM - 5PM. 
* The page shows the present hour in light yellow, the past hours in mustard yellow, and the future hours in olive green. 
* Each hour block has a text input for users to schedule their daily tasks. 
* Each hour block has a save button linked to the user's local storage so the user can safely store their schedule. 
* The application can be viwed on the user's desktop or mobile device. 


## Visuals

![Challenge 5](https://user-images.githubusercontent.com/103372188/175821787-f96dfe9a-fe33-402f-a9d5-3818368ef454.gif)

![challenge-5-screenshot](https://user-images.githubusercontent.com/103372188/175821993-2152a11c-cba4-4443-9fe2-20dcdce90a93.png)


