document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const Dropdowncontent = document.querySelector('.Dropdown-content');

    dropdown.addEventListener('click', function () {
        Dropdowncontent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            if (Dropdowncontent.classList.contains('show')) {
                Dropdowncontent.classList.remove('show');
            }
        }
    })
});


document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        const dropbtn = document.querySelector('.dropbtn');
        const mainDropdown = document.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            mainDropdown.classList.toggle('show');
        });

        const subDropBtns = document.querySelectorAll('.sub-dropbtn');
        subDropBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const submenu = this.nextElementSibling;
                submenu.classList.toggle('show');
            });
        });

        // Close all dropdowns when clicking outside
        window.addEventListener('click', function () {
            mainDropdown.classList.remove('show');
            document.querySelectorAll('.sub-dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
        });
    }
});
