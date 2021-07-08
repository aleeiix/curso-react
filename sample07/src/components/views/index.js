// Cargar automaticamente el bundle que contiene el componente cuando sea renderizado por primera vez
import { lazy } from "react";

const ViewOne = lazy(() => import ("./ViewOne"));
const ViewTwo = lazy(() => import ("./ViewTwo"));
const ViewThree = lazy(() => import ("./ViewThree"));
const ViewFour = lazy(() => import ("./ViewFour"));

export default {
    ViewOne,
    ViewTwo,
    ViewThree,
    ViewFour
}
