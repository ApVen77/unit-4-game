$( document ).ready(function(){
    var Random=Math.floor(Math.random()*120+19)
    // Generate a random number
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    
    var picture1 = Math.floor(Math.random() * 12 + 1)
    var picture2 = Math.floor(Math.random() * 12 + 1)
    var picture3 = Math.floor(Math.random() * 12 + 1)
    var picture4 = Math.floor(Math.random() * 12 + 1)

    //images
    function crystalGen() {
        return {
            picture1: {
                points: Math.floor(Math.random() * 12 + 1),
                imageURL: 'https://contestimg.wish.com/api/webimage/597a05621a6659088f14d979-large.jpg?cache_buster=b0ab2a0f7802cb8a0bc0738615dbe101'
            },
            picture2: {
                points: Math.floor(Math.random() * 12 + 1),
                imageURL: "https://cdn.shopify.com/s/files/1/0002/0502/9434/articles/reiki_stones_1512x.jpg?v=1555675313"
            },
            picture3: {
                points: Math.floor(Math.random() * 12 + 1),
                imageURL: "https://s7e5a.scene7.com/is/image/waitrose/CellarProductDetailMainImage/017830_a_louis-roederer-cristal"
            },

            picture4: {
                points: Math.floor(Math.random() * 12 + 1),
                imageURL: "https://www.teetee.eu/app/uploads/2015/03/design_201309194711.jpg" 
            }

        };
    }

    // Global vars
    // Random number has to be between 1 - 12
   
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  
 
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        userTotal= 0;
        $('wins').text(userTotal);
        } 
  //adds the wins to the userTotal
  function smile(){
  alert("You won!");
    wins++; 
    $('wins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function frown(){
  alert ("You lose!");
    losses++;
    $('').text(losses);
    reset()
  }
  //sets up click for jewels
    $('picture1').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("Your Total Score:= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            alert ("You Win!");
          }
          else if ( userTotal > Random){
            alert("You Lost.");
          }   
    })  
    $(newFunction()).on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
      if (userTotal == Random){
        alert ("You Win!");
      }
      else if ( userTotal > Random){
        alert("You Lost.");
      }  
    })  
    $('picture3').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('Your Total Score').text(userTotal);
  //sets win/lose conditions
  if (userTotal == Random){
    alert ("You Win!");
  }
  else if ( userTotal > Random){
    alert("You Lost.");
  }  
    })  
    $('picture4').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
      if (userTotal == Random){
        alert ("You Win!");
      }
      else if ( userTotal > Random){
        alert("You Lost.");
      }  
    });   
  }); 


function newFunction() {
    return 'picture2';
}

