// const btn = document.getElementById("b-t-n") as HTMLButtonElement | null;
// const skills = document.getElementById("skill") as HTMLElement | null;

// btn?.addEventListener("click", () => {
//     if (skills) {
//         skills.style.display = "none";
//     }
// });


const btn = document.getElementById("b-t-n") as HTMLButtonElement | null;
const skills = document.getElementById("skill") as HTMLElement | null;

btn?.addEventListener("click", () => {
    if (skills) {
        if (skills.style.display === "block") {
            skills.style.display = "none"; // Show the content again
            
        } else {
            skills.style.display = "block";  // Hide the content
        }
    }
});
