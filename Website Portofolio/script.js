let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`Halo, saya ingin menghubungi Anda.

Nama: ${name}
Email: ${email}
No. HP: ${phone}
Subject: ${subject}

Pesan:
${message}`;

    const whatsappURL =
`https://wa.me/6281335156147?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});