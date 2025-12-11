document.addEventListener('DOMContentLoaded', function () {
    // 1. Form ve Mesaj alanlarýný seçme
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    // 2. Form gönderildiðinde çalýþacak olay dinleyicisi
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Sayfanýn yeniden yüklenmesini engeller

        // 3. Form alanlarýný alma
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // 4. Doðrulama (Validation) Kontrolü
        if (name === '' || email === '' || subject === '' || message === '') {
            // Zorunlu Koþul: Hata mesajý gösterme
            displayMessage('Lütfen tüm alanlarý doldurun.', 'error');
        } else if (!validateEmail(email)) {
            // Zorunlu Koþul: Geçerli e-posta kontrolü
            displayMessage('Lütfen geçerli bir e-posta adresi girin.', 'error');
        } else {
            // Zorunlu Koþul: Baþarýlý mesajý gösterme ve formu sýfýrlama
            displayMessage('Mesajýnýz baþarýyla gönderildi! Teþekkür ederiz.', 'success');
            form.reset();
        }
    });

    // 5. Mesajý gösterme ve stilize etme iþlevi
    function displayMessage(msg, type) {
        // Tüm eski sýnýflarý temizle
        formMessage.className = 'hidden-message';

        // Yeni mesajý ayarla ve görünür yap
        formMessage.textContent = msg;
        formMessage.classList.add('show', type); // 'show' ve 'success'/'error' ekle

        // 5 saniye sonra mesajý gizle
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 5000);
    }

    // 6. Basit E-posta Formatý Doðrulayýcý
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
