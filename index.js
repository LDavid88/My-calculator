document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buttons').forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })
})