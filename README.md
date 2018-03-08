# Redux TV Show Tracker App

A TV Show Tracker App built in React/Redux

## Problem

Most TV Show Tracker Apps are subscription-based which cost money. I want to build a simple and free TV show tracker app which makes use of a public TV Show API.

## Tech Stack

* React
* React Router
* Redux
* Redux Thunk
* Bootstrap 4
* SCSS
* Axios

## Wireframes

![](/docs/images/tvtrackerapp.png)

## Components / Containers

* Search Bar
  * Creates a `search action` which changes the contents of the `Show List`.
* Show List
  * The data loads when the app started.
  * The data reloads when a `search action` is created.
  * A `click action` navigates to `Show Detail`
* Show Detail
  * The data loads with the selected `show data`.
  * The page contains the episode list.
* Episode List
  * The episode list loads when it is given a valid `Show ID`.
* Episode Detail
  * The data loads with the selected `episode data`.

## User Interface - Beta
### Show List / Search Bar
![](/docs/images/ShowList.png)

### Show Detail / Episode List
![](/docs/images/ShowDetail.png)

### Episode Detail
![](/docs/images/EpisodeDetail.png)