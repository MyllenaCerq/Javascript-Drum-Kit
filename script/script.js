function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const keyAnimation = document.querySelector(`.key[data-key="${e.key}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  keyAnimation.classList.add('playing')
}

function removeTransiton(e) {
  if (e.propertyName !== "transform") return
  this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransiton))
