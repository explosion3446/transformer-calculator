document.getElementById('hesaplaBtn').addEventListener('click', function() {
    // Giriş değerlerini al
    const va = parseFloat(document.getElementById('va').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    const frekans = parseFloat(document.getElementById('frekans').value);
    const akimYoğunlugu = parseFloat(document.getElementById('akimYoğunlugu').value);
    const b1 = parseFloat(document.getElementById('b1').value);
    const h1 = parseFloat(document.getElementById('h1').value);

    // Girişlerin boş olup olmadığını kontrol et
    if (isNaN(va) || isNaN(v1) || isNaN(v2) || isNaN(frekans) || isNaN(akimYoğunlugu) || isNaN(b1) || isNaN(h1)) {
        document.getElementById('uyari').style.display = 'block';
        document.getElementById('sonuclar').style.display = 'none';
        return;
    } else {
        document.getElementById('uyari').style.display = 'none';
    }

    // Hesaplamalar
    const primerTur = Math.round(v1 * 10000 / (4.44 * frekans * b1 * h1));
    const seconderTur = Math.round(v2 * 10000 / (4.44 * frekans * b1 * h1));

    const primerTel = Math.sqrt((va / v1) / akimYoğunlugu * (4 / Math.PI)).toFixed(2);
    const seconderTel = Math.sqrt((va / v2) / akimYoğunlugu * (4 / Math.PI)).toFixed(2);

    // Sonuçları ekrana yazdır
    document.getElementById('primerTur').textContent = primerTur;
    document.getElementById('seconderTur').textContent = seconderTur;
    document.getElementById('primerTel').textContent = primerTel;
    document.getElementById('seconderTel').textContent = seconderTel;

    // Sonuçları görünür yap
    document.getElementById('sonuclar').style.display = 'block';
});
