document.addEventListener('DOMContentLoaded', () => {
    // HTML belgesi tamamen yüklendiğinde çalışacak kod
    const body = document.body;
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');

    // Yeni bir buton oluştur ve HTML'e ekle
    const button = document.createElement('button');
    button.textContent = 'Bana Tıkla!';
    body.appendChild(button);

    // Butona tıklama olayı ekle
    button.addEventListener('click', () => {
        if (heading.textContent === 'Merhaba Dünya! GitHub Pages\'e Hoş Geldiniz!') {
            heading.textContent = 'Harika Bir Tıklama Yaptın!';
            paragraph.textContent = 'JavaScript ile siteni daha etkileşimli hale getirebilirsin.';
            button.textContent = 'Tekrar Tıkla!';
        } else {
            heading.textContent = 'Merhaba Dünya! GitHub Pages\'e Hoş Geldiniz!';
            paragraph.textContent = 'Bu benim ilk web sitem.';
            button.textContent = 'Bana Tıkla!';
        }
    });

    console.log('Script yüklendi ve çalışıyor!');
});