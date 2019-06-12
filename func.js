        //Initial setup
        let gridNumber = 16;  
        let color = "black";

        const field = document.getElementById("main");          
        const clearBTN = document.getElementById("clear");
        const resizeBTN = document.getElementById("resize");
        const blackBTN = document.getElementById("black");
        const rainbowBTN = document.getElementById("rainbow");
        const grayBTN = document.getElementById("gray");

        drawBoard(gridNumber);
        drawTiles(gridNumber);

    //Buttons
        
        // Clear button functionality            
        clearBTN.addEventListener("click", (e) => {   
            const clearBoard = document.getElementById("drawingBoard").childNodes;
            clearBoard.forEach((tile) => {
            tile.firstChild.textContent = "0";
            tile.style.backgroundColor = "white";
            });
        });
        //Clear button description
        clearBTN.addEventListener("mouseenter", (e) => {
            const clearDesc = document.createElement("div");    
            clearDesc.id = "clearDescription";                        
            clearDesc.textContent = "The Clear Board button erases all the colored tiles from the board. It does not change the pen color.";
            document.getElementsByClassName("menu")[0].appendChild(clearDesc);
        });
        clearBTN.addEventListener("mouseleave", (e) => {
            document.getElementsByClassName("menu")[0].removeChild(document.getElementById("clearDescription"));
        });


        //Resize Button functionality
        resizeBTN.addEventListener("click", (e) => {
            gridNumber = prompt("How many rows do you want to see? Please enter a number.");
            field.removeChild(document.getElementById("drawingBoard"));
            drawBoard(gridNumber);
            drawTiles(gridNumber);
        });
        //Resize button description
        resizeBTN.addEventListener("mouseenter", (e) => {
            const resizeDesc = document.createElement("div");    
            resizeDesc.id = "resizeDescription";                     
            resizeDesc.textContent = "The Resize Board button deletes and resizes the board to your liking. Just enter a number.";
            document.getElementsByClassName("menu")[0].appendChild(resizeDesc);
        });
        resizeBTN.addEventListener("mouseleave", (e) => {
            document.getElementsByClassName("menu")[0].removeChild(document.getElementById("resizeDescription"));
        });


        //Black Pen Functionality
        blackBTN.addEventListener("click", (e) => {
            const cells = document.getElementById("drawingBoard").childNodes; 
            cells.forEach((cell) => {                           //This overrides the default event listener declared in the drawTiles function
                cell.addEventListener("mouseover", () => { 
                color = "black";
                cell.style.backgroundColor = `${color}`;
                });
            });  
        });
        //Black pen description
        blackBTN.addEventListener("mouseenter", (e) => {
            const blackPenDesc = document.createElement("div");    
            blackPenDesc.id = "blackPenDescription";                    
            blackPenDesc.textContent = "The Balck Pen button changes the filling color to black.";
            document.getElementsByClassName("menu")[0].appendChild(blackPenDesc);
        });
        blackBTN.addEventListener("mouseleave", (e) => {
            document.getElementsByClassName("menu")[0].removeChild(document.getElementById("blackPenDescription"));
        });

        //Magic Rainbow Pen functionality
        rainbowBTN.addEventListener("click", (e) => {
            const cells = document.getElementById("drawingBoard").childNodes; 
            cells.forEach((cell) => {                           //This overrides the default event listener declared in the drawTiles function
                cell.addEventListener("mouseover", () => { 
                let color2 = randomColor();
                cell.style.backgroundColor = `${color2}`;
                });
            });  
        });
        //Rainbow pen description
        rainbowBTN.addEventListener("mouseenter", (e) => {
            const rainbowPenDesc = document.createElement("div");    
            rainbowPenDesc.id = "rainbowPenDescription";                    
            rainbowPenDesc.textContent = "The Magic Rainbow Pen button changes the filling color to random. Try it out, it's magical!";
            document.getElementsByClassName("menu")[0].appendChild(rainbowPenDesc);
        });
        rainbowBTN.addEventListener("mouseleave", (e) => {
            document.getElementsByClassName("menu")[0].removeChild(document.getElementById("rainbowPenDescription"));
        });

        //Gray Gradual functionality
        grayBTN.addEventListener("click", (e) => {
            const grayCells = document.getElementById("drawingBoard").childNodes; 
            grayCells.forEach((cell) => {
                let counter = document.createElement("p");
                counter.textContent = 0;
                counter.style.display = "none";
                cell.appendChild(counter);
                cell.addEventListener("mouseover", () => {
                    switch(cell.firstChild.textContent){
                        case "0":
                        cell.style.backgroundColor = "rgb(225, 225, 225";
                        cell.firstChild.textContent = "1";
                        break;

                        case "1":
                        cell.style.backgroundColor = "rgb(200, 200, 200";
                        cell.firstChild.textContent = "2";
                        break;

                        case "2":
                        cell.style.backgroundColor = "rgb(175, 175, 175";
                        cell.firstChild.textContent = "3";
                        break;

                        case "3":
                        cell.style.backgroundColor = "rgb(150, 150, 150";
                        cell.firstChild.textContent = "4";
                        break;

                        case "4":
                        cell.style.backgroundColor = "rgb(125, 125, 125";
                        cell.firstChild.textContent = "5";
                        break;

                        case "5":
                        cell.style.backgroundColor = "rgb(100, 100, 100";
                        cell.firstChild.textContent = "6";
                        break;

                        case "6":
                        cell.style.backgroundColor = "rgb(75, 75, 75";
                        cell.firstChild.textContent = "7";
                        break;

                        case "7":
                        cell.style.backgroundColor = "rgb(50, 50, 50";
                        cell.firstChild.textContent = "8";
                        break;

                        case "8":
                        cell.style.backgroundColor = "rgb(25, 25, 25";
                        cell.firstChild.textContent = "9";
                        break;

                        case "9":
                        cell.style.backgroundColor = "rgb(0, 0, 0";
                        cell.firstChild.textContent = "9";
                        break;
                    }
                });                    
            });  
        });

        //Gradual Grey pen description
        grayBTN.addEventListener("mouseenter", (e) => {
            const grayPenDesc = document.createElement("div");    
            grayPenDesc.id = "grayPenDescription";                    
            grayPenDesc.textContent = "The Gradual Gray Pen changes a tile from white to black in 10 steps, getting 10% darker each time.";
            document.getElementsByClassName("menu")[0].appendChild(grayPenDesc);
        });
        grayBTN.addEventListener("mouseleave", (e) => {
            document.getElementsByClassName("menu")[0].removeChild(document.getElementById("grayPenDescription"));
        });


        //Functions

            //Create the drawing board function
            function drawBoard(gridNumber){ 
                const drawingBoard = document.createElement("div"); 
                drawingBoard.id = "drawingBoard";
                drawingBoard.style.gridTemplate = `repeat(${gridNumber}, 1fr) / repeat(${gridNumber}, 1fr)`;
                field.appendChild(drawingBoard);
            };

            //Create the tiles and append function
            function drawTiles(gridNumber){                    
                for (let i = 0; i < gridNumber * gridNumber; i++){
                    const tile = document.createElement("div");
                    tile.classList.add("tile");                    
                    tile.addEventListener("mouseover", () => {  //Changing background-color on hovering
                    tile.style.backgroundColor = `${color}`;                        
                    });
                    document.getElementById("drawingBoard").appendChild(tile);
                };                 
            };          
           
            //Create a random color function and call it for each tile
            function randomColor(){                      
                    let red = Math.floor(Math.random() * 255);
                    let green = Math.floor(Math.random() * 255);
                    let blue = Math.floor(Math.random() * 255);
                    return `rgb(${red}, ${green}, ${blue})`;
            }
