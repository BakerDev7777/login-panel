const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const bntPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add ('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove ('active');
};

bntPopup.onclick = () => {
    wrapper.classList.add ('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove ('active-popup');
    wrapper.classList.remove ('active');
};