const Xselect = document.getElementById('selecX');
const Oselect = document.getElementById('selecO');

localStorage.setItem('x',1);


Xselect.addEventListener('click', () =>{
    console.log('Seleccion X')
    Xselect.classList.toggle('selecX__bg');
    Oselect.classList.remove('selecO__bg');
    localStorage.setItem("x",1);
    localStorage.removeItem('o')
    // localStorage.clear();
})


Oselect.addEventListener('click', () =>{
    Xselect.classList.remove('selecX__bg');
    Oselect.classList.toggle('selecO__bg');
   localStorage.setItem("o",2);
   localStorage.removeItem('x')
})

