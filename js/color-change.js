var AddSwitchColorEvent = () => {
    const colorSpans = document.querySelectorAll('.colors span');
    colorSpans.forEach(span => {
        span.addEventListener('click', function () {
            const bgColor = this.style.background;
            if (typeof (bgColor) != "undefined" && bgColor != null)
                document.documentElement.style.setProperty('--skin-color', bgColor);
        });
    });
}

var AddSwitchColorMenuOpen = () => {
    var styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
    var style_switcher = document.querySelector('.style-switcher');
    styleSwitcherToggler.addEventListener('click', () => {
        style_switcher.classList.toggle('open');
    });
    window.addEventListener("scroll", () => {
        if(style_switcher.classList.contains('open'))
            style_switcher.classList.remove('open');
    })
}

var ChangeStyle = ()=>{
    const day_night_toggler = document.querySelector('.day-night');
    if(document.body.classList.contains('dark')){
        day_night_toggler.querySelector('i').classList.remove('fa-moon');
        day_night_toggler.querySelector('i').classList.add('fa-sun');
    }else{
        day_night_toggler.querySelector('i').classList.remove('fa-sun');
        day_night_toggler.querySelector('i').classList.add('fa-moon');
    }

    day_night_toggler.addEventListener('click', () => {
        day_night_toggler.querySelector('i').classList.toggle('fa-sun');
        day_night_toggler.querySelector('i').classList.toggle('fa-moon');
        document.body.classList.toggle('dark');
        console.log(document.body.classList);
    });
}


document.addEventListener("DOMContentLoaded",
    function () {
        AddSwitchColorEvent();
        AddSwitchColorMenuOpen();
        ChangeStyle();
    }
)
