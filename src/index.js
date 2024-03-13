const { default: Swal } = require("sweetalert2");

const logo = document.getElementById('logo-home')
logo.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none'
})

var phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function () {
  var phone = phoneInput.value;
  phone = phone.replace(/\D/g, ''); 
  phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2'); 
  phone = phone.replace(/(\d{5})(\d{4})$/, '$1-$2'); 
  phoneInput.value = phone; 
});

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formObj = Object.fromEntries(formData.entries())
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formObj)
  };
  fetch(e.target.action, requestOptions)
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada com sucesso!',
          text: 'Obrigado por entrar em contato, retornaremos o mais breve possível',
          confirmButtonText: 'Ok'
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Opss, algo deu errado!',
          text: 'Tente novamente, ou espere alguns minutos...',
          confirmButtonText: 'Ok'
        });
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar o formulário.');
    });
});


let videos = document.getElementsByClassName('video')

for(i = 0; i < videos.length; i++){
    let video = videos[i]

  video.addEventListener('mouseenter', function () {
    video.play()
  })
    
  video.addEventListener('mouseleave', function () {
    video.pause()
    video.currentTime = 0
  })
}

var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 4,
  spaceBetween: 0,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      0: {
      slidesPerView: 1,
      },
      670: {
      slidesPerView: 2,
      spaceBetween: 0,
      },
      950: {
      slidesPerView: 3,
      spaceBetween: 0,
      },
      1250:{
      slidesPerView: 4,
      }
    },
});
