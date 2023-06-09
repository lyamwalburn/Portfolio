---
title: 'Pathfinding Visualizer'
date: '2022-06-09'
---

Another front-end project to dip my feet in, my goal on this occasion was to create a visual application which would showcase various pathfinding algorithms as they worked through to find a path between a start and end point. Currently the application supports two different pathfinding algorithms A* and Sampling, however there is scope to add more in future as desired.

A* Algorithm following [this](https://en.wikipedia.org/wiki/A*_search_algorithm#Pseudocode) set with a hueristic using Euclidean distance as diagonals are permitted

Sampling Algorithm base upon [this](https://en.wikipedia.org/wiki/Pathfinding#Sample_algorithm)

![The starting layout](/images/pathfinder.jpg "pathfinder layout")

This was represented on a 2D grid which would allow the user to change the start and end points for the algorithm, as well as create obsticals that the algorithm would then have to avoid such as walls.

![Allowing users to create obsitcals](/images/pathfinder-walls.jpg "pathfinder with a wall")

Once the Algorithm had run it would show the user the shortest path it had found.

![The A* algorithm result](/images/pathfinder-result.jpg "pathfinder result using A*")

Finally I decided to give the user the oppertunity to simply generate a maze for the algorithms to explore, should they not wish to draw thier own, the results of this can be seen below.

![A generated maze](/images/pathfinder-maze.jpg "pathfinder maze")

Maze generation using randomized depth first search following [this](https://en.wikipedia.org/wiki/Maze_generation_algorithm)

A working example of the visualizer can be found [here](https://pathfinder-lw.netlify.app/)

The source code can be found [on github](https://github.com/lyamwalburn/pathfinder)