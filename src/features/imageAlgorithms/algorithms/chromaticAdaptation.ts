const rgbToLmsMatrix = [
    [0.40024, 0.7076, -0.08081],
    [-0.2263, 1.16532, 0.0457],
    [0, 0, 0.91822]
];

const lmsToRgbMatrix = [
    [1.8599364, -1.1293816, 0.2198974],
    [0.3611914, 0.6388125, -0.0000064],
    [0, 0, 1.0890636]
];

function multiplyMatrixVector(matrix: number[][], vector: number[]) {
    return matrix.map(row =>
        row.reduce((sum, value, index) => sum + value * vector[index], 0)
    );
}

function chromaticAdaptation(rgb: number[], sourceWhite: number[], targetWhite: number[]) {
    const lms = multiplyMatrixVector(rgbToLmsMatrix, rgb);
    const scale = targetWhite.map((val, index) => val / sourceWhite[index]);
    const adaptedLms = lms.map((val, index) => val * scale[index]);
    return multiplyMatrixVector(lmsToRgbMatrix, adaptedLms);
}

const sourceWhiteDefault = [0.95047, 1.00000, 1.08883];
const targetWhiteDefault = [1.0000, 0.8545, 0.8210];

export default function adaptImageColors(imageData: ImageData) {
    const data = imageData.data;
    const length = data.length;

    for (let i = 0; i < length; i += 4) {
        const rgb = [data[i] / 255, data[i + 1] / 255, data[i + 2] / 255];
        const adaptedRgb = chromaticAdaptation(rgb, sourceWhiteDefault, targetWhiteDefault);

        data[i] = Math.min(255, Math.max(0, adaptedRgb[0] * 255));
        data[i + 1] = Math.min(255, Math.max(0, adaptedRgb[1] * 255));
        data[i + 2] = Math.min(255, Math.max(0, adaptedRgb[2] * 255));
    }

    return imageData;
}