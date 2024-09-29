function computeHistogram(data: Uint8ClampedArray, channelOffset: number): number[] {
    const histogram = new Array(256).fill(0);
    for (let i = channelOffset; i < data.length; i += 4) {
        histogram[data[i]]++;
    }
    return histogram;
}

function computeCDF(histogram: number[]) {
    const cdf = new Array(256).fill(0);
    cdf[0] = histogram[0];
    for (let i = 1; i < 256; i++) {
        cdf[i] = cdf[i - 1] + histogram[i];
    }
    return cdf;
}

function normalizeCDF(cdf: number[], numPixels: number) {
    const cdfMin = cdf.find(value => value !== 0) ?? 0;
    const scale = 255 / (numPixels - cdfMin);
    return cdf.map(value => Math.round((value - cdfMin) * scale));
}

function equalizeChannel(data: Uint8ClampedArray, cdf: number[], channelOffset: number) {
    for (let i = channelOffset; i < data.length; i += 4) {
        data[i] = cdf[data[i]];
    }
}

export default function histogramEqualization(imageData: ImageData) {
    const data = imageData.data;
    const numPixels = data.length / 4;

    // Compute histograms for each channel
    const histR = computeHistogram(data, 0);
    const histG = computeHistogram(data, 1);
    const histB = computeHistogram(data, 2);

    // Compute CDF for each channel
    const cdfR = computeCDF(histR);
    const cdfG = computeCDF(histG);
    const cdfB = computeCDF(histB);

    // Normalize the CDFs
    const equalizedLutR = normalizeCDF(cdfR, numPixels);
    const equalizedLutG = normalizeCDF(cdfG, numPixels);
    const equalizedLutB = normalizeCDF(cdfB, numPixels);

    // Apply the equalization to each channel
    equalizeChannel(data, equalizedLutR, 0);
    equalizeChannel(data, equalizedLutG, 1);
    equalizeChannel(data, equalizedLutB, 2);

    return imageData;
}
