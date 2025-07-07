# 🌸 Iris Flower Classifier Web App 🌸

Aplikasi web sederhana untuk mengklasifikasikan spesies bunga Iris berdasarkan fitur-fitur fisiknya (panjang kelopak, lebar kelopak, panjang mahkota, dan lebar mahkota). Aplikasi ini menggunakan model Decision Tree yang di-deploy sebagai API di Hugging Face Spaces, dan frontend web ini berfungsi sebagai antarmuka untuk berinteraksi dengan API tersebut.

## ✨ Fitur
- **Klasifikasi Iris**: Memprediksi spesies Iris (Setosa, Versicolor, atau Virginica) berdasarkan input pengguna.
- **Antarmuka Intuitif**: Desain web yang bersih dan mudah digunakan.
- **Tema Visual Bunga Iris**: Tampilan visual yang menenangkan dengan nuansa ungu pastel dan sentuhan bunga Iris.

## 🚀 Demo Langsung
Anda dapat mencoba aplikasi ini secara langsung melalui URL berikut:

[https://iris-classifier-web.vercel.app/](https://iris-classifier-web.vercel.app/)

## 🛠️ Teknologi yang Digunakan
- **Frontend**: HTML, CSS (dengan tema kustom), JavaScript
- **Backend (API)**: Model Decision Tree (Python, Scikit-learn) di-deploy di Hugging Face Spaces
- **Deployment Frontend**: Vercel

## 📄 Struktur Proyek
.
iris-classifier/
├── index.html    # Struktur dasar halaman web
├── style.css     # Styling dan tema visual aplikasi
└── script.js     # Logika interaksi dengan API

## ⚙️ Cara Menjalankan Secara Lokal (Opsional)
Jika Anda ingin menjalankan proyek ini di komputer lokal Anda:

1. Clone repositori ini:
   ```bash
   git clone https://github.com/nabilahpw/iris-classifier-web.git
   cd iris-classifier-web

Buka index.html:
Cukup buka file index.html di browser web pilihan Anda. Tidak ada server lokal yang diperlukan karena ini adalah aplikasi static murni.

🔗 API Backend
Aplikasi ini berinteraksi dengan API klasifikasi bunga Iris yang di-deploy di Hugging Face Spaces. API ini menerima input sepal_length, sepal_width, petal_length, dan petal_width dalam format JSON dan mengembalikan prediksi spesies Iris.

URL API: https://nabilahpw-iris.hf.space/predict

💖 Kontribusi
Jika Anda memiliki saran atau ingin berkontribusi, silakan buka issue atau buat pull request.

Selamat menikmati aplikasi klasifikasi bunga Iris Anda!
