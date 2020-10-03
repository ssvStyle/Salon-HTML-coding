window.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementsByClassName('header_menu-list');//header_menu

    const menu = document.getElementById('header_menu');


    menu.addEventListener('mouseover', (event) => {
        let target = event.target.closest('.header_menu-list');

        if (!target) return;

        sliderMenuShow(target.getElementsByTagName('li'));
    });

    menu.addEventListener('mouseout', (event) => {
        let target = event.target.closest('.header_menu-list');
        if (!target) return;
        sliderMenuRemove(target.getElementsByTagName('li'));
    });


    function sliderMenuShow(list) {
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #8E7424; color: #EFFEF7;')
        list[0].parentNode.setAttribute('style', 'visibility: unset;');
        let topAtrr = 82;
        for (var i = 0; i < list.length; i++) {
            list[i].setAttribute('style', `top: ${topAtrr}px;`);
            topAtrr += 69;
        }
    }

    function sliderMenuRemove(list) {
        for (var i = list.length-1; i >= 0; i--) {
            list[i].setAttribute('style', 'top: 82px;');
        }
        list[0].parentNode.setAttribute('style', 'opacity: 0;');
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #effef7')

    }
});