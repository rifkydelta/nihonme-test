# Prototype Validity Test

Aplikasi untuk menguji validitas prototipe dengan integrasi form Google.

## Konfigurasi

### URL Configuration

Aplikasi ini menggunakan file konfigurasi untuk menyimpan URL. Untuk mengatur URL:

1. Salin file `src/config/urls.example.json` ke `src/config/urls.json`
2. Edit `urls.json` dengan URL yang sesuai:
   ```json
   {
     "urlwebtest": "https://your-website-url.com",
     "forms": {
       "media": "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
       "material": "https://forms.gle/YOUR_FORM_ID"
     }
   }
   ```

Catatan: File `urls.json` tidak akan di-commit ke repository untuk keamanan. Pastikan untuk menyimpan salinan konfigurasi Anda di tempat yang aman.

## Pengembangan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Build untuk production:
   ```bash
   npm run build
   ```

## Deployment

Aplikasi ini menggunakan GitHub Pages untuk deployment. Deployment otomatis akan berjalan setiap kali ada push ke branch `main`.

### Manual Deployment

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Push ke repository:
   ```bash
   git add .
   git commit -m "Update for deployment"
   git push origin main
   ```

3. Deployment akan otomatis berjalan melalui GitHub Actions

Aplikasi akan tersedia di: https://rifkydelta.github.io/nihonme-test/ 