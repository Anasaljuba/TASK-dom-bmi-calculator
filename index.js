function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  
  // You are going to write the code here before the curly braces 👇🏻
  let BMIstatus = "hi"
  height = height/100
  calculateBMI = weight/(height*height)
  if (calculateBMI <18.5 ) {
    BMIstatus= "Underweight"
  } else if (calculateBMI >= 18.5 && calculateBMI <= 24.9 ) {
    BMIstatus= "Healthy Weight"

  } else if (calculateBMI >= 25 && calculateBMI <= 29.9 ) {
    BMIstatus = "Overweight"
  }else {
    BMIstatus = "Above Obesity"

  }
  let BMIage = BMIstatus
  
  if ( age <= 24 && calculateBMI <= 24  && calculateBMI >= 19) {
    BMIage= "NORMAL"
  } else if ( age <= 34 && calculateBMI <= 25 && calculateBMI >= 20) {
    BMIage= "NORMAL"

  } else if ( age <= 44 && calculateBMI <= 26 && calculateBMI >= 21) {
    BMIage= "NORMAL"
  }else if ( age <= 54 && calculateBMI <= 27 && calculateBMI >= 22){
    BMIage= "NORMAL"

  }else if ( age <= 64 && calculateBMI <= 28 && calculateBMI >= 23){
    BMIage= "NORMAL"
  }else if ( age >= 65 && calculateBMI <= 29 && calculateBMI >= 24){
    BMIage= "NORMAL"
  }
  
  alert("Your BMI is =" + calculateBMI +"\nand your BMI status is " + BMIstatus +"\nand your BMI age is " + BMIage
  )
  

}
