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