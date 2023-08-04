let slideGallery = document.getElementById(`slide-bar`)

async function slide() {
    slideGoing = true // Status slide
    delaySlide = 2000 // 6 secs

    const buttonLeft = document.getElementById(`btn-slide-left`)
    const buttonRight = document.getElementById(`btn-slide-right`)

    // check size if screen sized
    // addeventlistener sized, slideWidth = 
    /*
    window.addEventListener('resize', function(event) {
        ...
    }, true);
    */

    for(i = 0; i < 5; i++) {

        // Slide size
        let slideLimit = document.getElementsByClassName(`slide-bar`)[0].getBoundingClientRect() // limits if screen change size
        let slideWidth = slideLimit.width // slide size width

        // Set where to scroll
        if(i === 0) slideWidth = 0
        if(i === 1) slideWidth = slideWidth * i
        if(i === 2) slideWidth = slideWidth * i
        if(i === 3) slideWidth = slideWidth * i
        if(i === 4) slideWidth = slideWidth * i

        slide = i

        // If click button, ongoing = false
        buttonLeft.onclick = function(){
            slideGoing = false;

            let slideLimit = document.getElementsByClassName(`slide-bar`)[0].getBoundingClientRect() // limits if screen change size
            let slideWidth = slideLimit.width // slide size width

            if(slide - 1 < 0) {
                slide = 4
            } else {
                slide -= 1;
            }
            console.log(slide)

            
            // scroll
            slideGallery.scrollTo({ top: 0, left: slideWidth * slide, behavior: 'smooth' })
        }

        buttonRight.onclick = function(){
            slideGoing = false;

            let slideLimit = document.getElementsByClassName(`slide-bar`)[0].getBoundingClientRect() // limits if screen change size
            let slideWidth = slideLimit.width // slide size width

            if(slide + 1 > 4) {
                slide = 0
            } else {
                slide += 1;
            }
            console.log(slide)

            // scroll
            slideGallery.scrollTo({ top: 0, left: slideWidth * slide, behavior: 'smooth' })
        }


        if(i === 4) {
            i = -1
        }
        if(!slideGoing) {
            console.log(`slide:`,slideGoing)
            break
        } else {
            // Scroll if slideGoing = true
            slideGallery.scrollTo({ top: 0, left: slideWidth, behavior: 'smooth' })
            await new Promise(delay => setTimeout(delay, delaySlide))
        }
    }
}
slide()