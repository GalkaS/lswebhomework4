// 1. Change the background color of the entire document to red
document.body.style.backgroundColor = "lightgreen";
// 2. Change the background color of just the "about me" portion to blue
document.getElementById("h1").style.backgroundColor = "lightblue";
// 3. Change the font-style of the entire document to sans-serif
document.getElementById("all").style.fontStyle = "sans-serif";
// 4. Add your nickname 
document.getElementById("nickname").innerHTML = "Gala"
// 5. Add your favorites
document.getElementById("favorites").innerHTML = "Favorite stuff here"
// 6. Add your hometown
document.getElementById("hometown").innerHTML = "Warsaw"
// 7. Iterate through each li and change the class to "listitem". 
// Add a style tag that sets a rule for "listitem" to make the color red.
var ul = document.querySelector('ul');
var li = ul.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {
	li[i].className = "listitem";
	li[i].style.color = "red";
}
// 8. Create a new `img` element and set its src attribute to a picture of you. Append that element to the page.
image = document.createElement("img");
image.src = "http://buzzguardian.com/wp-content/uploads/2016/03/gimi-cat-big-eyes-2.jpg";
image.width = "500";
document.body.appendChild(image);