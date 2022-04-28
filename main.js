const teks = [
  'Apa kabar?', 
  'Semoga sehat selalu ya!', 
  'Kini aku mempunyai pesan untukmu', 
  'Mungkin pesannya kurang tersusun rapi', 
  'Tapi semoga kamu baca sampai akhir ya!', 
  'Sebenernya aku tuh suka sama kamu', 
  'Meskipun kamu tak menyukaiku balik', 
  'Mungkin kamu lebih menyukai biasmu sendiri kan?', 
  'Yah meski begitu aku cuman ga mau kamu cuek', 
  'Aku ga mau kamu tiba-tiba ngilang dari chat', 
  'Ya aku tau sebenernya kamu tuh sibuk', 
  'Tapi mau bagaimana lagi', 
  'Mungkin pesan ini lebih ke arah keluhanku',
  'Ya meskipun aku ga berhak menuntut keluhan ini', 
  'Segini aja keluhan atau pesanku', 
  'Mungkin ini terkesan lebay dan sedikit alay', 
  'Semoga kau tidak emosi membacanya wkwkwk', 
  'See you next time sayang!', 
  'Selamat Hari Kelulusan:)', 
  'Dah', 
  '💓Love you Rann!'
]
const bar = document.getElementById('bar')
const play = document.getElementById('play')
const text = document.getElementById('text')
const progressbar = document.querySelector('.bar')
const preload = document.querySelector('.preload')

var current = 0
var music = new Audio()
music.src = 'assets/song.mp3'

function login() {
  let password = document.getElementById('pass').value
  if(password == 'rann') {
    preload.style.display = 'none'
    music.play()
    localStorage.setItem('bucin', true)
    return setInterval(renderText, 5000)
  } 
  alert('Password salah!')
}

function renderText() {
  current += 1
  if(current > teks.length) {
    clearInterval()
    return 
  }
  progress()
  text.innerText = teks[current-1]
  text.classList.add('active')
  setTimeout(()=>{text.classList.remove('active')}, 1000)
}

function progress() {
  let totalProgress = 100 / teks.length
  let progressCurrent = current
  let progress = totalProgress * progressCurrent
  progressbar.style.width = progress + "%"
}

function playMusic() {
  if(music.paused) {
    music.play()
    play.setAttribute('class', 'fa fa-pause')
  } else {
    music.pause()
    play.setAttribute('class', 'fa fa-play')
  }
}

bar.addEventListener('input', changeDuration)
music.addEventListener('timeupdate', updateDurationMusic)

function changeDuration() {
  let durationMusicNow = music.duration * (bar.value / 100)
  music.currentTime = durationMusicNow
}

function updateDurationMusic() {
  let newDuration = music.currentTime * (100 / music.duration)
  bar.value = newDuration;
}

play.addEventListener('click', playMusic)
