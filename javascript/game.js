$(document).ready(function () {
  var yourTotal = 0;
  wins = 0;
  losses = 0;
  var crystals;
  var random;

  //images
  function crystalGen() {
    return {
      picture1: {
        points: Math.floor(Math.random() * 12 + 1),
        imageURL:
          "https://contestimg.wish.com/api/webimage/597a05621a6659088f14d979-large.jpg?cache_buster=b0ab2a0f7802cb8a0bc0738615dbe101"
      },
      picture2: {
        points: Math.floor(Math.random() * 12 + 1),
        imageURL:
          "https://cdn.shopify.com/s/files/1/0002/0502/9434/articles/reiki_stones_1512x.jpg?v=1555675313"
      },
      picture3: {
        points: Math.floor(Math.random() * 12 + 1),
        imageURL:
          "https://s7e5a.scene7.com/is/image/waitrose/CellarProductDetailMainImage/017830_a_louis-roederer-cristal"
      },

      picture4: {
        points: Math.floor(Math.random() * 12 + 1),
        imageURL:
          "https://www.teetee.eu/app/uploads/2015/03/design_201309194711.jpg"
      }
    };
  }
  function startGame() {
    yourTotal = 0;
    crystals = crystalGen();
    // Generate a random number
    // Number should be should be between 19 - 120
    random = Math.floor(Math.random() * 120 + 19);
    console.log("random no: " + random);
    //display random no on to the screen
    $("#randomNumber").text(random);
  }
  // Function to render our crystals to the page.
  function displayCrystalsOnScreen() {
    console.log(crystals)
    // displaying images on to the screen buy creating the img tags and appending them to the crystals div on the html page
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageURL);
      crystalDiv.append(crystalImg);
      $("#crystals").append(crystalDiv);
    }
  }
  startGame();
  displayCrystalsOnScreen();
  // Here we create an on.click event for the crystals.
  $(".crystals-button").on("click", function (event) {
    // Update our "current guess" number and re-render it.
    updateYourTotal($(this));
    renderMatchingNumber();

    // Check to see if we have won or lost.
    // If our current guess number equals the target number..
    if (yourTotal === random) {
      // Increment wins, restart the game, and update the page.
      wins++;
      startGame();
      updateWebPage(true);
    }
    // If our guess number exceeded our target number...
    else if (yourTotal > random) {
      // Increment losses, restart the game, and update the page.
      losses++;
      startGame();
      updateWebPage(false);
    }
  });
  function updateYourTotal(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    yourTotal = yourTotal + crystals[crystal.attr("data-name")].points;
  }
  // display yourTotal on to the screen
  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourTotal);
    // first clear the targetScore div 
    $("#targetScore").html();
    $("#targetScore").html(scoreNumDiv);
  }
  function updateWebPage(didUserWin) {
    $("#satus-message").empty();

    if (didUserWin == true) {
      // Show victory message, restart the game, and render the new "current guess" number.
      $("#satus-message").text("You won!!");
      startGame();
      renderMatchingNumber();
    }
    else if (didUserWin == false) {
      $("#satus-message").text("You lost!!");
      startGame();
      renderMatchingNumber();
    }
    // display wins and losses on to the screen
    $("#win-display").text(Wins);
    $("#losses-display").text(Losses);

  }
  // Global vars
  // Random number has to be between 1 - 12

  // function reset() {
  //   Random = Math.floor(Math.random() * 101 + 19);
  //   console.log(random);
  //   $("#randomNumber").text(random);
  //   num1 = Math.floor(Math.random() * 12 + 1);
  //   num2 = Math.floor(Math.random() * 12 + 1);
  //   num3 = Math.floor(Math.random() * 12 + 1);
  //   num4 = Math.floor(Math.random() * 12 + 1);
  //   userTotal = 0;
  //   $("wins").text(userTotal);
  // }
  //   //adds the wins to the userTotal
  //   function smile() {
  //     alert("You won!");
  //     wins++;
  //     $("wins").text(wins);
  //     reset();
  //   }
  //   //addes the losses to the userTotal
  //   function frown() {
  //     alert("You lose!");
  //     losses++;
  //     $("").text(losses);
  //     reset();
  //   }
  //   //sets up click for jewels
  //   $("picture1").on("click", function() {
  //     userTotal = userTotal + num1;
  //     console.log("Your Total Score:= " + userTotal);
  //     $("#finalTotal").text(userTotal);
  //     //sets win/lose conditions
  //     if (userTotal == Random) {
  //       alert("You Win!");
  //     } else if (userTotal > Random) {
  //       alert("You Lost.");
  //     }
  //   });
  //   $(newFunction()).on("click", function() {
  //     userTotal = userTotal + num2;
  //     console.log("New userTotal= " + userTotal);
  //     $("#finalTotal").text(userTotal);
  //     if (userTotal == Random) {
  //       alert("You Win!");
  //     } else if (userTotal > Random) {
  //       alert("You Lost.");
  //     }
  //   });
  //   $("picture3").on("click", function() {
  //     userTotal = userTotal + num3;
  //     console.log("New userTotal= " + userTotal);
  //     $("Your Total Score").text(userTotal);
  //     //sets win/lose conditions
  //     if (userTotal == Random) {
  //       alert("You Win!");
  //     } else if (userTotal > Random) {
  //       alert("You Lost.");
  //     }
  //   });
  //   $("picture4").on("click", function() {
  //     userTotal = userTotal + num4;
  //     console.log("New userTotal= " + userTotal);
  //     $("#finalTotal").text(userTotal);

  //     if (userTotal == Random) {
  //       alert("You Win!");
  //     } else if (userTotal > Random) {
  //       alert("You Lost.");
  //     }
  //   });
});




