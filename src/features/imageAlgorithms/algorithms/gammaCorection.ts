const applyGammaCorrection = (imageData: ImageData, gamma: number) => {
    const data = imageData.data;
    const gammaCorrection = 1 / gamma;

    // Korekcja gamma dla każdego piksela
    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.pow(data[i] / 255, gammaCorrection) * 255; // Skorygowanie składowej czerwonej
        data[i + 1] = Math.pow(data[i + 1] / 255, gammaCorrection) * 255; // Skorygowanie składowej zielonej
        data[i + 2] = Math.pow(data[i + 2] / 255, gammaCorrection) * 255; // Skorygowanie składowej niebieskiej
    }

    return imageData;
}

export default applyGammaCorrection