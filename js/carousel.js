const carousel = document.querySelectorAll(".carousel>input");
const carouselContainer = document.querySelector('.carousel');

var time;
let mc = new Hammer.Manager(carouselContainer);

function timer() {
    time = setInterval(function () {
        for (var i = 0; i != carousel.length; i++) {
            if (carousel[i].checked) {
                try {
                    carousel[i + 1].checked = true;
                } catch {
                    carousel[0].checked = true;
                }
                break;
            }
        }
    }, 6000);
}

carousel.forEach(function (button) {
    button.addEventListener("click", function () {
        clearInterval(time);
        timer();
    });
});

timer();

mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }));

mc.on("swipeleft swiperight", function (ev) {
    const activeInput = document.querySelector('.carousel>input:checked');

    if (ev.type === "swiperight" && activeInput) {
        const activeLabel = document.querySelector(`label[for="${activeInput.id}"]`);
        if (activeLabel && activeLabel.previousElementSibling) {
            activeLabel.previousElementSibling.click();
        } else {
            document.querySelector('.carousel__prev label:last-child').click();
        }
    } else if (ev.type === "swipeleft" && activeInput) {
        const activeLabel = document.querySelector(`label[for="${activeInput.id}"]`);
        if (activeLabel && activeLabel.nextElementSibling) {
            activeLabel.nextElementSibling.click();
        } else {
            document.querySelector('.carousel__next label:first-child').click();
        }
    }
});
