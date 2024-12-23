// 表單驗證
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('所有欄位均為必填！');
        return;
    }

    if (!validateEmail(email)) {
        alert('請輸入有效的電子郵件地址！');
        return;
    }

    alert('感謝您的聯繫，我們將盡快回覆您！');
    this.reset();
});

// 驗證電子郵件格式
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 圖片延遲加載 (Lazy Loading)
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: '0px 0px 50px 0px' }
    );

    lazyImages.forEach((img) => observer.observe(img));
});

// 滾動至聯繫表單
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// 背景音樂控制
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.5; // 設定音量
backgroundMusic.addEventListener('play', () => console.log('音樂開始播放'));
backgroundMusic.addEventListener('pause', () => console.log('音樂暫停'));
