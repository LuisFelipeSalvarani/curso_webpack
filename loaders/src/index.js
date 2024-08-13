import Tittle from "./components/title";
import Image from "./components/image";
import Button from "./components/button";

const title = new Tittle();

title.create("Primeira página");

const image = new Image();

image.insertBobImage();

const button = new Button();

button.create();