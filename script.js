const screen = document.querySelector('#userInput')

// var x = screen.value
let x = ""

press = (num)=> {

    userInput.value += num
    x =userInput.value
}
solve = () => {
    userInput.value = eval(x)
    // console.log(x)
}
erase = () => {
    userInput.value = ""
}
singleErase = () => {
    
   userInput.value = [x].pop()
   
   
}


