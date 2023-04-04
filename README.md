# Work Day Scheduler

## Description

A basic calendar application that lets the user log events for each hour of the workday. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The [Day.js](https://day.js.org/en/) library works behind the scenes to handle date and time.

A gif demonstrating the application's functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/images/05-third-party-apis-homework-demo.gif)



## Usage

#### Go to [https://qkr0wns.github.io/scheduler](https://qkr0wns.github.io/scheduler) to access the live application.

### Overview
On the application, you can see the current day at the top of the page followed by colour-coded timeblocks representing each hour of the workday.
Each timeblock is accompanied by a save button. Any previously saved events are automatically populated in the appropriate timeblocks.

### Timeblocks
- The red timeblock represents the *current* hour.
- Grey timeblocks represent *past* hours of the workday.
- Green timeblocks indicate *future* hours of the workday.

### Logging events
To log an event,
1. Select a timeblock and type your message.
2. Click the blue save button next to the timeblock to save that message.
   1. The message is saved into your browser's local storage. This allows your event messages to persist even after closing the app.
   2. You can overwrite a previously saved message by entering a new message into the timeblock and clicking the save button.
   3. Refresh the page to clear unsaved changes and repopulate the app with your saved event messages.

## Credits

- Starter code (HTML, CSS, Bootstrap layout) : UofT SCS Coding Bootcamp

## License

See LICENSE in repo.
