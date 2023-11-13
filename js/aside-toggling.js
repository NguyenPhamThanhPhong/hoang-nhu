const nav = document.querySelector('.nav')
const nav_list = nav.querySelectorAll('li')
const total_nav_list = nav_list.length;
const all_section = document.querySelectorAll('.section');

function showSection(element){
    for(let i=0;i<total_nav_list;i++){
        all_section[i].classList.remove('active');

    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#'+target).classList.toggle('active');
}

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

