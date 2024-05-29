const from_box = document.querySelector('.from_box');
const register = document.querySelector('.register');
const btnlogin = document.querySelector('.btnlogin-popup');
const Login = document.querySelector('.Login');
const close = document.querySelector('.close');

register.addEventListener('click', ()=> {
    from_box.classList.add('active');
});

Login.addEventListener('click', ()=> {
    from_box.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
    from_box.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    from_box.classList.remove('active-popup');
});
