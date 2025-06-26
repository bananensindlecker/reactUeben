//function in einer function

function outerFunction() {
    let message = "Hallo!";

    function innerFunction() {
        console.log(message);
    }
    innerFunction();
}

outerFunction();




function createCounter() {
    let count = 0;//durch die außere function wird nicht jedes mal der counter resetted, und count ist immer noch sicher in der function gespeichert

    function increment() {
    count++;
    console.log("count increased to "+count);
    }

    function getCount() {
        return count;
    }

    return{increment,getCount};
}



const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

const counter2 = createCounter();

counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();

console.log(counter.count);//kann nicht angezeigt werden
console.log(counter.getCount());



function newScore() {
    let score = 0;

    function scoreIncrease(points) {
        score = score +points;
        console.log(`+${points}pts`);
    }

    function scoreDecrease(points) {
        score = score -points;
        console.log(`-${points}pts`);
    }
    function getScore() {
        return score;
    }
    return {scoreIncrease, scoreDecrease,getScore}

}

const playerOnesScore = newScore();

playerOnesScore.scoreIncrease(15);
console.log(playerOnesScore.getScore());


playerOnesScore.scoreDecrease(15);
console.log(playerOnesScore.getScore());