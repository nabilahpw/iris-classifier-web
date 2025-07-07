document.addEventListener('DOMContentLoaded', () => {
    const sepalLengthInput = document.getElementById('sepal_length');
    const sepalWidthInput = document.getElementById('sepal_width');
    const petalLengthInput = document.getElementById('petal_length');
    const petalWidthInput = document.getElementById('petal_width');
    const predictButton = document.getElementById('predictButton');
    const predictionResult = document.getElementById('predictionResult');

    // Replace with your actual Hugging Face Spaces API URL
    const API_URL = 'https://nabilahpw-iris.hf.space/'; 

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

        const data = {
            sepal_length: sepalLength,
            sepal_width: sepalWidth,
            petal_length: petalLength,
            petal_width: petalWidth
        };

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
                // Check if the response is JSON, if not, try to read as text
                const errorBody = await response.text();
                throw new Error(`HTTP error! Status: ${response.status} - ${errorBody}`);
            }

            const result = await response.json();
            predictionResult.textContent = result.prediction || "Prediction not available.";
            predictionResult.style.color = "#28A745"; // Green for success
        } catch (error) {
            console.error('Error during prediction:', error);
            predictionResult.textContent = `Error: ${error.message}. Please check the API URL and your input.`;
            predictionResult.style.color = "red";
        }
    });
});