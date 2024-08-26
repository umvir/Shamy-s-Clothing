const bar = document.getElementById('bar');
const closeN = document.getElementById('closeN')
const nav = document.getElementById('navbar')


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closeN){
    closeN.addEventListener('click', () => {
        nav.classList.remove('active');
    })    
}
