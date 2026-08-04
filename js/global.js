const headerNav = document.querySelector(".header-nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        headerNav.classList.add("scrolled");
    } else {
        headerNav.classList.remove("scrolled");
    }
});

// hamburger menu 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
})

// Data kontak & email di footer
const dummyKontak = {
    contact_persons: [
        {nama: "Budi Santoso", no_hp: "0812-3456-7890"},
        {nama: "Siti Aminah", no_hp: "0823-4567-8901"}
    ],
    email: "desamakasari@example.id",
};

function renderKontak(data) {
    const list = document.getElementById("footer-contacts");
    list.innerHTML = "";

    data.contact_persons.forEach((person) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${person.nama}</strong> — ${person.no_hp}`;
        list.appendChild(li);
    });

    document.getElementById("footer-email").textContent = data.email;
}

renderKontak(dummyKontak);