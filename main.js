// const btn = document.getElementById("b-t-n") as HTMLButtonElement | null;
// const skills = document.getElementById("skill") as HTMLElement | null;
// btn?.addEventListener("click", () => {
//     if (skills) {
//         skills.style.display = "none";
//     }
// });
var btn = document.getElementById("b-t-n");
var skills = document.getElementById("skill");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if (skills) {
        if (skills.style.display === "none") {
            skills.style.display = "block"; // Show the content again
        }
        else {
            skills.style.display = "none"; // Hide the content
        }
    }
});
