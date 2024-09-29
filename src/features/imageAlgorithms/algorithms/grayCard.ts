// Funkcja do przekształcenia obrazu do skali szarości
function convertToGrayscale(imageData: ImageData) {
    const data = imageData.data;

    // Przekształć piksele obrazu na skale szarości
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
    }

    return imageData;
}

// Funkcja do uzyskania średniego koloru szarej karty
function getGrayCardColor(imageData: ImageData, cardRegion: { x: number; y: number; width: number; height: number }) {
    const data = imageData.data;
    const width = imageData.width;

    let totalR = 0, totalG = 0, totalB = 0;
    let count = 0;

    // Oblicz sumy składowych RGB w regionie szarej karty
    for (let y = cardRegion.y; y < cardRegion.y + cardRegion.height; y++) {
        for (let x = cardRegion.x; x < cardRegion.x + cardRegion.width; x++) {
            const index = (y * width + x) * 4;
            totalR += data[index];
            totalG += data[index + 1];
            totalB += data[index + 2];
            count++;
        }
    }

    // Oblicz średnią wartość RGB dla szarej karty
    const avgR = totalR / count;
    const avgG = totalG / count;
    const avgB = totalB / count;

    return { r: avgR, g: avgG, b: avgB };
}

// Funkcja do dostosowania balansu bieli na podstawie koloru szarej karty
function adjustWhiteBalance(imageData: ImageData, cardRegion: { x: number; y: number; width: number; height: number }) {
    const data = imageData.data;

    const grayscaleImageData = convertToGrayscale(imageData);
    const grayCardColor = getGrayCardColor(grayscaleImageData, cardRegion);

    // Oblicz współczynniki korekcji balansu bieli
    const rFactor = grayCardColor.r / 255;
    const gFactor = grayCardColor.g / 255;
    const bFactor = grayCardColor.b / 255;


    // Stosuj korekcję balansu bieli do każdego piksela obrazu
    for (let i = 0; i < data.length; i += 4) {
        data[i] *= rFactor; // Składowa czerwona
        data[i + 1] *= gFactor; // Składowa zielona
        data[i + 2] *= bFactor; // Składowa niebieska
    }

    return imageData;
}

export default adjustWhiteBalance