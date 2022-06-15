# fix-web-site-for-mobile-table-of-contents
display table of contents in mobile and tablets

How it works
The code simply starts by getting all the tabs you have in the nav bar. Loop over the tabs and get the title of each element in the nav bar to 
create an attribute for the elements that have a title The created attribute will have the value of the element title so the content will be
named data-named="Contents" and the index will be named data-named="Index"; this will dynamically work with you in the future if you going to 
add any other elements besides the contents and the index and have full control over them through the attribute data-named.

#installation

1- add script tab

very simple just add a script tag at the end of your html with the code in nav.js

2- add the code in your script

at the end of you building script copy the code from the nav.js and past in a tag script run it 100% sure will not effect on your code because i'm using the attributs that i created

3- create a js file in your project directory
copy the code from the nav.js and past it in the file you created. call that file from the html at the bottom of the body tag with script tag

Note ####### Important note
// under additional listener the last few lines of code which is working with a window listener RESIZE !!! 
i have been add them to test your code when you resize the window.
