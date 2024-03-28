export const initCanvas = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
) => {
  const scale = window.devicePixelRatio;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.width = width * scale;
  canvas.height = height * scale;
  canvas.getContext("2d")?.scale(scale, scale);
};
