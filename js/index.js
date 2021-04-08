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
const navAnchors = document.querySelectorAll('nav a')
navAnchors.forEach((anchor, index) => {
  anchor.textContent = siteContent['nav']['nav-item-'+ (index + 1)]
  anchor.style.color = 'green'
})




// navAnchors[0].textContent = siteContent['nav']['nav-item-1']
// navAnchors[1].textContent = siteContent['nav']['nav-item-2']
// navAnchors[2].textContent = siteContent['nav']['nav-item-3']
// navAnchors[3].textContent = siteContent['nav']['nav-item-4']
// navAnchors[4].textContent = siteContent['nav']['nav-item-5']
// navAnchors[5].textContent = siteContent['nav']['nav-item-6']

// Nav end

// Header img
const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src'])

// CTA class
const ctaContent = document.querySelector('.cta-text')
const h1 = ctaContent.querySelector('h1')
const ctaButton = ctaContent.querySelector('button')
// h1.textContent = siteContent['cta']['h1']
let ctaMessage = siteContent['cta']['h1']
ctaMessage = ctaMessage.split(" ").join("<br>")
h1.innerHTML = ctaMessage
ctaButton.textContent = siteContent['cta']['button']

// Main Content
const mainHead = document.querySelectorAll('.text-content h4')
const mainP = document.querySelectorAll('.text-content p')
mainHead[0].textContent = siteContent['main-content']['features-h4']
mainP[0].textContent = siteContent['main-content']['features-content']

mainHead[1].textContent = siteContent['main-content']['about-h4']
mainP[1].textContent = siteContent['main-content']['about-content']

const mainImg = document.querySelector('.middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

mainHead[2].textContent = siteContent['main-content']['services-h4']
mainP[2].textContent = siteContent["main-content"]["services-content"]

mainHead[3].textContent = siteContent['main-content']['product-h4']
mainP[3].textContent = siteContent['main-content']['product-content']

mainHead[4].textContent = siteContent['main-content']['vision-h4']
mainP[4].textContent = siteContent['main-content']['vision-content']

// Contact
const contactHead = document.querySelector('.contact h4')
const contactInfo = document.querySelectorAll('.contact p')
contactHead.textContent = siteContent['contact']['contact-h4']
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

// Footer
const footerCont = document.querySelector('footer')
footerCont.textContent = siteContent['footer']['copyright']

// New content 
const galleryLink = document.createElement('a')
const nav = document.querySelector('nav')
galleryLink.textContent = 'Gallery'
galleryLink.setAttribute('href', '#')
galleryLink.style.color = 'green'
nav.appendChild(galleryLink)

const updateLink = document.createElement('a')
updateLink.textContent = 'Updates'
updateLink.style.color = "teal"
document.querySelector("nav").appendChild(updateLink)














