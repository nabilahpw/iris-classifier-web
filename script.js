// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sepalLengthInput = document.getElementById('sepal_length');
    const sepalWidthInput = document.getElementById('sepal_width');
    const petalLengthInput = document.getElementById('petal_length');
    const petalWidthInput = document.getElementById('petal_width');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    // URL API seharusnya sudah benar, yaitu '/predict'
    // Contoh dari Postman adalah https://nabilahpw-iris.hf.space/predict
    const API_URL = 'https://nabilahpw-iris.hf.space/predict'; 
    // ^^^ Perhatikan: Ini BUKAN '/run/predict' lagi, tetapi '/predict'

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

        // --- PERUBAHAN PENTING DI SINI ---
        // Sesuaikan struktur data (body JSON) agar sama persis dengan yang berhasil di Postman
        const data = {
            "sepal_length": sepalLength.toString(), // Kirim sebagai string
            "sepal_width": sepalWidth.toString(),   // Kirim sebagai string
            "petal_length": petalLength.toString(), // Kirim sebagai string
            "petal_width": petalWidth.toString()    // Kirim sebagai string
        };
        // --- AKHIR PERUBAHAN PENTING ---

        predictionResult.textContent = "Predicting...";
        predictionResult.style.color = "#007BFF";

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`HTTP error! Status: ${response.status} - ${errorBody}`);
            }

            const result = await response.json();
            // --- PERUBAHAN PENTING DI SINI ---
            // Akses hasil prediksi dari properti 'label' atau 'prediction'
            // Berdasarkan Postman, responsnya adalah {"label": "Iris-setosa", "prediction": "0"}
            predictionResult.textContent = result.label || "Prediction not available."; 
            // Atau jika Anda ingin menampilkan nilai numeriknya: result.prediction
            // predictionResult.textContent = result.prediction || "Prediction not available.";
            // --- AKHIR PERUBAHAN PENTING ---

            predictionResult.style.color = "#28A745"; // Green for success
        } catch (error) {
            console.error('Error during prediction:', error);
            predictionResult.textContent = `Error: ${error.message}. Please check the API URL and your input.`;
            predictionResult.style.color = "red";
        }
    });
});