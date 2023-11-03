const leftNav = document.querySelector('.left-nav'),
      leftNavEvents = leftNav.querySelectorAll('.event'),

      infoEvents = document.querySelector('.info .event')

let themes = document.querySelectorAll('.info .active .theme'),
    eventNavThemes = leftNav.querySelectorAll('.event .active .theme'),

    themePositions = [],
    index = 0

function setThemesPositions() {
  eventNavThemes = leftNav.querySelectorAll('.event .active .theme'),
  index = 0
  themePositions = []
  themes = document.querySelectorAll('.info .event .theme')
  for (theme of themes) {
    themePositions.push(theme.getBoundingClientRect().y - window.screen.height / 5 + scrollY)
  }
}

leftNavEvents.forEach(event => {
  event.querySelector('.title img').onclick = () => {
    document.querySelectorAll('.timeline .nav-top').forEach((infoEvent, i) => {
      leftNav.querySelectorAll('.themes')[i].classList.remove('active')
      leftNav.querySelectorAll('.title img')[i].classList.remove('hideThemes')
    })
    event.querySelector('.themes').classList.add('active')
    event.querySelector('.title img').classList.add('hideThemes')
  }
})

const topNav = document.querySelector('.nav .timeline'),
      topNavEvents = topNav.querySelectorAll('.nav-top')

topNavEvents.forEach((event, index) => {
  event.onmouseover = () => {
    event.querySelector('.event').style.opacity = '1'
  }
  event.onmouseout = () => {
    topNavEvents.forEach(event => {
      event.querySelector('.event').style.opacity = '.8'
    })
  }
})

function clearOpacityLeftNav() {
  eventNavThemes.forEach(theme => {
    theme.style.opacity = '.6'
  })
}

const leftNavThemes = leftNav.querySelectorAll('.event .themes .theme')

leftNav.querySelectorAll('.event .active .theme').forEach((theme, i) => {
  theme.onclick = () => {
    setTimeout(() => {
      setThemesPositions()
      scrollTo({ left: 0, top: themePositions[i]})
      clearOpacityLeftNav()
      index = i
      theme.style.opacity = '1'
    }, 0)
  }
})

let time = 0, addition = .5

for (i = 0; i < infoEvents.querySelectorAll('*').length; i++) {
  if (!infoEvents.querySelectorAll('*')[i].classList.contains('event-title') || infoEvents.querySelectorAll('*')[i].tagName !== 'A') {
    infoEvents.querySelectorAll('*')[i].style.opacity = '0'
  }
}

for (i = 0; i < infoEvents.querySelectorAll('*').length; i++) {
  if (!infoEvents.querySelectorAll('*')[i].classList.contains('event-title') || infoEvents.querySelectorAll('*')[i].tagName !== 'A') {
    animation(i)
  }
}

function animation(index) {
  setTimeout(() => {
    infoEvents.querySelectorAll('*')[index].style.opacity = '1'
  }, time)
  time+=addition
}

setTimeout(() => {
  scrollTo(0, scrollY - window.screen.height / 5)
}, 50)

setTimeout(() => {
  window.onscroll = () => {
    if (scrollY < themePositions[index - 1] && index > 1) {
      clearOpacityLeftNav()
      index--
      eventNavThemes[index - 1].style.opacity = '1'
    }
    
    if (scrollY >= themePositions[index]) {
      clearOpacityLeftNav()
      eventNavThemes[index].style.opacity = '1'
      index++
    }
  }
}, 100)


const burger = document.querySelector('.burger'),
      burgerNav = document.querySelector('.burger-nav')

burger.onclick = () => {
  burgerNav.classList.toggle('burger-open')
  burger.classList.toggle('clicked')
  document.querySelector('body').classList.toggle('scroll-off')
}