# BOOKFLOW'u açma

## GitHub Pages ile yayınlama

Bu repo GitHub Pages için ayarlanmıştır. Dosyaları `main` dalına gönderince `.github/workflows/deploy-pages.yml` otomatik olarak üretim paketi (`dist`) oluşturur ve yayınlar.

GitHub deposunda **Settings → Pages → Build and deployment → Source** alanından **GitHub Actions** seçili olmalı. Yayın adresi: `https://enestekce.github.io/kitapokuyucu/`.

`index.html` dosyasına çift tıklama. Bu dosya React/TypeScript kaynak kodunu içerir ve tarayıcı bunu tek başına çalıştıramaz.

1. Bilgisayarında Node.js LTS kurulu olmalı.
2. Terminalde bir kez `corepack enable` çalıştır.
3. `start-bookflow.bat` dosyasına çift tıkla.
4. Tarayıcıda `http://127.0.0.1:5173` adresi açılır.

Alternatif olarak proje klasöründe:

```powershell
pnpm install
pnpm dev
```

Uygulama kapalıyken de PDF'lerin, kitaplığın, oturumun ve çizimlerin tarayıcının IndexedDB alanında saklı kalır. Tarayıcı verilerini temizlemediğin sürece kaybolmazlar.
