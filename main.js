let nav = document.querySelector('nav'), searchForm = document.querySelector('.search-form'), shopCart = 
    document.querySelector('.shop-cart'), loginForm = document.querySelector('.login-form')

window.onscroll = () => {
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    shopCart.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#menu-but').onclick = () => {
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    shopCart.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#search-but').onclick = () => {
    searchForm.classList.toggle('active');
    nav.classList.remove('active');
    shopCart.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#cart-but').onclick = () => {
    shopCart.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#login-but').onclick = () => {
    loginForm.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    shopCart.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    effect: "cards",
    loop: true,
    grabCursor: true
});

var swiper = new Swiper(".review-slider", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 16,
    shadowScale: 0.84
    }
});