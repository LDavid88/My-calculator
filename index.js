document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buttons').forEach((button) => {
        button.addEventListener('click', () => {
            let display = document.querySelector('.screen');

            if (button.value == "AC") {
                display.value = "";
            } else if (button.value == "DE") {
                display.value = display.value.toString().slice(0,-1);
            } else if (button.value == "=") {
                display.value = eval(display.value);
            }
        })
    })
})