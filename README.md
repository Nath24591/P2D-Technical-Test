# README #
## Install Dependencies 
```bash
npm install
```

## Run Dev Server
This server should pick up on changes you make. Simply run it once, then save your changes to show in the browser.
```bash
npm run dev
```
---

# Wren Technical Task
## Architecture
This code base implements a 2D canvas system, where units are drawn as squares.
It is written in TypeScript and React and has elements of CSS / Less and HTMl.

Data for the units is hardcoded in ```src/constants/data.ts```.

Rendering is controlled through ```src/scripts/engine```.

UI components are stored in ```components```.

## Instructions
Begin by forking the repository and familiarising yourself with the code.

Any changes you make should be pushed up to forked repo using Git.

Complete this task without the aid of an LLM.
You will be expected to send us this repository at the end of the test as well
as demonstrate your work through a live walk through.

### Task
Using OOP and Design Patterns, complete the following the tasks.

- Create two new Appliance Units - a Washing Machine and a Fridge.
- These new units should draw on the canvas.
- The colour of the unit on the canvas should differ per appliance type.
  - Washing Machines should be green.
  - Fridges should be purple.
- Each new unit should have getter methods to fetch their properties.
    - Each appliance should consist of the following properties -
        - dimensions
        - colour
        - position
        - type
        - appliance type e.g. Washing Machine / Fridge

- The Washing Machine must also have a loading type - 'Front Load' / 'Top Load'.
- The Fridge must also specify a fridge type - 'Fridge' or 'Fridge / Freezer'.

- Implement a collision system where units on the canvas collide with the Obstruction Unit (unit in black).
    - When a unit overlaps the Obstruction Unit, their colour should change to red.
    - When a unit does not overlap the Obstruction Unit, they should retain their original colour.

- Feel free to install additional libraries to aid.
- Any improvements to the current architecture are also welcome.