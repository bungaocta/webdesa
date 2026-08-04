// sejarah section
const sejarahData = {
    title: "Sejarah Desa Makasari",
    teks: "Desa Makasari berawal dari pemekaran Desa Gunung Endut yang digagas oleh para tokoh masyarakat sejak tahun 1977 dan resmi terlaksana pada 20 Agustus 1980. Pemekaran ini melahirkan dua desa, yaitu Desa Gunung Endut sebagai desa induk dan Desa Makasari sebagai desa hasil pemekaran. Gagasan pemekaran ini digagas oleh empat tokoh, yakni Bapak M. Dharma Suganda, Bapak Letnan Madsari, Bapak Aripin Abas, dan Ibu Hj. Yoyoh.\n\nSejak berdiri hingga tahun 1996, Desa Makasari dipimpin oleh Kepala Desa pertama, Bapak O. Djajuli, yang berhasil membawa desa ini sejajar dengan desa-desa lain, bahkan pernah menjadi desa percontohan dan desa administrasi terbaik. Kepemimpinan kemudian dilanjutkan oleh Bapak Pupud Saepudin sebagai Kepala Desa kedua (1996–2002), yang meneruskan program pembangunan yang telah dirintis pendahulunya.\n\nSelanjutnya, kepemimpinan Desa Makasari berlanjut melalui proses demokrasi pemilihan kepala desa. Bapak Eman Sulaeman terpilih sebagai Kepala Desa ketiga periode 2002–2007, kemudian Bapak Pupud Saepudin kembali terpilih untuk masa jabatan kedua sebagai Kepala Desa keempat periode 2007–2013. Pola pergantian kepemimpinan ini menunjukkan proses regenerasi kepemimpinan desa yang berjalan melalui mekanisme pemilihan yang demokratis.\n\nPada periode 2013–2019, Bapak H. Romli terpilih sebagai Kepala Desa kelima setelah bersaing dengan dua calon lainnya. Namun, beliau wafat pada 10 Agustus 2018 sebelum masa jabatannya berakhir, sehingga Bupati Sukabumi melalui Camat Kalapanunggal menunjuk Bapak Dede Supriatna, SE sebagai Pejabat Kepala Desa untuk mengisi kekosongan pemerintahan hingga pemilihan berikutnya digelar.\n\nPada 17 November 2019, dilaksanakan pemilihan Kepala Desa Makasari yang keenam secara serentak dengan diikuti lima calon. Ibu Rina Nuraeni, S.ST., M.Kes terpilih dengan perolehan suara dominan sebagai Kepala Desa Makasari untuk periode 2019–2025, melanjutkan estafet kepemimpinan desa dengan harapan membawa Desa Makasari menjadi lebih maju dan makmur."
}

function renderSejarah(data) {
    document.getElementById("sejarah-title").textContent = data.title;

    const teksEl = document.getElementById("sejarah-teks");
    teksEl.textContent = data.teks;

    const toggleBtn = document.getElementById("sejarah-toggle");

    const isOverFlowing = teksEl.scrollHeight > teksEl.clientHeight;

    if (isOverFlowing) {
        toggleBtn.hidden = false;
        toggleBtn.addEventListener("click", () => {
            teksEl.classList.toggle("expanded");
            const isExpanded = teksEl.classList.contains("expanded");
            toggleBtn.textContent = isExpanded ? "Tutup" : "Baca Selengkapnya";
        });
    }
}

renderSejarah(sejarahData);

// visi misi section
const visiMisiData = {
    visi: "Mewujudkan desa yang mandiri, sejahtera, dan berbudaya.",
    misi: [
        {
            judul: "Meningkatkan kualitas pelayanan publik",
            tujuan: [
                {
                    judul: "Digitalisasi kualitas pelayanan publik",
                    sasaran: [
                        "Semua layanan surat bisa online",
                        "Waktu layanan berkurang 50%"
                    ]
                },
                {
                    judul: "Peningkatan kompetensi perangkat desa",
                    sasaran: [
                        "Pelatihan rutin tiap kuartal"
                    ]
                }
            ]
        },
        {
            judul: "Mengembangkan ekonomi lokal",
            tujuan: [
                {
                    judul: "Pemberdayaan UMKM",
                    sasaran: [
                        "20 UMKM baru terdaftar per tahun"
                    ]
                }
            ]
        }
    ]
};

function renderVisiMisi(data) {
    document.getElementById("visi-text").textContent = data.visi;

    const misiList = document.getElementById("misi-list");
    misiList.innerHTML = "";

    data.misi.forEach((misi) => {
        const li = document.createElement("li");
        li.classList.add("misi-item");

        const btn = document.createElement("button");
        btn.classList.add("misi-item-title");
        btn.textContent = misi.judul;

        const tujuanWrapper = renderTujuanList(misi.tujuan);

        btn.addEventListener("click", () => {
            tujuanWrapper.classList.toggle("open");
            btn.classList.toggle("open");
        });

        li.appendChild(btn);
        li.appendChild(tujuanWrapper);
        misiList.appendChild(li);
    });
}

function renderTujuanList(tujuanArray) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("tujuan-wrapper");

    const title = document.createElement("h3");
    title.classList.add("nested-title");
    title.textContent = "Tujuan";
    wrapper.appendChild(title);

    const ul = document.createElement("ul");
    ul.classList.add("tujuan-list");

    tujuanArray.forEach((tujuan) => {
        const li = document.createElement("li");
        li.classList.add("tujuan-item");

        const btn = document.createElement("button");
        btn.classList.add("tujuan-item-title");
        btn.textContent = tujuan.judul;

        const sasaranWrapper = renderSasaranList(tujuan.sasaran);

        btn.addEventListener("click", () => {
            sasaranWrapper.classList.toggle("open");
            btn.classList.toggle("open");
        });

        li.appendChild(btn);
        li.appendChild(sasaranWrapper);
        ul.appendChild(li);
    });

    wrapper.appendChild(ul);
    return wrapper;
}

function renderSasaranList(sasaranArray) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("sasaran-wrapper");

    const title = document.createElement("h3");
    title.classList.add("nested-title");
    title.textContent = "Sasaran";
    wrapper.appendChild(title);

    const ul = document.createElement("ul");
    ul.classList.add("sasaran-list");

    sasaranArray.forEach((sasaran) => {
        const li = document.createElement("li");
        li.textContent = sasaran;
        ul.appendChild(li);
    })

    wrapper.appendChild(ul);
    return wrapper;
}

renderVisiMisi(visiMisiData);

// struktur organisasi section
const orgData = [
    { id: 1, jabatan: "Kepala Desa", nama: "H. Sutarjo", foto: "assets/Gufron_Al_Bantani.jpg", atasan: null},
    { id: 2, jabatan: "Sekretatis Desa", nama: "Rina Wijaya", foto: "assets/Gufron_Al_Bantani.jpg", atasan: 1},
    { id: 3, jabatan: "Bendahara Desa", nama: "Agus Salim", foto: "assets/Gufron_Al_Bantani.jpg", atasan: 1},
    { id: 4, jabatan: "Kaur Umum", nama: "Dedi Kurnia", foto: "assets/Gufron_Al_Bantani.jpg", atasan: 2},
    { id: 5, jabatan: "Kaur Keuangan", nama: "Yuni Astuti", foto: "assets/Gufron_Al_Bantani.jpg", atasan: 3}
];

function buildNode(item, allData) {
    const li = document.createElement("li");

    const card = document.createElement("div");
    card.classList.add("org-card");
    card.innerHTML = `
        <img src="${item.foto}" alt="${item.nama}" class="org-card-foto">
        <div class="org-card-info">
            <h3 class="org-card-jabatan">${item.jabatan}</h3>        
            <p class="org-card-nama">${item.nama}</p>
        </div>
    `;
    li.appendChild(card);

    const children = allData.filter((d) => d.atasan === item.id);
    if (children.length > 0) {
        const ul = document.createElement("ul");
        children.forEach((child) => {
            ul.appendChild(buildNode(child, allData));
        });
        li.appendChild(ul);
    }

    return li;
}

function renderOrgChart(data) {
    const container = document.getElementById("org-chart");
    const roots = data.filter((d) => d.atasan === null);

    const treeRoot = document.createElement("ul");
    treeRoot.classList.add("org-tree");
    roots.forEach((root) => {
        treeRoot.appendChild(buildNode(root, data));
    });

    container.appendChild(treeRoot);
}

renderOrgChart(orgData)