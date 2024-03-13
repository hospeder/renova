window.addEventListener('scroll', function () {
  let nav = this.document.getElementById('navbar')
  nav.classList.toggle('fixed', this.window.scrollY > 0)
})

const line = document.querySelector('.lineone')
const linetwo = document.querySelector('.linetwo')
const linethree = document.querySelector('.linethree')
const hamburger = document.getElementById('hamburger')
const wall = document.getElementById('wall')
hamburger.addEventListener('click', function (){
  wall.classList.toggle('open')
  line.classList.toggle('active')
  linetwo.classList.toggle('active')
  linethree.classList.toggle('active')
})