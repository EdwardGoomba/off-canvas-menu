
const offsiteToggle = document.querySelector('.jsOffsiteToggle')
offsiteToggle.addEventListener('click', e => {
  console.log('Button clicked, push screen')
  document.body.classList.add('offsite-is-open')
})
