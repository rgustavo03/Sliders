let slideGallery = document.getElementById(`slide-bar`)

async function slide() {
    slideGoing = true // Status slide
    delaySlide = 6000 // 6 secs

    const buttonLeft = document.getElementById(`btn-slide-left`)
    const buttonRight = document.getElementById(`btn-slide-right`)
    let slideWidth = 0;

    for(i = 0; i < 5; i++) {
        console.log(i)

        function checkSize() {
            let slideLimit = document.getElementsByClassName(`slide-bar`)[0].getBoundingClientRect() // limits if screen change size
            slideWidth = slideLimit.width // slide size width
        }
        checkSize()

        slide = i

        // If click button, ongoing = false
        buttonLeft.onclick = function(){
            slideGoing = false;
            checkSize()

            if(slide - 1 < 0) {
                slide = 4
            } else {
                slide -= 1
            }
            console.log(slide)
            i = slide
            // scroll
            slideGallery.scrollTo({ top: 0, left: slideWidth * slide, behavior: 'smooth' })
        }
        buttonRight.onclick = function(){
            slideGoing = false
            checkSize()

            if(slide + 1 > 4) {
                slide = 0
            } else {
                slide += 1
            }
            console.log(slide)
            i = slide
            // scroll
            slideGallery.scrollTo({ top: 0, left: slideWidth * slide, behavior: 'smooth' })
        }


        window.addEventListener('resize', function(event) {
            checkSize()
            slideGallery.scrollTo({ top: 0, left: slideWidth * slide })
        }, true);


        slideGallery.scrollTo({ top: 0, left: slideWidth * slide, behavior: 'smooth' })
        
        await new Promise(delay => setTimeout(delay, delaySlide));

        if(i === 4) {
            i = -1
        }
        if(!slideGoing) {
            // break if slideGoing = false
            break
        } else {
            // continue if slideGoing = true
            continue
        }
    }
}
slide()
