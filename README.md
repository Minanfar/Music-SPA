# Band landing page
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This exercise is about practicing react-router. Complete this small React app for your favorite band.

## Tasks

- Implement a navigation menu for your app with at least four items
  - For example vocals, bass, guitar, and drums
- Use [react-router](https://reactrouter.com/) package to handle navigation within your app
- It's not required to implement transitions between pages
- Choose images of your favorite music band for each navigation item
  - The image file names should include the name of the corresponding navigation item
  - For example `guitar-example.png`, `vocals.png`, etc
- Create a `<main>` container element that will hold a single image
- When a user clicks on a nav item, the app should navigate to a path including the name of the item
  - For example `/vocals`, `/bass`, `/guitar` and `/drums`
  - The image in `<main>` changes corresponding to the new path

## Example

![](autograding.gif)

#### BONUS

You can experiment with transitions between pages as well. Here are some interesting libraries:

- https://reactcommunity.org/react-transition-group/
- https://www.framer.com/motion/

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### App

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | renders without crashing |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | loads with the default path |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | has at least four navigation elements |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | navigates to the guitar page when the guitar link is clicked |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | navigates to the bass page when the bass link is clicked |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | navigates to the vocals page when the vocals link is clicked |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | navigates to the drums page when the drums link is clicked |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | displays an image related to guitar when the path is /guitar |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | displays an image related to bass when the path is /bass |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | displays an image related to vocals when the path is /vocals |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | displays an image related to drums when the path is /drums |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-Router-band-landing-page)


[//]: # (autograding info end)