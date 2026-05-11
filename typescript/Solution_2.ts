type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; sideLength: number };
type Shape = Circle | Square;

const shapes: Shape[] = [
    { kind: "circle", radius: 5 },
    { kind: "square", sideLength: 10 },
    { kind: "circle", radius: 15 }
    ];
// Implement isCircle so the resulting array is strictly typed as Circle[] const circles = shapes.filter(isCircle); 
// circles should be typed as Circle[], NOT Shape[]

// Solution:
function isCircle(shape: Shape): shape is Circle{
    return shape.kind === "circle";
}

const circles = shapes.filter(isCircle);
console.log(circles[0].radius); // Should compile without errors