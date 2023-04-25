let perceptron;

function setup(){
    createCanvas(550, 550);
    perceptron = new Perceptron();


    const inputs = [-1, 0.5];
    const guess = perceptron.guess(inputs);
    console.log(`resultado ${guess}`);
}

function draw(){
    
}