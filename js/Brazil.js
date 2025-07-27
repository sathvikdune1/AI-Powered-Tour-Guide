function Menu() {
    var names = document.querySelectorAll('.names');
    names.forEach(function(name) {
        name.classList.toggle('active');
    });
}