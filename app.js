const closeBtn = document.querySelector('.icon');
const contentBox = document.querySelector('.models-content-box');

closeBtn.addEventListener("click", function(){
    contentBox.style.visibility = "hidden"
}
);

function openContent(){
    contentBox.style.visibility = "visible"

}
