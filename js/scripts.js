// Busniess Logic



//User Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number = parseInt($("input#number").val());
    let result = [];
    console.log(number);

    for (let i=0; i <= number; i ++) {
      result.push(i);
    }
    $("#output").append(result);
    console.log(result);
  });
  
});