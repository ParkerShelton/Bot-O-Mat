# BOT-O-MAT
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal.

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds.



- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
Be creative and have fun! Use this list or create your own features.
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats


## Authors
- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>





########################################################################
# Bot-O-Mat
Red Ventures Interview Project

##  NOTES ##

https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form
Says its common to wrap label/inputs in a p tag. I never knew that so im leaving this link for later.

// I'm going to use JS //
Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal.

Given the list of tasks, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds.

Collect a name and robot type from user.
Instantiate a Robot of the type provided by the user with the name provided by the user
for example: Bipedal, Larry
Set up methods on Robot to complete tasks from the provided list


Tasks the robots can do:
1  Unipedal: 3, 4, 6, 7, 8, 9,
2  Bipedal: 1, 2, 4, 5, 8, 10
3  Quadrupedal: 1, 2, 3, 4, 9, 10
4  Arachnid: 1, 5, 6, 7, 9, 10
5  Radial:  2, 3, 4, 5, 6, 7, 8, 9, 10
6  Aeronautical: 1, 2, 3, 5, 6, 7, 8

Tasks:
  1. do the dishes
  2. sweep the house
  3. do the laundry
  4. take out the recycling
  5. make a sammich
  6. mow the lawn
  7. rake the leaves
  8. give the dog a bath
  9. bake some cookies
  10. wash the car

# MYSQL TABLES #
FULLROBOTS: - [X]
  id, robotId, taskId

ROBOTS: - [X]
  id, name, type, place, score

TASKS: (points = (eta / 1000) * 100) - [X]
  id, description, eta, points, types

TYPEDTASKS: - [X]
  id, taskId, typeId

TYPES: - [X]
  id, value, name


## TODO ##
  Create index page that has a form to collect a robot name, and type, have a container that holds all of the robots youve created, displays their name, type, and tasks along with which tasks have been completed

  Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

//
  - create the robot and post it to robot table.
  - call function to create task numbers
  - get the robots id and generate 5 random numbers
  - make a for loop that posts the robots id, task number, and the time created to the fullRobots table and joins the table with robtos and tasks tables.
//


## BACK-END ##
  - Individual table for tasks, robot types, and robots, fullrobots joined between robots and tasks, typedTasks joined between tasks and types
  - Allow front-end to edit individual robot, if I have time
  - Send all info to front-end to use


#### VERSION 1.1 ####

  ## TASKS ##
    - [X] Create index page
    - [X] Make a 'robot' component that displays its own name and simple type and tasks
    - [X] Create form to collect robot name and type
    - [X] Display robots in a list on home page.


#### VERSION 1.2 ####

  ## TASKS ##
    - [X] Create database to store all of the tasks
    - [X] Make an api to send tasks from database to the front end
    - [X] When a robot is created, it will fetch 5 random tasks from db and assign them to the robot
    - [X] Make a 'task' component that will store the task description, time it takes to finish task, and whether or not it has been completed.


#### VERSION 1.3 ####

  ## TASKS ##
    - [X] Create a close button to delete robot from robots list.
    - [X] When a robot is deleted, remove it from robots table AND fullRobots table
    - [X] Pull all info from fullRobots table and join it with robot and task tables
    - [X] Set rows from fullRobots table and set it to state
    - [X] Have robot component display their tasks
    - [X] Add a max height to robot list and make it scroll if there are too many robots


#### VERSION 1.4 ####

  ## TASKS ##
    - [X] Once the robots are all set up, have close button remove robot from robots table and fullRobots table.
    - [X] Create a function that starts a robots task and tracks when its done.
    - [X] Once task is done, show completed check mark, add 1 to the completed counter and remove one from the unfinished counter.

#### VERSION 1.5 ####

  ## TASKS ##
    - [X] Redo mysql table for fullRobots to add and remove different things
    - [X] Redo mysql table for robots to add points and score
    - [X] Make the amount of time it takes to complete a task effect the score the robot gets for completing the task
    - [X] Add type specific tasks for robots

#### VERSION 1.6 ####

  ## TASKS ##
    - [X] Sort the robots before mapping them to put them in order of the place they are in
    - [ ] Clean up App by moving the api calls to a separate file
    - [ ] Add media queries to look better on mobile
    - [ ] Clean up all code including my scss
    - [ ] If I have time, add persistance for tasks, bots, and leaderboard stats


## FOR THE FUTURE ##
- Make state update when adding a robot
- Add more features to the robots to make the types more interesting
- Still debating whether or not I want to tasks to save in the database when completed. I like watching them redo on refresh lol.
- Clean every single thing up and make it look nice.
- Add more customability to the robots so you can edit them and give you more inputs to personalize the robots.
- Make the time it takes to complete each task a little longer so you can watch them complete for a longer amount of time.
- Add some sort of error chance so that the robots could possibly fail a task and get less points, even if their type can do the task. They are robots but they are built by humans so they can amke mistakes.
