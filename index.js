var btn = Array.from(document.getElementsByClassName('btn'))
var display = document.getElementById('display')
var num1
var num2
var operator

// console.log(typeof(parseInt('10')))

function work(operator){
    if(operator=='+')
    {
        return num1+num2
        
    }

    else if(operator=="-"){
    
        return num1-num2
    }

    else if(operator=="×")
    {
        return num1*num2
    }

    else if(operator=="÷")
    {
        return num1/num2
    }
}
function checker(element){
    {element.addEventListener('click', function(){
        if(element.innerText=='Clear'){
            display.innerText = ""
            operator = undefined

        }
        else if(element.innerText=='+'){
            display.innerText += " ".concat(element.innerText)

            num1 = display.innerText.split('+')
            num1 = parseInt(num1[0])
            operator='+'
      }
        else if(element.innerText=='-'){
            display.innerText += " ".concat(element.innerText)
            num1 = display.innerText.split('-')
            num1 = parseInt(num1[0])
            operator="-"
        }
        else if(element.innerText=='×'){
            display.innerText += " ".concat(element.innerText)
            num1 = display.innerText.split('×')
            num1 = parseInt(num1[0])
            operator="×"
        }
        else if(element.innerText=='÷'){
            display.innerText += " ".concat(element.innerText)
            num1 = display.innerText.split('÷')
            num1 = parseInt(num1[0])
            operator="÷"
        }
        else if(element.innerText=="="){
            num2 = display.innerText
            num2 = num2.split(operator)
            num2 = parseInt(num2[1])
            display.innerText = work(operator)
            
        }
        else{
            display.innerText = display.innerText.concat(element.innerText)

        }
    })}
}

btn.forEach(element => {
   
        checker(element)
});