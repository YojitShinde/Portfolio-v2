function toggleBtnClicked(){
    console.log('Clicked')
    $('#sidebar, #content').toggleClass('active');
};

// Titlebar buttons: simple interactions
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.xp-btn').forEach(btn=>{
        btn.addEventListener('click', function(e){
            const id = e.currentTarget.id;
            if(id==='close-btn'){
                // simulate close: hide window
                const win = e.currentTarget.closest('.xp-window'); if(win) win.style.display='none';
            } else if(id==='min-btn'){
                const content = e.currentTarget.closest('.xp-window').querySelector('.xp-content'); if(content) content.style.display = (content.style.display==='none')? 'block':'none';
            } else if(id==='max-btn'){
                const win = e.currentTarget.closest('.xp-window'); if(win) win.classList.toggle('maximized');
            }
        })
    })

    // Add bop animation to small icons
    document.querySelectorAll('.resume-left img, .printer, .titlebar img').forEach(el=>el.classList.add('icon-bop'))
})