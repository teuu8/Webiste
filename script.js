document.addEventListener("DOMContentLoaded", function() {
    console.log("Gorilla Tag Copy Tips Loaded!");

    // Example: Show an alert when clicking on a tip
    document.querySelectorAll("section p").forEach(p => {
        p.addEventListener("click", function() {
            alert("Tip: " + this.innerText);
        });
    });
});
