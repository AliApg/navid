const carousel = document.querySelectorAll(".carousel>input");
var time;

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
