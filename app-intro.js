const file = document.querySelector('.file')
const circles = document.querySelectorAll('.circle')

circles.forEach(circle => {
  circle.onmouseover = () => {
    removeCircleAcitve()
    circle.querySelector('.date-text').classList.add('active-circle-text')
    circle.querySelector('.date-image').classList.add('active-circle-image')
  }
  circle.onmouseout = () => {
    removeCircleAcitve()
  }
})

function removeCircleAcitve() {
  circles.forEach(circle => {
    circle.querySelector('.date-text').classList.remove('active-circle-text')
    circle.querySelector('.date-image').classList.remove('active-circle-image')
  })
}