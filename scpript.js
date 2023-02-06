// for login form 
let loginEmoji = document.querySelector('#login');
let login_form = document.querySelector('.login-form');

loginEmoji.addEventListener('click' , function(){
    login_form.classList.add('active')
    navbar.classList.remove('active')


});

let fas_fa_times = document.querySelector('#fas_fa_times');
fas_fa_times.addEventListener('click' , function(){
    login_form.classList.remove('active');
});

let menu_bar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu_bar.addEventListener('click' , () =>{
    console.log('clicked on menu bar')
    navbar.classList.toggle('active')

    if (menu_bar.classList.contains('fa-bars')) {
        menu_bar.classList.replace( 'fa-bars' , 'fa-times' )
    } else {
        menu_bar.classList.replace( 'fa-times' , 'fa-bars'  )

    }
});

// on scroll
window.onscroll=()=>{
    login_form.classList.remove('active');
    //navbar.classList.remove('active')

}