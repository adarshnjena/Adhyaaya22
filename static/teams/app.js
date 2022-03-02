function changeAtiveTab(event, tabID) {
  let element = event.target;
  while (element.nodeName !== "A") {
    element = element.parentNode;
  }
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll("li > a");
  tabContents = document
    .getElementById("tabs-id")
    .querySelectorAll(".tab-content > div");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove("text-white");
    aElements[i].classList.remove("bg-pink-600");
    aElements[i].classList.add("text-pink-600");
    aElements[i].classList.add("bg-white");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }
  element.classList.remove("text-pink-600");
  element.classList.remove("bg-white");
  element.classList.add("text-white");
  element.classList.add("bg-pink-600");
  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}
function changeAtiveTab2(event, tabID) {
  let element = event.target;
  while (element.nodeName !== "A") {
    element = element.parentNode;
  }
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll("li > a");
  tabContents = document
    .getElementById("tabs-id2")
    .querySelectorAll(".tab-content2 > div");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove("text-white");
    aElements[i].classList.remove("bg-pink-600");
    aElements[i].classList.add("text-pink-600");
    aElements[i].classList.add("bg-white");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }
  element.classList.remove("text-pink-600");
  element.classList.remove("bg-white");
  element.classList.add("text-white");
  element.classList.add("bg-pink-600");
  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}

// function interceptClickEvent(e) {
//   var href;
//   var target = e.target || e.srcElement;
//   console.log('click', e)
//   if (target.tagName === 'a') {
//       href = target.getAttribute('href');
//       console.log(href);
//       //put your logic here...
//       if (href.indexOf('#') != 0) {
//           window.top.postMessage(`navigate:${href}`, '*');
//          //tell the browser not to respond to the link click
//          e.preventDefault();
//       }
//   }
// }


// //listen for link click events at the document level
// if (document.addEventListener) {
//   document.addEventListener('click', interceptClickEvent);
// } else if (document.attachEvent) {
//   document.attachEvent('onclick', interceptClickEvent);
// }