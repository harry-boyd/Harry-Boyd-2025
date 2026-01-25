// ——————————————————————————————————————————————————————————— TO DO

// ——— WAITING ———
// Legit fonts
// Screen sizes

// ——— NOW ———
// Colour !!!!
// Highlight colours
// Remove enlargement on hover
// Fix sharing image
// Favicon???

// ——————————————————————————————————————————————————————————— CORE

const rootTag = document.querySelector(':root')
const bodyTag = document.querySelector('body')

// ——————————————————————————————————————————————————————————— SAFARI CHECKER

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

// ——————————————————————————————————————————————————————————— MOBILE CHECKER

let isMobile = false
let isTablet = false
let isSmallDevice = false

const checkMobile = () => {
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
}

const checkTablet = () => {
  let iPad = false
  let tablet = false
  
  if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) {
    iPad = true
  }
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {
    tablet = true
  }
  if (iPad || tablet) {
    isTablet = true
  }
}

const checkSmallDevice = () => {
  if (window.innerWidth <= 1050 || window.innerHeight <= 700) {
    isSmallDevice = true
  }
}

checkMobile()
checkTablet()
checkSmallDevice()

window.addEventListener ('resize', () => {
  checkMobile()
  checkTablet()
  checkSmallDevice()
})

console.log(`isMobile = ${isMobile} | isTablet = ${isTablet} | isSmallDevice = ${isSmallDevice}`)

// ——————————————————————————————————————————————————————————— MOBILE VIEWPORT

const setMobileVh = () => {
  rootTag.style.setProperty('--vh', `${window.innerHeight}px`)
}

if (isMobile || isTablet) {
  setMobileVh()
  window.addEventListener ('resize', setMobileVh)
}

// ——————————————————————————————————————————————————————————— TEXT SHADOW

if (isSafari) {
  rootTag.style.setProperty('--nameShadow', 'var(--shadowSafari)')
  document.querySelector('.intro').classList.add('safari')
}

// ——————————————————————————————————————————————————————————— RANDOM COLOUR

const randColour = (max, min) => {
  let r = Math.floor(Math.random() * (max - min)) + min
  let g = Math.floor(Math.random() * (max - min)) + min
  let b = Math.floor(Math.random() * (max - min)) + min
  return `rgb(${r}, ${g}, ${b})`
}

const setColours = () => {
  rootTag.style.setProperty('--fg', randColour(200, 20))
  rootTag.style.setProperty('--highlight', randColour(255, 150))
}
// setColours()

// ——————————————————————————————————————————————————————————— COLOUR PALETTES

const palettes = [
  { // 01
    'fg'        : '#969A96',
    'highlight' : '#DAE4DE',
  },
  { // 02
    'fg'        : '#B8B068',
    'highlight' : '#F6F62C',
  },
  { // 03
    'fg'        : '#896162',
    'highlight' : '#D2E301',
  },
  { // 04
    'fg'        : '#B73234',
    'highlight' : '#FFB968',
  },
  { // 05
    'fg'        : '#9940F5',
    'highlight' : '#FFFFFF',
  },
  { // 06
    'fg'        : '#988BA4',
    'highlight' : '#D1FF54',
  },
  { // 07
    'fg'        : '#A38C97',
    'highlight' : '#FFDDAD',
  },
  { // 08
    'fg'        : '#4165C8',
    'highlight' : '#ACDAFF',
  },
  { // 09
    'fg'        : '#487F4F',
    'highlight' : '#FFB5EC',
  },
]

const setPalette = i => {
  if (!i && i !== 0) { i = Math.floor(Math.random() * palettes.length) }
  rootTag.style.setProperty('--fg', palettes[i].fg)
  rootTag.style.setProperty('--highlight', palettes[i].highlight)
}
setPalette()

// ——————————————————————————————————————————————————————————— LOAD TRANSITION

const showoffTimer = 3000
let showoff

const setupTransition = () => {
  let els = document.querySelectorAll('body > *')
  let t = 0
  els.forEach(el => {
    t += 30
    if (el.classList.contains('line')) {
      el.style.transition = `stroke-dasharray var(--transShort), stroke var(--transShort), transform var(--transLong) cubic-bezier(0.22, 1, 0.36, 1) ${t}ms`
    } else {
      el.style.transitionDelay = `${t}ms`
    }
  })
}

window.addEventListener('load', () => {
  bodyTag.classList.remove('notLoaded')
  if (isMobile || isTablet) {
    showoff = setTimeout(() => {
      headerSpans.forEach(span => { dodge(span) })
    }, showoffTimer)
  } else {
    showoff = setTimeout(() => {
      headerSpans.forEach(span => {
        dodge(span)
      })
    }, showoffTimer)
  }
})

// ——————————————————————————————————————————————————————————— SVGS

document.querySelectorAll('section').forEach(section => {
  section.insertAdjacentHTML('beforebegin', svg.line)
  setupTransition()
})

document.querySelector('#nike').insertAdjacentHTML('afterbegin', svg.nike)
document.querySelector('#pentagram').insertAdjacentHTML('afterbegin', svg.pentagram)
document.querySelector('#bbc').insertAdjacentHTML('afterbegin', svg.bbc)
document.querySelector('#youtube').insertAdjacentHTML('afterbegin', svg.youtube)
document.querySelector('#email').innerHTML = svg.email
document.querySelector('#phone').innerHTML = svg.phone
document.querySelector('#pin').innerHTML = svg.pin

// ——————————————————————————————————————————————————————————— EMOJIS

const earthPhases = [
  '🌎',
  '🌍',
  '🌏'
]

const emojiSpin = earth => {
  let i = 0
  setInterval(() => {
    earth.innerHTML = earthPhases[i]
    i += 1
    if (i >= earthPhases.length) { i = 0 }
  }, 300)
}

const insertEmojis = () => {
  document.querySelector('.intro h1:last-of-type').insertAdjacentHTML('beforeend', `<span> </span><span class='emoji'>🌎</span>`)
  let earth = document.querySelector('.emoji')
  emojiSpin(earth)
}

// ——————————————————————————————————————————————————————————— LINE

const lines = document.querySelectorAll('svg.line')
const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('a')
const lineFactor = 3

if (!isMobile && !isTablet) {
  sections.forEach((section, i) => {
    section.addEventListener('mouseover', () => { lines[i].classList.add('active') })
    section.addEventListener('mouseout', () => { lines[i].classList.remove('active') })
  })

  buttons.forEach(a => {
    a.addEventListener('mouseover', () => { lines.forEach(line => { line.classList.add('highlight') }) })
    a.addEventListener('mouseout', () => { lines.forEach(line => { line.classList.remove('highlight') }) })
  })
}

const setDash = () => {
  let d = 100 / (window.innerWidth / lineFactor)
  rootTag.style.setProperty('--dash', `${d}px`)
}
setDash()

window.addEventListener('resize', setDash)

// ——————————————————————————————————————————————————————————— HEADER DODGE

const headerCont = document.querySelector('body .intro')
let headerAll

const introWide = `<h1>Harry Boyd is a freelance designer specialising</h1><h1>in flexible brand systems and digital experiences</h1><h1>for clients around the world</h1>`
const introNarrow = `<h1>Harry Boyd is a freelance designer</h1><h1>specialising in flexible brand systems</h1><h1>and digital experiences for clients</h1><h1>around the world</h1>`

const transOriginal = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s, color 0.5s' // Keep these three transition times up to date
const resetBezier = 'cubic-bezier(.75,.02,.56,1.27)'
const resetSpeed = 0.8
const resetDelay = 2000
const stagger = 20
const windowFactor = 0.75
let headerSpans, travelHMax, travelWMax, reset
let resetInProgress = false
let narrow = false

// Setup intro replacements
const narrowWindow = () => {
  narrow = true
  headerCont.innerHTML = introNarrow
  setupDodge()
  console.log('narrow window!')
}

const wideWindow = () => {
  narrow = false
  headerCont.innerHTML = introWide
  setupDodge()
  console.log('wide window!')
}

// Split characters
let split = t => {
  let o = t
  let tSplit = ''
  t = t.textContent.split('')
  t.forEach(char => {
    tSplit = tSplit.concat(`<span data-content='${char}'>${char}</span>`)
  })
  o.innerHTML = tSplit
}

// Random value functions
const randomPos = axisMax => {
  let n = Math.random() * axisMax
  n = n - (axisMax * 0.5)
  return n
}

const randomRot = () => {
  return (Math.random() * 360) - 180
}

const randomScale = () => {
  return (Math.floor(Math.random() * 10) / 10) + 1
}

// Reset position
const resetPos = el => {
  el.style.transform = `translate(0%, 0%) scale(1) rotate(0deg)`
  el.style.filter = `blur(0px)`
}

// Reset function
const resetWave = () => {
  // Building stagger + setup dodge counter
  let t = 0
  let n = 0
  resetInProgress = true
  headerSpans.forEach(el => {
    el.style.pointerEvents = 'none'
    // Only reset 'dodged' characters
    if (el.classList.contains('dodged')) {
      n += 1
      t += stagger
      setTimeout(() => {
        // Change transition before shifting
        el.style.transition = `transform ${resetSpeed}s ${resetBezier}, filter ${resetSpeed}s, color ${resetSpeed}s`
        resetPos(el)
        // Reset transition after shift
        setTimeout(() => {
          el.style.transition = transOriginal
        }, resetSpeed * 1000)
      }, t)
      el.classList.remove('dodged')
    }
  })
  // Reset pointer events after all have reset
  setTimeout(() => {
    headerSpans.forEach(el => {
      el.style.pointerEvents = 'auto'
    })
    resetInProgress = false
  }, (n * stagger) + (resetSpeed * 1000))
}

// Dodge
const dodge = el => {
  if (showoff) { clearTimeout(showoff) }
  // Clear countdown to reset
  clearTimeout(reset)
  // Add class for easy tracking later
  el.classList.add('dodged')
  el.style.transform = `translate(${randomPos(travelWMax)}%, ${randomPos(travelHMax)}%) scale(${randomScale()}) rotate(${randomRot()}deg)`
  el.style.filter = `blur(${Math.floor(Math.random() * 5) + 1}px)`
  el.style.pointerEvents = 'none'
  // Set countdown for reset
  reset = setTimeout(resetWave, resetDelay)
}

// Set distance of travel values
const setTravel = () => {
  travelHMax = ((window.innerHeight / headerSpans[0].getBoundingClientRect().height) * 100) * 0.75
  travelWMax = ((window.innerWidth / (headerCont.getBoundingClientRect().width / headerSpans.length)) * 100) * 0.75
}
window.addEventListener('resize', setTravel)

// Setup
const setupDodge = () => {
  headerAll = document.querySelectorAll('body .intro h1')
  headerAll.forEach(header => {
    split(header)
  })
  insertEmojis()
  headerSpans = headerCont.querySelectorAll('span')

  // Desktop vs. mobile triggers
  headerSpans.forEach(span => {
    if (span.innerHTML === ' ') { span.classList.add('space') }
    if (!isMobile && !isTablet) {
      span.addEventListener('mouseover', () => { dodge(span) })
    }
  })
  if (isMobile || isTablet) {
    headerCont.addEventListener('touchstart', () => {
      if (!resetInProgress) {
        headerSpans.forEach(span => { dodge(span) })
      }
    })
  }
  setTravel()
}

// Listen for window narrowness to replace intro
const insertIntro = () => {
  if (window.innerWidth / window.innerHeight <= windowFactor) {
    narrowWindow()
  } else {
    setupDodge()
  }
  window.addEventListener ('resize', () => {
    if (!narrow && window.innerWidth / window.innerHeight <= windowFactor) { narrowWindow() }
    else if (narrow && window.innerWidth / window.innerHeight > windowFactor) { wideWindow() }
  })
}
insertIntro()

// ——————————————————————————————————————————————————————————— CRABIFY

const crabify = () => {
  headerSpans.forEach((span, i) => { 
    span.classList.add('crab')
    span.style.transition = `left ${Math.floor((Math.random() * 6)) / 2}s linear ${Math.floor((Math.random() * 10)) / 10}s`
    setTimeout(() => {
      if (Math.random() > 0.5) {
        span.style.left = `100vw`
      } else {
        span.style.left = `-100vw`
      }
    }, 100)
    setTimeout(() => {
      span.style.transform = 'scale(0)'
      span.style.left = '0'
      span.style.transition = `transform 0.2s ${i * 0.05}s`
      span.classList.remove('crab')
      span.style.transform = 'scale(1)'
      setTimeout(() => { span.style.transition = transOriginal }, 300)
    }, 4000)
  })
}

const deCrab = () => {
  headerSpans.forEach(span => { span.classList.remove('crab') })
}