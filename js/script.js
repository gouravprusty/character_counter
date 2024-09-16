const textarea = document.querySelector(".textarea");
const count = document.querySelector(".count");
const remain = document.querySelector(".remain");
textarea.addEventListener("keyup", () => {
    updateCounter();
});
updateCounter();
function updateCounter() {
    const text = textarea.value.trim().length;
    count.innerText = text;
    let max = textarea.getAttribute("maxLength");
    remain.innerText = max - text;
};