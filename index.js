let pass = document.getElementById("pass");
let indicator = document.querySelectorAll(".indi");

let letters = [];
let numbers = [];
let symbols = [];

function dataset(start, end, mass) {
    for(let i = start; i <= end; i++) {

        if(mass == letters) mass.push(String.fromCharCode(i).toLocaleLowerCase());
        if(mass == numbers) mass.push( +String.fromCharCode(i));
        if(mass == symbols) {
            if(letters.includes(String.fromCharCode(i)) == false && numbers.includes(+String.fromCharCode(i)) == false) {
                mass.push(String.fromCharCode(i));
            }
        }
    }
}


dataset(65, 90, letters);
dataset(48, 57, numbers);
dataset(64, 175 , symbols)


pass.addEventListener("keydown", (e) => {
    let passValue = pass.value.split('');
    let numbersStatus = 0;
    let lettersStatus = 0;
    let symbolsStatus = 0;
    let status = 0;

    for(let i of passValue) {
        // Includes
        if(letters.includes(i)) lettersStatus = 1;
        if(numbers.includes(+i)) numbersStatus = 1;
        if(symbols.includes(i)) symbolsStatus = 1;

        // Status
        if(numbersStatus || lettersStatus || symbolsStatus) status = 1;
        if(numbersStatus && lettersStatus)  status = 2;
        if(numbersStatus && lettersStatus && symbolsStatus == 1) status = 3;
    }
  

    for(let i = 0; i <= status - 1; i++) {
        if(status == 3) {
            indicator[i].style["background-color"] = "green";
        }

        if(status == 2) {
            indicator[i].style["background-color"] = "yellow"
            indicator[2].style["background-color"] = "grey"
        }

        if(status == 1) {
            indicator[i].style["background-color"] = "red"  
            indicator[1].style["background-color"] = "grey"
            indicator[2].style["background-color"] = "grey"
        }
}

let i = new Promise((resolve, reject) => {
if(status == 0) resolve(10);

}).then((r) => {
      for(let i = 0; i <= indicator.length - 1; i++){
        console.log(indicator[i])
        indicator[i].style["background-color"] = "grey"
      } 
});

});