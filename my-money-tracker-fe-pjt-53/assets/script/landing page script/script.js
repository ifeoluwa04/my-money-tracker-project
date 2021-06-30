// let email2 = document.querySelector(".email-2");
// let enterEmail = document.getElementById('enter-email');
// let submitSubscriptionInfo = document.getElementsByClassName('sub-btn');


// NAV BAR WITH NEW NAV BAR

const menu = document.querySelector('.fi-menu');
const exitMenu = document.querySelector('.fl-x');
const webViewNav = document.querySelector('nav')
const mobileViewNav = document.querySelector('.newnav')



menu.addEventListener("click", () => {
    if(menu === false){

    return false
    }
    else{
        webViewNav.style.display = "none"
        mobileViewNav.style.display ="block"

        return true;
    }

}); 

exitMenu.addEventListener("click", () => {
    if(exitMenu === false){
        return false
    }
    else{
        mobileViewNav.style.display = "none"
        webViewNav.style.display = "flex"
        return true;
    }
})

// mobileViewNav.addEventListener('resize', () => {
// mobileViewNav.style.display = "none"
// })
