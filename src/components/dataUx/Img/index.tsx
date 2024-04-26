import { ImgStyle } from "./css";

interface Props {
  src: string;
  alt: string;
  width?: string;
}

export default function Img({ src, alt, width = "auto" }: Props) {
  return <ImgStyle width={width} src={src} alt={alt}></ImgStyle>;
}
