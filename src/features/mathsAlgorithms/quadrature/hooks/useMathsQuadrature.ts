"use client";

import { useContext } from "react";
import { MathsQuadratureContext } from "@/features/mathsAlgorithms/quadrature/providers/MathsQuadratureProvider";

const useMathsQuadrature = () => useContext(MathsQuadratureContext);

export default useMathsQuadrature;
