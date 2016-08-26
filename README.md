App: jio-app

CRUD Action for User and Events

Description:

A simple geolocation based app to invite friends to discovered or hosted social events.

Features:
Write a description of the event you’re in and post it to all your friends or to those you feel should join you in the event. Share live events with your friends as they happen.

Create private events such as gatherings, movies, etc and invite your friends.

Approach:

The 2 models of Users and Events and their attributes were first determined. As a user is able to create many events and it will be shown in the user profile page, it was decided that the user model will reference events.

After this, the wireframes for the application’s pages was created showing the buttons and input fields. This provided the layout of the pages and the flow of the application as the user uses it.

With the backend and frontend decisions made, we then proceeded to use the frameworks and database learnt in class to create the application while incorporating external APIs and other libraries to create the functionality we needed.

User Story:

User signs up to create account > user logs in >
CRUD action for events

As Event Creator
User profile page> user create event > view event> edit event > delete event

When Creating Events
Upload Photo, set location with geolocation, write description of event.

Events page - All Users are able to view all events posted by all users.

Wireframes: GP1-Frontend-Wireframes.pdf

Features that can be added in future:

To add a follower function where -
Event creator user can share event with followers
Invite friends or share to all
User gets invite notification > user sees shared event > user responds with going or not going > Event creator will be notified

Technologies used:
Clientside:
Javascript
HTML + CSS + EJS
Imgur image upload

Server side:
Mongo Database  -  User model + Event model
Express API Server
Node JS

External APIs:
Photo storage server API, Imgur
Set location with geolocation api

Dependencies:
   npm install
