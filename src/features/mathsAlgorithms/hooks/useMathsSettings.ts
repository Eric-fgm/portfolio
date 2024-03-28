"use client";

import { useContext } from "react";
import { MathsSettingsContext } from "@/features/mathsAlgorithms/providers/MathsSettingsProvider";

const useMathsSettings = () => useContext(MathsSettingsContext);

export default useMathsSettings;
