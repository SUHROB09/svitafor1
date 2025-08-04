const yashil = document.getElementById('yashil')
const sariq = document.getElementById('sariq')
const qizil = document.getElementById('qizil')
rang = 0;

function s(){
    if(rang == 0){
        yashil.style.backgroundColor = 'green'
            qizil.style.backgroundColor = 'white'
        rang = 1
    }else if (  rang == 1){
        sariq.style.backgroundColor = 'yellow'
         yashil.style.backgroundColor = 'white'
        rang = 2
    }else if(  rang == 2){
         qizil.style.backgroundColor = 'red'
          sariq.style.backgroundColor = 'white'
         rang = 0
    }
      
    
}

setInterval(s,1000)
