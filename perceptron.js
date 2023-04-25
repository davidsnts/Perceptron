class Perceptron {
    weights = [0,0];

    constructor(){
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] = random(-1,1);            
        }
    }

    guess(inputs){
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            
            sum += inputs[i] * this.weights[i];                        
        }

        const output = this.sign(sum);

        return output;
    }

    sign(number){
        return number >=0 ? 1 : -1;
    }

    
    

}