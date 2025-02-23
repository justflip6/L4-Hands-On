
function checker() {
    let num = parseInt(document.getElementById("number").value);

    if (isNaN(num)) {
        document.getElementById("result").innerText = "Enter a valid number.";
    } else if (num % 2 === 0) {
        document.getElementById("result").innerText = "Even";
    } else {
        document.getElementById("result").innerText = "Odd";
    }
}

console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
