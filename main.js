const nav_buttons_cont = document.querySelector('.nav-buttons')

nav_buttons_cont.addEventListener('click', (e)=>{
  switch (e.target.id){
    case 'carousel_btn_1':      
      document.getElementById('slide1').style.display = "block"     
      setTimeout(() => {
        document.getElementById('slide2').style.display = "none"
        document.getElementById('slide3').style.display = "none"
      }, 1000);      
      break
    case 'carousel_btn_2':      
      document.getElementById('slide2').style.display = "block"
      setTimeout(() => {
        document.getElementById('slide1').style.display = "none"
        document.getElementById('slide3').style.display = "none"
      }, 1000);
      break
    case 'carousel_btn_3':        
      document.getElementById('slide3').style.display = "block"
      setTimeout(() => {
        document.getElementById('slide1').style.display = "none"
        document.getElementById('slide2').style.display = "none"
      }, 1000);        
      break
  }
})
