
/*================================================================
ANIMATION FOR SWITCHING BETWEEN SECTIONS
===============================================================*/


const activeNavShift = () => {

    const containers = document.querySelectorAll(".main-container");

    document.querySelectorAll(".navig").forEach((i,index) => {
        i.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active");
            i.classList.add("active");
            
            setTimeout(() => {
                
                document.querySelector(".cover")?.classList.add("show");      /* For transition Left-In   */
                document.querySelector(".main-container.show")?.classList.remove("show");
                                
                containers[index].classList.add("show");
                document.querySelector(".cover")?.classList.remove("show");   /* For transition Left-Out  */
            
                }, 400);

        })});}
        
activeNavShift()


const bookNowBtn = () => {

    const containers = document.querySelectorAll(".main-container");
    const homeDemoBtn = document.querySelector(".home-demo-button");
    const contPage = document.querySelector(".navig.cont");
    const contMainCont = document.querySelector(".contact.main-container");

    homeDemoBtn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        contPage.classList.add("active");

        setTimeout(() => {
                
                document.querySelector(".cover")?.classList.add("show");      /* For transition Left-In   */
                document.querySelector(".main-container.show")?.classList.remove("show");
                                
                contMainCont.classList.add("show");
                document.querySelector(".cover")?.classList.remove("show");   /* For transition Left-Out  */
            
                }, 400);

    })}

bookNowBtn()
    





/*================================================================
PROJECTS SECTION 
===============================================================*/


/* ─────────────────────────────────────────────────────────
    EXPAND / COLLAPSE
    Each card-header click toggles the .open class on its
    parent .project-card.  CSS does all the animation work.
───────────────────────────────────────────────────────── */

const cards = document.querySelectorAll('.project-card');

cards.forEach(function(card) {
    var header = card.querySelector('.card-header');

    header.addEventListener('click', function() {
    var isOpen = card.classList.contains('open');

    // Close all cards first (accordion behaviour — remove if you
    // want multiple cards open at the same time)
    cards.forEach(function(c) {
        c.classList.remove('open');
    });

    // If this card was closed, open it
    if (!isOpen) {
        card.classList.add('open');
    }
    });
});


/* ─────────────────────────────────────────────────────────
    CATEGORY FILTER
    Reads the select value and shows/hides cards by matching
    their data-category attribute.
───────────────────────────────────────────────────────── */

var select = document.getElementById('cat-select');

select.addEventListener('change', function() {
    var chosen = select.value;   // e.g. "power-platform" or "all"

    cards.forEach(function(card) {
    var category = card.getAttribute('data-category');

    if (chosen === 'all' || category === chosen) {
        card.style.display = '';     // show
    } else {
        card.classList.remove('open');  // collapse before hiding
        card.style.display = 'none';
    }
    });
});