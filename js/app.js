
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const navLinks = getElement('.nav-links')
const navBtn = getElement('.nav-btn')

navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear