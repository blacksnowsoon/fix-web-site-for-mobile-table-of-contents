
// get all the tabs in the nav bar you have 6 tabs
const allTabs = document.querySelectorAll(".tabs .tab");
// looping over the tabs to get the contents and index
for (const tab of allTabs) {
  // get the title of each element in the nav bar
  const elementName = tab.querySelector("ul li [title]");
  // if the ul has any li with title attr will get the name of it
  if (elementName !== null){
    // getting out the name
    const dataNamed = elementName.getAttribute("title");
    // get the tabContents for from the parent 
    const tabContents = tab.querySelector(".tabs-panel");
    // set atteibute [data-named] to the div content the list 
    tabContents.setAttribute("data-named",dataNamed);
  }
}
// fainly check the width of the window on loading to extand the list
// this 2 lines of code will work with refresh the page or open it in small screen less than 1280px
if (window.innerWidth < 1280) {
    const contents = document.querySelector("[data-named=Contents]");
    contents.style.display = "block";
}
// additional listener you can use it also in case resizing the window
// this 2 ;ines of code will work automaticlly when you resizing the page

//------- un comment the code below code to test windows resize--------

// window.addEventListener("resize",()=>{
//   const contents = document.querySelector("[data-named=Contents]");
//   if (window.innerWidth < 1280) {
//     contents.style.display = "block";
//   }else {
//     contents.style.display = "none";
//   }
// });
