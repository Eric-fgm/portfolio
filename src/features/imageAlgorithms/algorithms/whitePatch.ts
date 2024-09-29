// Funkcja do znajdowania białych punktów referencyjnych w obrazie
const findWhitePatches = (imageData: ImageData, threshold: number) => {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const whitePatches = [];

    // Przejdź przez piksele obrazu i znajdź białe punkty referencyjne
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            // Sprawdź, czy piksel jest wystarczająco jasny, aby być uznany za biały
            if (r > threshold && g > threshold && b > threshold) {
                whitePatches.push({ x: x, y: y });
            }
        }
    }

    return whitePatches;
}

// Funkcja do dostosowania balansu bieli na podstawie białych punktów referencyjnych
const adjustWhiteBalance = (imageData: ImageData, threshold: number) => {
    const data = imageData.data;
    const width = imageData.width;

    const whitePatches = findWhitePatches(imageData, threshold)

    // Znajdź średnią wartość pikseli w białych punktach referencyjnych
    let totalR = 0, totalG = 0, totalB = 0;
    for (let i = 0; i < whitePatches.length; i++) {
        const x = whitePatches[i].x;
        const y = whitePatches[i].y;
        const index = (y * width + x) * 4;
        totalR += data[index];
        totalG += data[index + 1];
        totalB += data[index + 2];
    }
    const avgR = totalR / whitePatches.length;
    const avgG = totalG / whitePatches.length;
    const avgB = totalB / whitePatches.length;

    // Dostosuj balans bieli na podstawie średnich wartości pikseli w białych punktach referencyjnych
    for (let i = 0; i < data.length; i += 4) {
        data[i] = (data[i] / avgR) * 255;
        data[i + 1] = (data[i + 1] / avgG) * 255;
        data[i + 2] = (data[i + 2] / avgB) * 255;
    }

    return imageData;
}

export default (imageData: ImageData) => adjustWhiteBalance(imageData, 75)