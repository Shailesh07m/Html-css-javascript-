// DoM= document object model
//     object {} that represent the page you see in web browser
//     and provides you with an Api  to interact with it.
//    Web browsee constructs the DOM When it loads an HTML page
// Javascript can manipulate the DOM to change the document structure ,style and content.


document.body.style.backgroundColor='lightblue';
const user="Shailesh";

const mes= document.getElementById('mes')

mes.textContent += user === "" ? "Guest" : " "+user
