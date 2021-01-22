// Busniess Logic



//User Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    
    let number =$("input#number").val();
    let result = [];

    for (let i=0; i <= number; i ++) {

      // if (i === "3") {
      //   result.push("Wont you be my neighbor? ");
      // }
      
      // else if (i === "2") {
      //   result.push("Beep! ");
      // }

      // else if (i=== "1") {
      //   result.push("Boop! ")
      // }

      if (i === 0) {
          result.push(i + " ");
        }
          else if (i % 10 == 1) {
              result.push("Beep! ");
            }
            else if (i % 10 == 2) {
                result.push("Boop! ");
              }
              else if (i % 10 == 3) {
                  result.push("Won't you be my neighbor? ")
                }
                else if (i != 1) {
                  result.push(i+ ", ");
                }
                
                
              }
              $(".container2").show();
              $("#output").append(result);
              console.log(result);
            });
          });