document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(button => {
        button.addEventListener('click', function () {
            const currentDropdown = this.parentElement;
            const allDropdowns = document.querySelectorAll('.dropdown');

            allDropdowns.forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove('active');
                }
            });

            currentDropdown.classList.toggle('active');
        });
    });
});