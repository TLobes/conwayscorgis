## Conway’s Game of Corgis

Started at [FullStack Pair Programming @ Opodz](http://www.meetup.com/fullstackla/)

*Goal:* Build a visual representation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) with JavaScript

*Rules:*  
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Authors: Machiko Yasuda [@machikoyasuda](http://github.com/machikoyasuda) & Tim Lobes [@tlobes](http://github.com/tlobes)

### To run locally:
- `git clone https://github.com/TLobes/conwayscorgis.git`
- `cd conwaysgcorgis`
- `python -m SimpleHTTPServer 8000`
- Open browser to: `http://localhost:8000`

### To push master to GitHub pages
- `git checkout gh-pages`
- `git rebase master`
- `git push origin gh-pages`
- Open browser to: `http://tlobes.github.io/conwayscorgis/`

## Thanks to corgis & Bill Murray
- Corgi images from: http://placecorgi.com/64
- Bill Murray images from: http://www.fillmurray.com/64/64
