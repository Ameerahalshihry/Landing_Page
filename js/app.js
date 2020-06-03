/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section')
const myDocFrag = document.createDocumentFragment()
const navList = document.querySelector('#navbar__list')
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () =>{
    for (const section of sections ){
        const newNav = document.createElement('li')
        const navName = section.getAttribute('data-nav')
        const sectionId = section.id
        newNav.innerHTML = `<a class="menu__link" href="#${sectionId}">${navName}</a>`
        myDocFrag.appendChild(newNav)
    }
    navList.appendChild(myDocFrag)
}
buildNav()


// Add class 'active' to section when near top of viewport
const handleClick = () => {
    navList.addEventListener('click', (e) => {
        e.preventDefault()
        const targetElement = e.target
        sections.forEach(section =>{
            section.classList.remove("your-active-class")
            if (section.id === targetElement.getAttribute('href').slice(1)){
                section.classList.add("your-active-class")
                section.scrollIntoView({ behavior: 'smooth'})
            }
        })
})
}
handleClick()

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
