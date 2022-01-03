var evaluateString = ""
var btn = Array.from(document.getElementsByClassName('btn'))
var display = document.getElementById('display')
var num1
var num2
var operator
var plus = "+"
var minus = "-"
var divide = "/"
var multiply = "*"

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
            evaluateString = ""
            operator = undefined

        }
        else if(element.innerText=='+'){
            display.innerText += " ".concat(element.innerText)
            display.innerText += "\xa0"
            evaluateString += plus

            num1 = display.innerText.split('+')
            if(num1[0].includes('.')){
                num1 = parseFloat(num1[0])
            }
            else{
                num1 = parseInt(num1[0])

            }
            operator='+'
      }
        else if(element.innerText=='-'){
            display.innerText += " ".concat(element.innerText)
            display.innerText += "\xa0"
            evaluateString += minus



            num1 = display.innerText.split('-')
            if(num1[0].includes('.')){
                num1 = parseFloat(num1[0])
            }
            else{
                num1 = parseInt(num1[0])

            }
            operator="-"
        }
        else if(element.innerText=='×'){
            display.innerText += " ".concat(element.innerText)
            display.innerText += "\xa0"
            evaluateString += multiply



            num1 = display.innerText.split('×')
            if(num1[0].includes('.')){
                num1 = parseFloat(num1[0])
            }
            else{
                num1 = parseInt(num1[0])

            }
            operator="×"
        }
        else if(element.innerText=='÷'){
            display.innerText += " ".concat(element.innerText)
            display.innerText += "\xa0"
            evaluateString += divide



            num1 = display.innerText.split('÷')
            if(num1[0].includes('.')){
                num1 = parseFloat(num1[0])
            }
            else{
                num1 = parseInt(num1[0])

            }
            operator="÷"
        }
        else if(element.innerText=="="){
            num2 = display.innerText
            num2 = num2.split(operator)
            try{
            if(num2[1].includes('.')){
                num2 = parseFloat(num2[1])
            }
            else{
                num2 = parseInt(num2[1])

            }
        }
        catch(err){
            alert('Invalid Argument Given')
            display.innerText = ""
        }   
        if(eval(evaluateString)==undefined){
                display.innerText=""
        }else{
            display.innerText = eval(evaluateString)
        }
        
            }
            
        
        else{
            display.innerText = display.innerText.concat(element.innerText)
            evaluateString += element.innerText


        }
    })}
}

btn.forEach(element => {
   
        checker(element)
});