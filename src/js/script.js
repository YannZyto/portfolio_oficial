function drop() {

    let menu = document.getElementById('nav-menu');
    let dropbt = document.getElementById('drop-button')

    if (menu.className === 'nav-menu') {
        menu.className += ' nav-drop'; 
        dropbt.innerHTML = '&#9776;&uarr;'
    } else {
       menu.className = 'nav-menu';
       dropbt.innerHTML = '&#9776;&darr;'
    }
}