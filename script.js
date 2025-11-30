const films = [
    { id: 1, title: "Avengers: Endgame (2019)", img: "img/avengers_endgame.jpg", available: true, 
      sinopsis: "Kekalahan yang menghancurkan di tangan Thanos, para Avengers yang tersisa harus bangkit dan melakukan upaya terakhir untuk membalikkan tindakan Thanos yang telah memusnahkan separuh kehidupan di alam semesta.",
      genre: "Action, Adventure, Sci-Fi", duration: "3h 1m", rating: "8.4/10" },
    
    { id: 2, title: "Parasite", img: "img/parasite.jpg", available: true, 
      sinopsis: "Sebuah keluarga miskin yang perlahan-lahan menyusup dan mengambil alih kehidupan sebuah keluarga kaya.",
      genre: "Drama, Thriller", duration: "2h 12m", rating: "8.6/10" },
    
    { id: 3, title: "Inside Out 2", img: "img/inside-out2.jpg", available: false, 
      genre: "Animation, Adventure" },
    
    { id: 4, title: "The Amazing Spiderman 2", img: "img/spider2.jpg", available: true, 
      sinopsis: "Kehidupan Riley yang kini berusia 13 tahun dan memasuki masa pubertas. Perkembangan ini menyebabkan perubahan besar di dalam Headquarters (pusat kendali pikiran).",
      genre: "Animation, Adventure, Comedy", duration: "1h 36m", rating: "8.0/10" },
    
    { id: 5, title: "Avatar 2", img: "img/avatar2.jpg", available: true, 
      sinopsis: "Jake Sully dan Neytiri yang kini telah berkeluarga. Mendapatkan ancaman dari manusia memaksa mereka untuk meninggalkan rumah dan mengungsi ke wilayah klan Metkayina di lautan Pandora.",
      genre: "Action, Adventure, Sci-Fi", duration: "3h 12m", rating: "7.6/10" },
    
    { id: 6, title: "A Killer Paradox", img: "img/a-killer-paradox.jpg", available: false, 
      genre: "Thriller, Mystery, Drama" },
    
    { id: 7, title: "Shark Fest: Bull Shark (2022)", img: "img/Bull_Shark.jpg", available: false,
      genre: "Documentary" },
    
    { id: 8, title: "Unbreakable", img: "img/unbreakble.jpg", available: true, 
      sinopsis: "David Dunn selamat dari kecelakaan kereta tanpa cedera, lalu ditemukan oleh Elijah Price yang meyakinkannya bahwa ia memiliki kekuatan super.",
      genre: "Action, Thriller", duration: "1h 46m", rating: "7.3/10" },
    
    { id: 9, title: "A House Of Dynamite", img: "img/a-house-of-dynamite.jpg", available: true, 
      sinopsis: "Mantan tentara bayaran yang hidupnya tenang kembali kacau ketika harus melindungi seorang wanita dari organisasi kejam, memaksanya kembali menggunakan kemampuan tempurnya.",
      genre: "Horror, Thriller, Mystery", duration: "1h 52m", rating: "6.8/10" },
    
    { id: 10, title: "Venom: Let There Be Carnage", img: "img/venom.jpg", available: true, 
      sinopsis: "Eddie Brock dan Venom harus menghentikan pembunuh berantai Cletus Kasady yang telah berubah menjadi Carnage, symbiote merah yang lebih ganas dan mematikan.",
      genre: "Action, Sci-Fi, Adventure", duration: "1h 37m", rating: "6.0/10" },
    
    { id: 11, title: "Train To Busan", img: "img/train-to-busan.jpg", available: false,
      genre: "Action, Horror, Thriller" },
    
    { id: 12, title: "The Gangster The Cop The Devil", img: "img/gangster.jpg", available: true, 
      sinopsis: "Aliansi tak terduga antara seorang bos gengster yang kejam dan seorang detektif yang ambisius untuk memburu seorang pembunuh berantai psikopat.",
      genre: "Drama, Thriller, Action", duration: "1h 49m", rating: "8.5/10" },
    
    { id: 13, title: "Orphan 2", img: "img/orphan2.jpg", available: false, genre: "Horror" },
    { id: 14, title: "Mr. Peabody & Sherman", img: "img/sherman.jpg", available: false, genre: "Animation" },
    { id: 15, title: "Zootopia", img: "img/zootopia.jpg", available: false, genre: "Comedy" },
    { id: 16, title: "Doolittle", img: "img/doolittle.jpg", available: false, genre: "Comedy" },
    { id: 17, title: "Arctic Dogs", img: "img/arctic-dogs.jpg", available: false, genre: "Animation" },
    { id: 18, title: "Ice Age", img: "img/ice-age.jpg", available: false, genre: "Animation" },
    { id: 19, title: "Slumberland", img: "img/slumberland.jpg", available: false, genre: "Comedy" },
    { id: 20, title: "Playing With Fire", img: "img/playing-with-fire.jpg", available: false, genre: "Comedy" },
    { id: 21, title: "Jurassic Park", img: "img/jurassic-park.jpg", available: false, genre: "Sci-Fi" },
    { id: 22, title: "Interstellar", img: "img/interstellar.jpg", available: false, genre: "Sci-Fi" },
    { id: 23, title: "Live Die Repeat", img: "img/Live-die-repeat.jpg", available: false, genre: "Sci-Fi" },
    { id: 24, title: "The Prestige", img: "img/the-prestige.jpg", available: false, genre: "Mystery" },
    { id: 25, title: "Mystery Island", img: "img/mistery-island.jpg", available: false, genre: "Mystery" },
    { id: 26, title: "Sinners", img: "img/Sinners.jpg", available: false, genre: "Horror" },
    { id: 27, title: "Armageddon", img: "img/Armageddon.jpg", available: false, genre: "Documentary" },
    { id: 28, title: "Ocean", img: "img/ocean.jpg", available: false, genre: "Documentary" },
    { id: 29, title: "Snow White", img: "img/snow-white.jpg", available: false, genre: "Documentary" }
];

const state = {
    user: null, //Menyimpan data user yang sedang login
    selectedFilm: null, //Menyimpan film yang sedang dipilih
    selectedSeats: [], // Menyimpan data kursi yang sedang dipilih
    seatsTaken: {}, // Menyimpan kursi yang sudah disimpan
    showHasilTiket: {}, //Menyimpan data tiket yang sudah dipesan
    currentGenre: 'all' // Menyimpan genre filter sesuai film yang dipilih
};

// Manipulation
const el = id => document.getElementById(id); //Memperpendek penulisan
const show = id => {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    el(id).classList.remove("hidden"); //Menampilkan satu section dan menyembunyikan yang lain
};

// Initialize app
document.addEventListener("DOMContentLoaded", () => { //Jalan ketika HTML selesai loading
    bindLogin(); // Event listener untuk form login (tombol login, guest)
    renderFilms(); // Menampilkan daftar film ke layar
    bindGenreFilter(); // Menampilkan macam -macam genre film
    bindMovieDetails(); //  Navigasi di halaman detail film (Choose seat, Back to Film)
    bindSeats(); // Pemilihan kursi (tombol pembeayaran, memeriksa apakah kursi sudah dipilih)
    bindPayment(); // Proses pembayaran (Tombol bayar sekarang, ringkasan tiket)
    bindPrint(); //  Rincian tiket (Tombol pesan lagi, selesai)
});

// Login
function bindLogin() {
    el("btn-login").onclick = () => {
        const user = el("inp-username").value.trim();
        const pass = el("inp-password").value.trim();
        if (user.length >= 3 && pass.length >= 4) {
            state.user = user;
            el("userBadge").textContent = user;
            show("screen-films");
        } else {
            el("login-error").textContent = "Username Minimal 3 Karakter, Password Minimal 4 Karakter";
            el("login-error").style.display = "block";
        }
    };
    
    el("btn-guest").onclick = () => {
        state.user = "Guest";
        el("userBadge").textContent = "Guest";
        show("screen-films");
    };
}

// Render Films
function renderFilms() {
    const container = el("filmsContainer");
    container.innerHTML = "";
    
    let filteredFilms = films;
    if (state.currentGenre !== 'all') {
        filteredFilms = films.filter(film => 
            film.genre && film.genre.toLowerCase().includes(state.currentGenre.toLowerCase())
        );
    }
    
    filteredFilms.forEach(film => {
        const div = document.createElement("div");
        div.className = "film";
        div.innerHTML = `
            <img src="${film.img}" alt="${film.title}">
            <button class="btn" ${!film.available ? "disabled" : ""} onclick="selectFilm(${film.id})">
                ${film.available ? "More Details" : "Full"}
            </button>
        `;
        container.appendChild(div);
    });
}

// Genre Filter
function bindGenreFilter() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            state.currentGenre = this.getAttribute('data-genre');
            renderFilms();
        });
    });
}


// Movie Details
function showMovieDetails(filmId) {
    const film = films.find(f => f.id === filmId);
    if (film) {
        state.selectedFilm = film;
        
        el("detail-poster").src = film.img;
        el("detail-title").textContent = film.title;
        el("detail-genre").textContent = film.genre || "Action, Adventure";
        el("detail-duration").textContent = film.duration || "2h 0m";
        el("detail-rating").textContent = film.rating || "8.0/10";
        el("detail-sinopsis").textContent = film.sinopsis;
        
        show("screen-movie-details");
    }
}

function bindMovieDetails() {
    el("btn-select-seats").onclick = () => {
        show("screen-seats");
        renderSeats();
    };
    
    el("btn-back-to-films").onclick = () => show("screen-films");
}

function selectFilm(id) {
    const film = films.find(x => x.id === id);
    if (!film) return;
    
    state.selectedFilm = film;
    state.selectedSeats = [];
    showMovieDetails(id);
}

// Seat Selection
function renderSeats() {
    const grid = el("seatsGrid");
    grid.innerHTML = "";
    
    for (let i = 1; i <= 40; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;
        seat.onclick = () => toggleSeat(i, seat);
        grid.appendChild(seat);
    }
    
    updateSelectedSeatsDisplay();
}

function toggleSeat(seatNumber, seatElement) {
    seatElement.classList.toggle("selected");
    const index = state.selectedSeats.indexOf(seatNumber);
    
    if (index >= 0) {
        state.selectedSeats.splice(index, 1);
    } else {
        state.selectedSeats.push(seatNumber);
    }
    
    updateSelectedSeatsDisplay();
}

function updateSelectedSeatsDisplay() {
    const display = state.selectedSeats.length === 0 ? "-" : state.selectedSeats.sort((a, b) => a - b).join(", ");
    el("selectedSeats").textContent = display;
}

function bindSeats() {
    el("toPayment").onclick = () => {
        if (state.selectedSeats.length === 0) {
            el("seat-error").textContent = "Pilih minimal 1 kursi!";
            el("seat-error").style.display = "block";
            return;
        }
        el("seat-error").style.display = "none";
        
        el("pay-film").textContent = state.selectedFilm.title;
        el("pay-seats").textContent = state.selectedSeats.join(", ");
        el("pay-total").textContent = "Rp" + (state.selectedSeats.length * 50000).toLocaleString();
        show("screen-payment");
    };
}

// Payment
function bindPayment() {
    el("doPay").onclick = () => {
        el("pay-status").textContent = "Memproses pembayaran...";
        setTimeout(() => {
            el("pay-status").textContent = "Pembayaran berhasil!";
            
            el("ticketMovieTitle").textContent = state.selectedFilm.title;
            el("ticketUser").textContent = state.user;
            el("ticketSeats").textContent = state.selectedSeats.join(", ");
            el("ticketPrice").textContent = "Rp" + (state.selectedSeats.length * 50000).toLocaleString();
            el("ticketTime").textContent = new Date().toLocaleString();
            
            show("screen-ticket");
        }, 1000);
    };
    
    el("orderAgain").onclick = () => show("screen-films");
}

// Print Ticket
function bindPrint() {
    el("printTicket").onclick = () => {
        const film = state.selectedFilm;
        const seats = state.selectedSeats;
        const basePrice = 50000;
        const paymentMethod = el("pay-method").value;
        const totalTickets = seats.length;
        const total = totalTickets * basePrice;
        
        el("ticket-poster").src = film.img;
        el("ticket-title").textContent = film.title;
        el("ticket-count").textContent = totalTickets + " Tiket";
        el("ticket-seats").textContent = seats.sort((a, b) => a - b).join(", ");
        el("ticket-price").textContent = "Rp. " + basePrice.toLocaleString();
        el("ticket-count-2").textContent = totalTickets;
        el("ticket-payment-method").textContent = paymentMethod;
        el("ticket-total").textContent = "Rp" + total.toLocaleString();
        
        show("screen-print-ticket");
    };
    
    el("orderLagi").onclick = () => show("screen-films");
    el("Selesai").onclick = () => {
        alert("Happy Watching! Thank you for using CGU Cinema");
        show("screen-login");
    };
}

window.selectFilm = selectFilm; // Bisa diakses dari mana saja (HTML)