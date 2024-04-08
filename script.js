const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTittle = document.querySelector('.login-tittle-text');
const userEmail = document.querySelector('.user-email');
const inputEmail = document.querySelector('.email');
btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout( () => passwordInput.focus(),500);
    loginTittle.innerHTML = "Welcome"
    userEmail.innerHTML = inputEmail.value;
    inputEmail.focus();
};
btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTittle.innerHTML = "Login"
    userEmail.innerHTML = "Please login to use this platform";
    inputEmail.focus();
};
checkboxPass.onclick = () => {
    if(checkboxPass.checked){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
}