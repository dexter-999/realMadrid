let madrid = document.querySelector('.span2');
let barca = document.querySelector('.span3');
window.onload = function(){
     i = 1 
     k = 1 
    real =  setInterval(function(){
        madrid.innerHTML = i++

      if(i==16){
        clearInterval(real);
      }
    },1000)

    fc =  setInterval(function(){
        barca.innerHTML = k++

      if(k==6){
        clearInterval(fc);
      }
    },1000)


    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
  
    const finalValue = 15;
    const finale2 = 13;
    const fina3 = 5;
  
    let firstValue = 0;
    let firstValue2 = 0;
    let firstValue3 = 0;
  
    const incriment = Math.ceil(finalValue /  15);
    const incriment2 = Math.ceil(finale2 /  15);
    const incriment3 = Math.ceil(fina3 /  15);
    setInterval(function(){
        firstValue+=incriment;
        firstValue2+=incriment2;
        firstValue3+=incriment3;
        
        if(firstValue >= finalValue && firstValue2 >= finale2 && firstValue3 >= fina3 ){
            firstValue = finalValue;
            firstValue2 = finale2;
            firstValue3 = fina3;
        }
  
        counter1.textContent = firstValue;
        counter2.textContent = firstValue2;
        counter3.textContent = firstValue3;
    },90);
};
