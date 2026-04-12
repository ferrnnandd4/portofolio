# 📱 Setup Instagram Real-Time Data

Halaman portfolio Anda sekarang menampilkan data Instagram **real-time** dengan followers, posts, dan following yang terupdate otomatis!

## 🚀 Cara Setup (5 Menit)

### Langkah 1: Dapatkan API Key dari RapidAPI
1. Kunjungi: https://rapidapi.com/
2. Daftar atau login dengan akun Anda
3. Cari "Instagram API" di search bar
4. Pilih salah satu API yang recommended:
   - **Instagram120** (recommended): https://rapidapi.com/hashcode199/api/instagram120
   - Atau alternatif lain yang mendukung fetch user info

### Langkah 2: Subscribe ke API (Gratis)
1. Klik tombol "Subscribe" (gratis untuk tier basic)
2. Pilih "Basic" plan (gratis)
3. Klik "Subscribe"

### Langkah 3: Copy API Key
1. Setelah subscribe, klik tab "Code Snippets" atau "Endpoints"
2. Copy **API Key** Anda (terlihat di bagian header)
3. API key terlihat seperti: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Langkah 4: Update File JavaScript
1. Buka file `script.js` di project Anda
2. Cari baris ini:
   ```javascript
   const INSTAGRAM_API = {
       apiKey: "YOUR_RAPIDAPI_KEY_HERE", // <- Ganti ini
       apiHost: "instagram-api1.p.rapidapi.com"
   };
   ```
3. Ganti `YOUR_RAPIDAPI_KEY_HERE` dengan API Key Anda
4. Contoh:
   ```javascript
   apiKey: "abc123def456ghi789jkl012", // ← API Key Anda
   ```

### Langkah 5: Update Username Instagram
Dalam file `index.html`, ganti username di setiap card:

**Untuk Client Section:**
```html
<div class="client-card" data-instagram-username="weknowlah">
    <!-- Ganti "weknowlah" dengan username Instagram asli -->
</div>
```

**Untuk Partnership Section:**
```html
<div class="partnership-card" data-instagram-username="brand1">
    <!-- Ganti "brand1" dengan username Instagram asli -->
</div>
```

## ✅ Verifikasi Setup

Setelah setup selesai:
1. Buka halaman portfolio di browser
2. Buka **Developer Tools** (F12)
3. Buka tab **Console**
4. Jika setup benar, akan terlihat:
   - ✅ "Website Portfolio Ready 🚀"
   - Data followers/posts/following akan terupdate

Jika ada error:
- ❌ Pastikan API Key benar
- ❌ Pastikan username Instagram tepat
- ❌ Cek koneksi internet Anda

## 🔄 Auto-Refresh Data

Data akan otomatis di-refresh setiap:
- **1 jam** (3600000 milliseconds)

Jika ingin lebih cepat, ubah nilai di `script.js`:
```javascript
// Refresh setiap 30 menit
setInterval(loadAllInstagramData, 1800000);

// Refresh setiap 5 menit
setInterval(loadAllInstagramData, 300000);
```

## ⚠️ Batasan Gratis

API gratis RapidAPI memiliki batasan:
- **500 requests per bulan** (gratis)
- Jika butuh lebih, upgrade ke paid plan
- Atau gunakan Instagram Graph API official (lebih kompleks)

## 🎯 Troubleshooting

### Data Tetap Menunjukkan "-"
- Pastikan API Key sudah diupdate dengan benar
- Pastikan username Instagram valid
- Buka Console (F12) untuk lihat error message

### Error: "API Error 403"
- API Key tidak valid atau sudah expired
- Ambil API Key baru dari RapidAPI dashboard

### Error: "CORS error"
- Beberapa API tidak support CORS dari browser
- Gunakan yang sudah direkomendasikan di atas

## 📚 Alternatif API

Jika RapidAPI tidak cocok, bisa menggunakan:
1. **Instagram Graph API (Official)** - Paling stabil tapi setup kompleks
2. **Instafeed.js** - Library khusus Instagram
3. **Scraper API** - Untuk scraping data langsung

## 💡 Tips

- Simpan API Key Anda dengan aman
- Jangan share API Key di public repository
- Jika ada masalah, cek dokumentasi API di RapidAPI

Selamat! Halaman Anda sekarang menampilkan data Instagram real-time! 🎉
