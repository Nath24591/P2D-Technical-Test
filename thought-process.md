# Thought Process as working through the assessment

I first ran into an issue getting the dev server running, it required a Node upgrade. I was originally running Node v20.1, but Vite 7.0 requires Node 20.19 or higher. After upgrading Node, everything worked as expected.

Once the project was running, I spent some time getting familiar with the codebase. I noticed that nothing is draggable — positions are currently hardcoded in data.ts. I also noticed one of the base units is already colliding with the obstruction unit. That will actually be useful when it comes time to test collision!

To start the task, I focused on creating the two new appliances: Washing Machine and Fridge.

The project already has a Shape class in Base.ts which handles common properties. Rather than repeating that logic, I extended Shape to create a new class called ApplianceUnit. This generic appliance class adds an additional property 'applianceType' to describe the specific appliance ('washing machine' and 'fridge' in this case). - Unsure if I should set this as literal strings to help with typing, but for now, I will define as string.

From this, I extended ApplianceUnit to create two other classes:

- WashingMachine, which includes a loadType property ('Front Load' or 'Top Load')
- Fridge.ts, which includes a fridgeType property ('Fridge' or 'Fridge/Freezer')

This approach keeps things OOP and makes it very easy to add more appliance types in the future with minimal code duplication. (DRY principle!)

I then moved on to adding my new object to the data.ts - My thought here is that it's currently just a list of config objects ShapeConfig[], not instantiated Shape objects. Should I maybe migrate appliance units to class instances, so DATA would become an array of instantiated objects rather than (shape, washing machine, fridge) etc.? I think this would be better for the OOP approach. For now, I will just add my new objects as shape objects to get them rendered.

Things got a little messy when I tried to implement the collision engine because of the above. So I will refactor to use instantiated objects to render rather than ShapeConfig[] objects.

I ran into an issue here using the array.find method in my collision logic, typeScript throwing an error saying the method didn’t exist on the array. This was because we didnt have a tsconfig file and we needed to include an ES2020 or later lib target, which is needed for methods like .find(). After some googling, I found that helpful array methods were added in ES2015, so I added the tsconfig and included "target": "ES2020" and "lib": ["DOM", "ES2020"]

I made the id property optional in the Shape and Appliance classes. It's not really required for just now for rendering or collision, but I included it to prevent having to refactor later in case we wanted to add selecting or interaction.

I ran into an issue where units weren’t turning red on collision, even though the collision math was correct. After debugging, I realised the Sprite class was keeping the colour when the Sprite was first created. This meant that any changes to the Shape, like updating the colour, weren’t being updated. I refactored Sprite to pull the latest colour, position, and dimensions from the Shape on every draw call, which solved the issue.

Regarding design patterns, I used a factory-like pattern where data.ts acts as a central place that constructs and provides the fully instantiated objects (shape, washing machine, fridge).

I also applied inheritance. Shape defines all common properties, ApplianceUnit extends Shape and adds the applianceType property, and WashingMachine/Fridge extend ApplianceUnit to add their specific properties.

## Extras

### Additional Appliance
I added a Cooker appliance and set its own colour. It is very easy to add new appliances now with this structure.

### Labeling
I wanted to add some additional improvements, so I have added a getLabel() to the various classes, which is responsible for getting the label to display within the sprite.

I then faced an issue where the longer labels would expand past the rectangle, so I needed to add some dynamic sizing to the text to account for this. I'll do this by setting a base font size, then calculating shape's width, and having 6px as padding, then make the font size smaller if necessary to display within the shape.

### Enabled Dragging of Shapes
Next, I wanted to make the shapes draggable. There wasn't much work needed here, as we already had getPosition and setPosition set up on the shape. So all we really have to do is set up a DragEngine class and initialise the event listeners for mousedown, mouseup, and mousemove events.

I did run into an issue where the shape was quite jumpy when clicking and dragging. I solved this by adding the offset from the top left of the shape to the mouse position. Then it moves more relative to where it was clicked, and was smooth after that.

After playing around with the dragging for a while, I noticed I could drag the shape outside of the canvas boundary. So I changed the onMouseMove event to prevent this. I got the dimensions from the shape we were dragging, with the offset, and just made sure it couldn’t be more than the canvas width or height.

### Collision
I understand there may be a use case where we don’t want any of the shapes to collide. So I changed from just one function inside of the CollisionEngine to two — one as per the requirement just to turn red if colliding with the obstruction, and a second to turn both shapes red if any of them are colliding. The original requirement is the current active one, but the other is in Game.gameLoop(), so we can comment out there to see that in action.

I chose to implement this using functional patterns rather than class-based. This was an intentional decision to balance the OOP principles I've shown elsewhere in the code (shape hierarchy). I wanted to show how functional patterns can also be useful and can work perfectly fine alongside OOP.

## Tests
I’ve implemented a Vitest testing framework, i chose this because its the framework i have had most exposure to. I focused on the core logic (collision detection, shape behaviour, and labels). If this was real world, or I had more time, I would continue toward full coverage or full meaningful coverage at least. Static files and UI rendering components are excluded from coverage as they don’t really need testing.
