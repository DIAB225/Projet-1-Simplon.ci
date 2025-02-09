document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showNotification");
    const notification = document.getElementById("notification");

    button.addEventListener("click", function () {
        notification.classList.add("show");

        // Masquer la notification après 3 secondes
        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    });
});
