//ques4
function outerFunction(length){
    function innerFunction(breadth){
        console.log(`Area of rectangle: ${length*breadth}`);
    }
    innerFunction(3);
}
outerFunction(2);

//ques5
function outerFunc(num){
    console.log(`Value before inner function is called is : ${num}`);
    function innerFunc(){
        num++
        console.log(`Value after inner function is called is: ${num}`);
    }
    innerFunc();
}
outerFunc(1);
