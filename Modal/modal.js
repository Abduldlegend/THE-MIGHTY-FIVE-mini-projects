const modalbtn = document.querySelector(".btn-app");

const modal = document.querySelector(".modal");

const cancelbtn = document.querySelector(".cancel-icon");

modalbtn.addEventListener("click", () => {
    modal.style.display = 'block';
});

cancelbtn.addEventListener("click", () => {
    modal.style.display = 'none';
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
