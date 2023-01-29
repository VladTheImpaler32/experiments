# p5.js

 ### Orbit
A conversion of a program I wrote in vanilla JavaScript. One gravity object in the center, a bunch of satellites that fly around/past it. Physics aren't realistic, just kind of cool to look at.
### Perlin Dots
My first p5.js program. The idea of generative art is quite cool to me, and I wanted to learn a little more about Perlin noise, so I made Perlin Dots. A grid of dots that uses Perlin noise as an offset to create a cool, flowing animation.
### Flow Field Particles
The particles move around according to a grid of vectors "beneath" them. The particles use the closest vectors direction and magnitude to update their acceleration and velocity. The vectors are created and updated with Perlin noise to create a flowing effect, the colour is of the particles is controlled by the same Perlin noise. 
### Boxes
Using Perlin noise to gradually change the rotation and translation of a grid of boxes to create a "falling" or "breaking" effect. Color also driven by Perlin noise.
### Sort
Heavily inspired by [this](https://www.reddit.com/r/creativecoding/comments/elttu8/visualizing_bubble_sort/) reddit post. Generates an array of random numbers, sorts them with either bubble sort, insertion sort, or selection sort, visualizes them with corresponding points which are connected using curveVertex. Color generation dependent on which position it is in the array.
### Circular Noise
Inspired by The Coding Train's video on [Perlin Noise GIF Loops.](https://youtu.be/c6K-wJQ77yQ) Not meant to be more than a reference for future projects that need perfectly looping noise. Uses Perlin noise generated from the sin and cos of chosen value to create noise that starts and ends at the same place. Will definitely be useful for upcoming projects.
