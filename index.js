document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buttons').forEach((button) => {
        button.addEventListener('click', () => {
            let display = document.querySelector('.screen');

            if (button.value == "AC") {
                display.value = "";
            }
        })
    })
})