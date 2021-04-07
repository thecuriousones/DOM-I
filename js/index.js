const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav 
const nav1 = document.createElement('a')
const nav = document.querySelector('nav')
nav1.textContent = 'Services'
nav1.setAttribute('href', '#')
nav1.classList.add('nav-item-1')

nav.appendChild(nav1)

const nav2 = document.createElement('a')
nav2.textContent = 'Product'
nav2.setAttribute('href', '#')
nav2.classList.add('nav-item-2')

nav.appendChild(nav2)

const nav3 = document.createElement('a')
nav3.textContent = 'Vision'
nav3.setAttribute('href', '#')
nav3.classList.add('nav-item-3')

nav.appendChild(nav3)

const nav4 = document.createElement('a')
nav4.textContent = 'Features'
nav4.setAttribute('href', '#')
nav4.classList.add('nav-item-4')

nav.appendChild(nav4)

const nav5 = document.createElement('a')
nav5.textContent = 'About'
nav5.setAttribute('href', '#')
nav5.classList.add('nav-item-5')

nav.appendChild(nav5)

const nav6 = document.createElement('a')
nav6.textContent = 'Contact'
nav6.setAttribute('href', '#')
nav6.classList.add('nav-item-6')

nav.appendChild(nav6)
// Nav end

// Header img
const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src'])

// CTA class
const ctaContent = document.querySelector('.cta-text')
ctaContent.getElementsByTagName = ('h1')[0].innerHTML 
ctaContent.textContent ='Dom Is Awesome'
document.querySelector('.cta-text').style.fontFamily = 'Bangers'
document.querySelector('.cta-text').style.letterSpacing = '5px'
document.querySelector('.cta-text').style.fontSize = '72px'
document.querySelector('.cta-text').style.MarginBottom = '82px'

