import React from "react";
import ReactDOMClient from "react-dom/client";
import { GooglePixel } from "./screens/GooglePixel";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<GooglePixel />);
