window.addEventListener('DOMContentLoaded', () => {
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
        console.log('sliderMenuShow');
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #8E7424; color: #EFFEF7;');
        //list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #8E7424');
        list[0].parentNode.setAttribute('style', 'visibility: unset;');
        let topAtrr = 0;//82;
        for (var i = 0; i < list.length; i++) {
            list[i].setAttribute('style', `top: ${topAtrr}px;`);
            topAtrr += 69;
        }
    }

    function sliderMenuRemove(list) {
        console.log('sliderMenuRemove');
        for (var i = list.length-1; i >= 0; i--) {
            list[i].setAttribute('style', 'top: 0px;');
        }
        list[0].parentNode.setAttribute('style', 'opacity: 0;');
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #effef7')

    }
});