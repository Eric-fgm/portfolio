// Funkcja do obliczenia średniej wartości piksela w obrazie
const calculateAveragePixelValue = (imageData: ImageData) => {
    const data = imageData.data;
    let sumR = 0,
        sumG = 0,
        sumB = 0;

    // Zsumuj wartości kanałów R, G i B dla każdego piksela
    for (let i = 0; i < data.length; i += 4) {
        sumR += data[i];
        sumG += data[i + 1];
        sumB += data[i + 2];
    }

    // Oblicz średnią wartość dla każdego kanału koloru
    const avgR = sumR / (data.length / 4);
    const avgG = sumG / (data.length / 4);
    const avgB = sumB / (data.length / 4);

    return { r: avgR, g: avgG, b: avgB };
};

// Funkcja do dostosowania balansu bieli na podstawie średniej wartości piksela w obrazie
const adjustWhiteBalance = (imageData: ImageData) => {
    const data = imageData.data;

    const averagePixelValue = calculateAveragePixelValue(imageData);

    // Oblicz różnicę między średnią wartością kanałów kolorów a wartościami rzeczywistymi pikseli
    const diffR = averagePixelValue.r - 128;
    const diffG = averagePixelValue.g - 128;
    const diffB = averagePixelValue.b - 128;

    // Dostosuj balans bieli na podstawie różnicy
    for (let i = 0; i < data.length; i += 4) {
        data[i] += diffR;
        data[i + 1] += diffG;
        data[i + 2] += diffB;
    }

    return imageData;
};

export default adjustWhiteBalance;
