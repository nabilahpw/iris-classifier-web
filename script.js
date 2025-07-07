// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sepalLengthInput = document.getElementById('sepal_length');
    const sepalWidthInput = document.getElementById('sepal_width');
    const petalLengthInput = document.getElementById('petal_length');
    const petalWidthInput = document.getElementById('petal_width');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    // Pastikan URL API ini sudah benar untuk aplikasi Gradio Anda
    // Biasanya ini adalah URL dasar Space Anda diikuti dengan '/run/predict'
    const API_URL = 'https://nabilahpw-iris.hf.space/run/predict';

    predictButton.addEventListener('click', async () => {
        const sepalLength = parseFloat(sepalLengthInput.value);
        const sepalWidth = parseFloat(sepalWidthInput.value);
        const petalLength = parseFloat(petalLengthInput.value);
        const petalWidth = parseFloat(petalWidthInput.value);

        if (isNaN(sepalLength) || isNaN(sepalWidth) || isNaN(petalLength) || isNaN(petalWidth)) {
            predictionResult.textContent = "Please enter valid numbers for all fields.";
            predictionResult.style.color = "red";
            return;
        }

        // Struktur data yang diharapkan oleh API Gradio (sebagai array dalam properti 'data')
        const data = {
            "data": [sepalLength, sepalWidth, petalLength, petalWidth]
        };

        predictionResult.textContent = "Predicting...";
        predictionResult.style.color = "#007BFF";

        try {
            const response = await fetch(API_URL, {
                method: 'POST', // Metode POST adalah yang diharapkan oleh Gradio API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorBody = await response.text(); // Baca body error untuk detail lebih lanjut
                throw new Error(`HTTP error! Status: ${response.status} - ${errorBody}`);
            }

            const result = await response.json();
            // Hasil prediksi dari Gradio API biasanya ada di 'result.data[0]'
            predictionResult.textContent = result.data[0] || "Prediction not available.";
            predictionResult.style.color = "#28A745"; // Warna hijau untuk sukses
        } catch (error) {
            console.error('Error during prediction:', error);
            predictionResult.textContent = `Error: ${error.message}. Please check the API URL and your input.`;
            predictionResult.style.color = "red";
        }
    });
});