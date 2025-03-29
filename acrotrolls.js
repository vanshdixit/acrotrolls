document.addEventListener("DOMContentLoaded", function () {
    const confessionInput = document.getElementById("confessionInput");
    const submitBtn = document.getElementById("submitBtn");
    const confessionList = document.getElementById("confessionList");

    submitBtn.addEventListener("click", function () {
        const confessionText = confessionInput.value.trim();
        
        if (confessionText === "") {
            alert("Please enter a confession before submitting.");
            return;
        }

        addConfession(confessionText);
        confessionInput.value = ""; // Clear input after submission
    });

    function addConfession(text) {
        const confessionDiv = document.createElement("div");
        confessionDiv.classList.add("confession");
        confessionDiv.textContent = text;
        
        confessionList.prepend(confessionDiv); // Add new confessions on top
    }
});
