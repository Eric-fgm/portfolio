"use client";

import { createContext, useContext, useState } from "react";
import batImageProps from "/public/images/batman.png";
import universityImageProps from "/public/images/university.png";
import flowerImageProps from "/public/images/flower.webp";
import floorImageProps from "/public/images/floor.png";
import dogImageProps from "/public/images/dog.png";
import familyImageProps from "/public/images/family.jpg";
import tableImageProps from "/public/images/table-football.png";
import monaImageProps from "/public/images/mona-lisa.jpg";
import canyonImageProps from "/public/images/canyon.jpg";
import womenImageProps from "/public/images/women.png";

export interface ImageSettingsProps {
  algorithm: "chromaticAdaptation" | "histogramEqualization" | "adaptiveGamma";
  setAlgorithm: React.Dispatch<
    React.SetStateAction<ImageSettingsProps["algorithm"]>
  >;
  images: { src: string; name: string }[];
  imageSrc: string;
  setImageSrc: React.Dispatch<
    React.SetStateAction<ImageSettingsProps["imageSrc"]>
  >;
}

const defaultProps: ImageSettingsProps = {
  algorithm: "chromaticAdaptation",
  setAlgorithm: () => {},
  images: [
    {
      name: "Batman",
      src: batImageProps.src,
    },
    {
      name: "University",
      src: universityImageProps.src,
    },
    {
      name: "Flower",
      src: flowerImageProps.src,
    },
    {
      name: "Floor",
      src: floorImageProps.src,
    },
    {
      name: "Dog",
      src: dogImageProps.src,
    },
    {
      name: "Family",
      src: familyImageProps.src,
    },
    {
      name: "Table",
      src: tableImageProps.src,
    },
    {
      name: "Mona Lisa",
      src: monaImageProps.src,
    },
    {
      name: "Canyon",
      src: canyonImageProps.src,
    },
    {
      name: "Women",
      src: womenImageProps.src,
    },
  ],
  imageSrc: batImageProps.src,
  setImageSrc: () => {},
};

const ImageSettingsContext = createContext(defaultProps);

export const useImageSettings = () => useContext(ImageSettingsContext);

const ImageSettingsProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [algorithm, setAlgorithm] = useState<ImageSettingsProps["algorithm"]>(
    defaultProps.algorithm,
  );

  const [imageSrc, setImageSrc] = useState<ImageSettingsProps["imageSrc"]>(
    defaultProps.imageSrc,
  );

  return (
    <ImageSettingsContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        images: defaultProps.images,
        imageSrc,
        setImageSrc,
      }}
    >
      {children}
    </ImageSettingsContext.Provider>
  );
};

export default ImageSettingsProvider;
