// Busniess Logic



//User Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number = $("input#number").val();
    $("#result").append(number);
  });
  console.log(number);
});

//let newArray = number
//for (i=0; i <= number; i ++ )