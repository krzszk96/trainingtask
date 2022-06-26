const nav_buttons_cont = document.querySelector('.nav-buttons')
const nav_buttons = document.querySelectorAll('.carousel-btn')

const slides = document.querySelectorAll('.slide')

var last_clicked = 'slide1'

nav_buttons_cont.addEventListener('click', (e)=>{

  nav_buttons.forEach(button =>{
    button.disabled = true
    button.classList.remove('active-slide')

    setTimeout(()=>{
      button.disabled = false;
    }, 1000)
  })

  slides.forEach(slide =>{
    slide.classList.remove('sliding')
  })

  switch (e.target.id){
    case 'carousel_btn_1':    

      document.getElementById('slide1').style.opacity = '1'
      document.getElementById('slide1').classList.add('sliding')
      document.getElementById('carousel_btn_1').classList.add('active-slide')  
      

      setTimeout(() => {
        document.getElementById(last_clicked).style.opacity = '0'
        last_clicked = 'slide1'
      }, 1000);    
      break
    case 'carousel_btn_2':
               
      document.getElementById('slide2').style.opacity = '1'
      document.getElementById('slide2').classList.add('sliding')
      document.getElementById('carousel_btn_2').classList.add('active-slide')
       
      setTimeout(() => {
        document.getElementById(last_clicked).style.opacity = '0'
        last_clicked = 'slide2'
      }, 1000);
      break
    case 'carousel_btn_3':        
          
      document.getElementById('slide3').style.opacity = '1'
      document.getElementById('slide3').classList.add('sliding') 
      document.getElementById('carousel_btn_3').classList.add('active-slide')

      setTimeout(() => {
        document.getElementById(last_clicked).style.opacity = '0'
        last_clicked = 'slide3'
      }, 1000);        
      break
  }
})
