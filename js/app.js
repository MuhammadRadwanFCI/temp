
/**
Global definitions
 */
let sections = document.querySelectorAll('section');
/**
function to start when page loads to populate list
 */
 DynamicNavigation();
function DynamicNavigation(){
    sections.forEach(tabBuilder)
};
/**
Single addition of tab with link
 */
 function tabBuilder(section) {

  let listTab = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link"> محمد بيحب هاجر </a>`;
  let singleNode = document.createElement("li");
  singleNode.insertAdjacentHTML("afterbegin",listTab);
  document.getElementById("navbar__list").appendChild(singleNode);
}
/**
scroll action event
 */
 window.addEventListener('scroll', () => scroller())

/**
scroll function
 */
function scroller(){
    sections.forEach(sectionScroller)
};
/**
 function for each section
 */
	function sectionScroller(currentSection) {
     let newTabHighlight = document.getElementById("navbar__list").querySelector(`[data-nav=${currentSection.id}]`);
	   if(currentSection.getBoundingClientRect().top >= -520 && currentSection.getBoundingClientRect().top <= 520){
       newTabHighlight.classList.add("newTabHighlight");
    }
    else{

      newTabHighlight.classList.remove("newTabHighlight");
    }
	};
