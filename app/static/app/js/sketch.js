let w = 30; // Width of cell
let row = 20; // Number of rows
let col = 20; 
let black=0;
let board;
x_value = document.getElementById('choice_x');
y_value = document.getElementById('choice_y');
shop_name = document.getElementsByClassName('shop_name');
shop_description = document.getElementsByClassName('shop_description');
drop_down= document.getElementsByClassName('drop-down1');
// temp = document.getElementById('temp');

function setup(){
    var cnv=createCanvas(1000, 1000);
    cnv.position(200,110);
    cnv.style('z-index','-1');
    board = new Array(row);
    for(let i=0; i<row; i++){
        board[i] = new Array(col);
        for(let j=0; j<col; j++)
            board[i][j] = 0;                   
    }
}


function draw() {

    background(255);
    for (let i = 0; i < row-1; i++) {
        for (let j = 0; j <= col-1; j++) {
            rect(i*w, (j-1)*w, w, w);
        }
    }
    


    noLoop();
}
let prevx = -1, prevy = -1;
function touchMoved(){
    let x = mouseX;
    let y = mouseY;
    x = floor(mouseX/w)+1;
    y = floor(mouseY/w)+1;
    //console.log(prevx, x, prevy, y);
   
    if(x > 20 || y > 20)
        console.log(x,y,"Out of bounds!!");
    else if((prevx != x || prevy != y) && (black==1)){
        // if(board[x][y]!=0)
        // {
        //     rect((x-1)*w, (y-1)*w, w, w);
        //     board[x][y]=0; 
        //     fill(255);                       
        // }
        // else
        {
            board[x][y] = 1; 
            fill(100);
        } 
               
        //console.log(x,y);
                
        rect((x-1)*w, (y-1)*w, w, w);
        prevx = x;
        prevy = y;
        
    }           
    
}

let bg = -1; //blue or green clicked
function mousePressed(){
    let x = mouseX;
    let y = mouseY;
    
    x = floor(mouseX/w)+1;
    y = floor(mouseY/w)+1;

    if(x> 20 || y>20)
        console.log(x,y,"Out of bounds!!");
    else if(black==1){
        {   
            
            rect((x-1)*w, (y-1)*w, w, w);
            if(bg == 0)
                board[x][y] = 2;
            else if (bg == 1)
                board[x][y] = 3
            else                                        
                board[x][y]=1; 
            fill(100);
        }
        console.log(x, y);
    }
    else if(green==1)
    {
        rect((x-1)*w, (y-1)*w, w, w);
        green=-1;
    }
    
    if(x==21 && y==1)
    {
        fill(0,255,0);
        //rect((x-1)*w, (y-1)*w, w+3, w+3);
        console.log(x,y,"green");
        fill(0,255,0);
        bg = 1;
        green=1;
        //board[x][y] = 2;
    }
    
}

function keyPressed()
{
    if(x_value.value && y_value.value)
    {
        if(keyCode===ENTER)
        {
        x_cod=parseInt(x_value.value,10);
        y_cod=parseInt(y_value.value,10);
        console.log(x_cod,y_cod);
        fill(255,0,0);
        board[x_cod][y_cod] = 3;
        rect((x_cod-1)*w, (y_cod-1)*w, w, w);
        fill(100);
        }
    }
}

function mouseMoved()
{
    
    x = floor(mouseX/w)+1;
    y = floor(mouseY/w)+1;
    if(board[x][y]==1)
    {   
        console.log('testing');
    //    $("#temp").html('jndjsdscsjckscjscksc');
    //    $("#temp").addClass('tooltip');                                
    }
}

function open_form()
{   
    // this.removeClass("red");
    // this.addClass("blue");
    console.log("click");
    if(black==1)
        {
            fill(100);
            black=0;
        }
        else{
            fill(100);
            $('.display_form').show();
            black=1;   
        } 
}



