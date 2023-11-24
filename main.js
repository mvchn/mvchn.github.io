const modal = document.getElementById("customModal");

const button = document.getElementById("modalFormOpen");

const close = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
    gtag('event', 'modal_open', {});
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
