// slideshow hero section (masih pake data dummy)
const dummySlides = [
    { foto: "assets/hero-section/ouroboros.jpg", caption: "Membangun desa mandiri melalui keterbukaan informasi publik."},
    { foto: "assets/hero-section/liquid-art-paint-8920x3000-25904.jpg", caption: "Temukan potensi wilayah dan data kependudukan terkini."}
];

const slider = document.getElementById("hero-slider");

function loadHeroSlides() {
    dummySlides.forEach((slide, index) => {
        const img = document.createElement("img");
        img.src = slide.foto;
        img.classList.add("slide");
        if (index === 0) img.classList.add("active");

        const caption = document.createElement("p");
        caption.textContent = slide.caption;
        caption.classList.add("hero-caption");
        if (index === 0) caption.classList.add("active");

        slider.appendChild(img);
        slider.appendChild(caption);
    });

    startSlideShow();
}

function startSlideShow() {
    const imgs = document.querySelectorAll(".hero-slider .slide");
    const captions = document.querySelectorAll(".hero-slider .hero-caption");
    let currentIndex = 0;

    setInterval(() => {
        imgs[currentIndex].classList.remove("active");
        captions[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % imgs.length;

        imgs[currentIndex].classList.add("active");
        captions[currentIndex].classList.add("active");
    }, 4000);
}

loadHeroSlides();

// data sum administrasi penduduk di homepage
const dummyStatistik = [
    { jumlah: 1240, label: "Penduduk"},
    { jumlah: 620, label: "Laki-laki"},
    { jumlah: 320, label: "Kepala Keluarga"},
    { jumlah: 620, label: "Perempuan"},
    { jumlah: 15, label: "Penduduk Sementara"},
    { jumlah: 8, label: "Mutasi Penduduk"},
];

function renderStatistik(data) {
    const grid = document.getElementById("statistik-grid");
    grid.innerHTML = "";

    data.forEach((item) => {
        const dl = document.createElement("dl");
        dl.classList.add("stat-item");

        const dt = document.createElement("dt");
        dt.textContent = item.jumlah.toLocaleString("id-ID");

        const dd = document.createElement("dd");
        dd.textContent = item.label;

        dl.appendChild(dt);
        dl.appendChild(dd);
        grid.appendChild(dl);
    });
}

renderStatistik(dummyStatistik);
