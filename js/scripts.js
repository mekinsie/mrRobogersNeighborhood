// Business Logic
function numberMessage(number) {
  let array = [];
  let result = [];
  for (let i=0; i <= number; i ++) {
    array.push(i.toString());
    if (array[i].includes("3")) {
      result.push("Won't you be my neighbor? ");
    }
    else if (array[i].includes("2")) {
      result.push("Boop! ");
    }
    else if (array[i].includes("1")) {
      result.push("Beep! ");
    }
    else {
      result.push(array[i]+ ", ");
    }      
  } 
  return result
}

//UI Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number =$("input#number").val();
    
    newResult = numberMessage(number);
    $(".container2").show();
    $("#output").empty();
    $("#output").append(newResult);
  });
});