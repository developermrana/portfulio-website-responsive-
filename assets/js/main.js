/*--== navber section start ==--*/
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right= "0";
} 
function closemenu() {
    sidemenu.style.right= "-250px";
} 
/*--== navber section end ==--*/

/*--== about section start ==--*/
var tablinks =  document.getElementsByClassName("tab-links");
var tabcontents =  document.getElementsByClassName("tab-contents");
 
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*--== about section end ==--*/

// contact form -----
const scriptURL = '<SCRIPT URL>'
const form = document.forms['submit-to-google-sheet']
const smg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})