function med() {
    let divee = document.getElementById('color');
    if (divee.style.backgroundColor === 'red') {
        divee.style.backgroundColor = 'blue';
    }else {
        divee.style.backgroundColor = 'red';
    }
}

function alirt() {
    alert('this is alirt');
}

const mousePositionElement = document.getElementById('mousePosition');
        document.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            mousePositionElement.textContent = `X: ${x}, Y: ${y}`;
        });

 function modale() {
    let btn = document.getElementById('ddd')
    btn.classList.toggle('open');
    // if(btn.style.backgroundColor = 'none'){
    //     btn.style.display = 'block';
    // }else{
    //     btn.style.display = 'none';
    // }
    console.log(btn)
 }    
 
 
let cnteur = 0;
function myFunction(){
    var x = document.getElementById("nbr");
    cnteur++;
    x.textContent = cnteur;
}






const element = document.getElementById('monElement');

const texteOriginal = "mohammed";
const nouveauTexte = "chakhs";

element.addEventListener('mouseover', () => {
    element.textContent = nouveauTexte;
});

element.addEventListener('mouseout', () => {
    element.textContent = texteOriginal;   
});