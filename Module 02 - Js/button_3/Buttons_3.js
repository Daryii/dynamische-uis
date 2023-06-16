const aantalPerRij = 5;
const aantalButtons = 30;
const container = document.getElementById('container');


for (var i = 0; i < aantalButtons;i++){
    const button = document.createElement('button');
    button.style.backgroundColor = 'green';
    button.textContent = i + 1;
    container.appendChild(button);

 

    button.addEventListener("click", function() { 
      console.dir(button)
      click++;


      let click = 0;
   
      if (click  === 1){
        button.style.backgroundColor = 'red';
        console.log(`Button ${i+1} is ${click} keer aangeklikt!`);
      } else if (click === 2){
        button.style.backgroundColor = 'purple';
        console.log(`Button ${i+1} is ${click} keer aangeklikt!`);
      } else if (click === 3){
        button.style.backgroundColor = 'blue';
        console.log(`Button ${i+1} is ${click} keer aangeklikt!`);
      } else if (click === 4){
        button.style.backgroundColor = 'black';
        console.log(`Button ${i+1} is ${click} keer aangeklikt!`);
      } else{
        button.remove()
        console.log(`Button ${i+1} is ${click} keer aangeklikt!`);
        console.log('i love u ')
      }
    });

  

    if ((i + 1) % aantalPerRij === 0) {
        container.appendChild(document.createElement("br"));
      }

}



