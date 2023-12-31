const nav = document.querySelector('.nav')
const nav_list = nav.querySelectorAll('li')
const total_nav_list = nav_list.length;
const all_section = document.querySelectorAll('.section');

function showSection(element){
    const current_active = document.querySelector('section.active');
    for(let i=0;i<total_nav_list;i++){
        all_section[i].classList.remove('active');
        all_section[i].classList.remove('back-section');
    }
    if(current_active!==null)
    current_active.classList.toggle('back-section');

    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#'+target).classList.toggle('active');
}

// const home_section = document.querySelector('#home');
// home_section.classList.toggle('active');

for(let i=0;i<total_nav_list; i++){
    const a = nav_list[i].querySelector('a');
    a.addEventListener("click",function(){
        for(let j=0;j<total_nav_list;j++){
            nav_list[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);

    });
}

const nav_toggle_btn = document.querySelector('.nav-toggler');
// console.log(nav_toggle_btn.classList);
nav_toggle_btn.addEventListener('click',function(){
    document.querySelector('.aside').classList.toggle('open');
    document.querySelector('.nav-toggler').classList.toggle('open');
    for(let j=0;j<total_nav_list;j++){
        all_section[j].classList.toggle('open');
    }
})

