const number_of_boxes_in_row = 100;
const number_of_boxes_in_column = 100;

let box_width, box_height;

function setup(){
    createCanvas(1000,1000);
    box_height = height/number_of_boxes_in_column;
    box_width = width/number_of_boxes_in_row;
}
let x = 0;
let y = 0;
function draw(){
    for(let i = 0; i < number_of_boxes_in_row ; i++){
        for(let j = 0; j <number_of_boxes_in_column; j++){
            customFill(i,y);
            rect(x,y,box_width,box_height);
            y = y+box_height;
        }
        y=0;
        x=x+box_width
        rect(x,y,box_width,box_height);

        // EXTRA CREDIT - Replace the code for drawing boxes with your
        // own code that allows a mouse click on the box to change
        // the color of that specific box
    }
}

/*
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */
function customFill(i,y){
    let j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}
