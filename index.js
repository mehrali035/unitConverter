var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
 
feet.addEventListener('input',function(){
    var f = this.value;
    var multiple = f * 12;
    inch.value = multiple;
})

inch.addEventListener('input',function(){
    var i = this.value;
    var divide = i/12;
    if(!Number.isInteger(divide)){
        divide=divide.toFixed(2);
    };
    feet.value = divide;
})