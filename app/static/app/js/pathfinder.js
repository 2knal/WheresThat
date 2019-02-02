let rows = 5;
let columns = 5;

let w, h; // Width and Height

let grid = new Array(rows);

function spot(x, y){
    this.x = x;
    this.y = y;
    this.f = 0;
    this.g = 0;
    this.h = 0;
}

function setup(){
    createCanvas(1000, 1000);

    for(let i=0; i<rows; i++){
        grid = new Array(columns);
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            grid[i][j] = new spot();
        }
    }
}

function draw(){
    background(0);
}