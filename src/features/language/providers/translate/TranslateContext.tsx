"use client";
import { createContext } from "react";

export type TranslateProps = Record<string, any>;

const defaultProps: TranslateProps = {};

const TranslateContext = createContext(defaultProps);

export default TranslateContext;
