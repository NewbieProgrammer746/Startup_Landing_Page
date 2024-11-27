// script.js
function toggleTheme() {
    // สลับคลาส 'dark-theme' ให้กับ <body>
    document.body.classList.toggle('dark-theme');

    // เปลี่ยนข้อความของปุ่มตามธีมปัจจุบัน
    const button = document.getElementById('theme-toggle-btn');
    if (document.body.classList.contains('dark-theme')) {
        button.textContent = 'เปลี่ยนเป็นธีมสว่าง';
    } else {
        button.textContent = 'เปลี่ยนเป็นธีมมืด';
    }

}

