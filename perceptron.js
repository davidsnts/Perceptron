class Perceptron {
    weigths = [];
    lr = 0.1;

    constructor(numberWeigths){
        this.weigths = new Array(numberWeigths);
        for (let index = 0; index < this.weigths.length; index++) {
            this.weigths[index] = random(-1,1);            
        }
    }

    guess(inputs){
        let sum = 0;

        //Y = x1 * w1 + x2 * w2
        for (let i = 0; i < this.weigths.length; i++) {            
            sum += inputs[i] * this.weigths[i];                        
        }

        const output = this.sign(sum);

        return output;
    }

    train(inputs, target){
        const guess = this.guess(inputs);
        const error = target - guess;

        for (let i = 0; i < this.weigths.length; i++) {           
            this.weigths[i] += error * inputs[i] * this.lr;            
        }
    }
    //função de ativação
    sign(number){
        return number >=0 ? 1 : -1;
    }

    
    guessY(x){
        const w0 = this.weigths[0];
        const w1 = this.weigths[1];
        const w2 = this.weigths[2];
        return -(w2/w1) - (w0/w1) * x;        
    }

}