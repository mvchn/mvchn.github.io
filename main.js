const modal = document.getElementById("customModal");

const button = document.getElementById("modalFormOpen");

const close = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
    const event = {
        'event_category': 'engagement',
        'event_label': 'Schedule a meeting'
    }

    gtag('event', 'modal_open', event);

    console.log('Modal Opened', event);
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
