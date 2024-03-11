const splash = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 1000)

    setTimeout(() => {
        splash.remove();
    }, 2000)
})