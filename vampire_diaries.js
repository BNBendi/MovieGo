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

document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.querySelector('.first-dropdown-btn');
    var dropdownContent = document.querySelector('.first-dropdown-content');

    dropdownBtn.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdownContent.classList.remove('active');
        }
    });
});
