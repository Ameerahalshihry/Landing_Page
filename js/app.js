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
 * */

// build the nav
const buildNav = () =>{
    for (const section of sections ){
        const newNav = document.createElement('li')
        const navName = section.getAttribute('data-nav')
        const sectionId = section.id
        newNav.innerHTML = `<a class="menu__link" href="#${sectionId}" data-nav="${navName}">${navName}</a>`
        myDocFrag.appendChild(newNav)
    }
    navList.appendChild(myDocFrag)
}
buildNav()

// Scroll to section on link click
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

// Add class 'active' to section when near top of viewport
const handleScroll = () =>{
    const arrayAnchors = [...document.querySelectorAll('a')]
    document.addEventListener('scroll', (e) =>{
        sections.forEach( section =>{
            const t= section.getBoundingClientRect().top
            section.classList.remove("your-active-class")
            if (t <= 150 && t >= -150){
                section.classList.add("your-active-class")
                arrayAnchors.forEach(anchor =>{
                    if (anchor.dataset.nav === section.dataset.nav){
                        anchor.style.cssText=" background: #333; color: #fff"
                    }else{
                        anchor.style.cssText=" color: #333; background: #fff"
                    }
                })
            }
        })
    })

}
handleScroll()