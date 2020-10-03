window.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementsByClassName('header_menu-list');

    for (var i = 0; i < menuList.length; i++) {
        let liCollect = menuList[i].getElementsByTagName('li');
        menuList[i].addEventListener('mouseover', (event) => {
            let curEl = event.target.closest('.header_menu-list');
            if (!curEl) return;
            sliderMenuShow(liCollect);
        });
        menuList[i].addEventListener('mouseout', (event) => {
            //console.log(event.target);
            let curEl = event.target.closest('.header_menu-list');
            if (!curEl) return;
            sliderMenuRemove(liCollect);
        });
    }

    function sliderMenuShow(list) {
        //console.log();
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #8E7424;')
        list[0].parentNode.setAttribute('style', 'visibility: unset;');
        let topAtrr = 62;
        for (var i = 0; i < list.length; i++) {
            list[i].setAttribute('style', `top: ${topAtrr}px;`);
            topAtrr += 69;
        }
    }

    function sliderMenuRemove(list) {
        //console.log('sliderMenuRemove');
        for (var i = list.length-1; i >= 0; i--) {
            list[i].setAttribute('style', 'top: 61px;');
        }
        list[0].parentNode.setAttribute('style', 'opacity: 0;');
        list[0].parentNode.previousElementSibling.setAttribute('style', 'background: #effef7')

    }
});