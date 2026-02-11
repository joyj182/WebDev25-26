// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
    let grade1 = parseFloat(document.getElementById("g1").value);
    let grade2 = parseFloat(document.getElementById("g2").value);
    let grade3 = parseFloat(document.getElementById("g3").value);
    let avg = (grade1 + grade2 + grade3)/3;

    let op = document.getElementById("output");
    op.innerHTML=`The average of all 3 grades is: ${avg}`;

}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);

    let op2 = document.getElementById("output2");
    let m = (y2-y1)/(x2-x1);
    op2.innerHTML = `The slope between points (${x1}, ${y1}) and is (${x2}, ${y2}): ${m}`;

}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function BMI(){
    let hei = parseFloat(document.getElementById("h").value);
    let wei = parseFloat(document.getElementById("w").value);
    let bmi = wei/hei**2;

    let op3 = document.getElementById("output3");
    op3.innerHTML=`The BMI is: ${bmi}`;
    
}
