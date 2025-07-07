// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sepalLengthInput = document.getElementById('sepal_length');
    const sepalWidthInput = document.getElementById('sepal_width');
    const petalLengthInput = document.getElementById('petal_length');
    const petalWidthInput = document.getElementById('petal_width');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    // **PERUBAHAN PENTING DI SINI:** Sesuaikan URL API dengan endpoint Gradio.
    // Biasanya '/run/predict' untuk Gradio Apps.
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

        // **PERUBAHAN PENTING DI SINI:** Struktur data disesuaikan untuk API Gradio.
        // Gradio biasanya mengharapkan input sebagai array di dalam properti 'data'.
        const data = {
            "data": [sepalLength, sepalWidth, petalLength, petalWidth]
        };

        predictionResult.textContent = "Predicting...";
        predictionResult.style.color = "#007BFF";

        try {
            const response = await fetch(API_URL, {
                method: 'POST', // Metode POST sudah benar
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorBody = await response.text(); // Membaca body error sebagai teks
                throw new Error(`HTTP error! Status: ${response.status} - ${errorBody}`);
            }

            const result = await response.json();
            // **PERUBAHAN PENTING DI SINI:** Cara mengakses hasil prediksi dari respons Gradio.
            // Hasil biasanya ada di 'result.data[0]'
            predictionResult.textContent = result.data[0] || "Prediction not available."; 
            predictionResult.style.color = "#28A745"; // Green for success
        } catch (error) {
            console.error('Error during prediction:', error);
            predictionResult.textContent = `Error: ${error.message}. Please check the API URL and your input.`;
            predictionResult.style.color = "red";
        }
    });
});