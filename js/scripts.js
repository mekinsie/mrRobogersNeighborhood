// Busniess Logic



//User Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number = parseInt($("input#number").val());
    let result = [];
    console.log(number);
    for (let i=0; i <= number; i ++) {
    
    if (i === 0) {
      result.push(i + " ");
    }
    else if (i === 1) {
      result.push(i + " ");
      result[i] = "Beep! "
    }
    else if (i ===2) {
      result.push(i + " ");
      result[i] = "Boop! "
    }
    else if (i ===3) {
      result.push(i+ " ");
      result[i] = "Won't you be my nieghbor? "
    }
    else if (i != 1) {
    result.push(i+ ", ");
    }

    }
    $("#output").append(result);
    console.log(result);
  });
  
});