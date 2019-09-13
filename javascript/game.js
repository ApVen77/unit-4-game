
//start game
$(document).ready(function () {
    var yourTotal = 0
    wins=0
    losses=0
    var crystals;

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
    function startGame(){
        yourTotal = 0;
        crystals = crystalGen();
        var randomNumber = Math.floor(Math.random() * 120 + 19) //pick a number between 19-120
        console.log("random num: " +randomNumber);
        $("#randomNumber").text(randomNumber);

    }
    startGame();
    renderCrystals();
    function renderCrystals(){
        for(var key in crystals){
            var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
            var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageURL);
            crystalDiv.append(crystalImg);
            $("#crystals").append(crystalDiv);
        }
    }


    $('.numsNeeded').on('click', function (event) {
        //generate random number
        


        //$('#girl-crystal') on('click', function(Math.floor(Math.random() * 20 + 1))
        var picture2 = Math.floor(Math.random() * 20 + 1)
        var picture3 = Math.floor(Math.random() * 20 + 1)
        var picture4 = Math.floor(Math.random() * 20 + 1)

        var userTotal = 0;
        var wins = 0;
        var losses = 0;
        //declaring score variables




        //check winnings


        //game reset 
        random = Math.floor(Math.random() * 20 + 1);
        console.log(random)
        $('#randomNumber').text(random)


        $('#targetScore')

        //setting crystals 
        // $(crystalOne).on('click', function () {
        //     if (userTotal == randomNumber) {
        //         console.log('')
        //     }




        // })
    })
})