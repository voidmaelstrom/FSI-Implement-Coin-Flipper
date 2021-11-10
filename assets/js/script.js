// TODO: Declare any global variables we need
const headsCounterOnPage = document.getElementById('heads')
const tailsCounterOnPage = document.getElementById('tails')

let totalHeads = 0
let totalTails = 0
let totalFlipped = totalHeads + totalTails // OR 0 and increment by one every time
let tailsPercentage = 0
let headsPercentage = 0
let totalPercentage = 0
/*let images = ['./assets/images/penny-heads.jpg','./assets/images/penny-tails.jpg']*/
let images = [{
    imagePath: "./assets/images/penny-heads.jpg",
    message: "You flipped heads!",
    side: "heads",
},
{
    imagePath: "./assets/images/penny-tails.jpg",
    message: "You flipped tails!",
    side: "tails"
}]

let defaultMessage = "Let's Get Rolling!"

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', function() {
        let randomImage = images[Math.floor(Math.random()* images.length)];
        document.querySelector("#image").setAttribute("src", randomImage.imagePath)

        if(randomImage.side === "heads") {
            totalHeads++
            totalFlipped++
            document.getElementById('heads').textContent = totalHeads
            document.querySelector('.message-container').textContent = randomImage.message
        } else {
            if(randomImage.side === "tails") {
                totalTails++
                totalFlipped++
                document.getElementById('tails').textContent = totalTails
                document.querySelector('.message-container').textContent = randomImage.message
            }
        }

        headsPercentage = Math.round((totalHeads * 100) / totalFlipped)
        tailsPercentage = Math.round((totalTails * 100) / totalFlipped)

        document.getElementById('heads-percent').textContent = headsPercentage + '%'
        document.getElementById('tails-percent').textContent = tailsPercentage + '%'
    })

        document.getElementById("clear").addEventListener("click", function() {
            totalHeads = 0
            totalTails = 0
            headsPercentage = 0 + "%"
            tailsPercentage = 0 + "%"
            totalFlipped = 0

            document.getElementById("heads").textContent = totalHeads
            document.getElementById("tails").textContent = totalTails
            document.getElementById("tails-percent").textContent = tailsPercentage
            document.getElementById("heads-percent").textContent = headsPercentage
            document.querySelector('.message-container').textContent = defaultMessage
        })

})