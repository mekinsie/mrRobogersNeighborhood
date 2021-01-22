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
    else if (i % 10 == 1) {
      result.push(i + " ");
      result[i] = "Beep! "
    }
    else if (i % 10 ==2) {
      result.push(i + " ");
      result[i] = "Boop! "
    }
    else if (i % 10 ==3) {
      result.push(i+ " ");
      result[i] = "Won't you be my neighbor? "
    }
    // else if (i % 30 ) {
    //   result.push(i+ " ");
    //   result[i] = "Won't you be my neighbor? "
    // }
    // else if (i % 20 ) {
    //   result.push(i+ " ");
    //   result[i] = "Boop! "
    // }
    // else if (i % 10 ) {
    //   result.push(i+ " ");
    //   result[i] = "Beep! "
    // }
    else if (i != 1) {
    result.push(i+ ", ");
    }

    }
    $("#output").append(result);
    console.log(result);
  });
  
});