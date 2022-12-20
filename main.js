const fileImages = ['banting.gif', 'hero.gif', 'murung.gif', 'piwpiw.gif', 'smile.gif'];
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', (e) => {
  const target = e.target
  
  if (target.id == 'baik') {
     change(fileImages[1], 'Alhamdulilah...syukur deh kalo gitu,jaga kesehatan terus ya.')
  }
  
  if(target.id == 'gak-baik') {
    change(fileImages[2], 'Yah...semoga lekas sembuh ya.')
  }
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove()
    
  }
  
  
  const newButton = document.createElement('button')
  const card = document.querySelector('.card')
    
    newButton.innerText = 'Next'
    newButton.classList.add('button')
    card.append(newButton)
    
    let index = 0
    newButton.addEventListener('click', () => {
      index++
      if (index === 1) {
        change(fileImages[2], 'Maafin Alfi ya...aku tau aku yang salah')
        
      } else if (index === 2) {
        change(fileImages[3], 'Oh ya, Sukses terus dan sehat selalu jangan lupa satu hal "Sholat" ')
        newButton.remove()
      } else {
        console.log('ha')
      }
      
      
    })
    
}))


function change(img, description) {
  document.querySelector('.image-char').setAttribute('src', `${img}`)
  document.querySelector('.text').innerText = description
}

/*let timers = 300
let timerDuration = setInterval(function() {
  const timer = document.querySelector('.timer')
  timer.style.transform = `translateX(${timers -= 50}px)`
}, 1000);
*/
