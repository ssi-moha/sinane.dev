import React from "react";

type ImageProps = {
    alt?: string;
    src: string;
    className?: string;
    width?: string;
}

const Image = ({ src, alt, className, width }: ImageProps) => (
  <img src={src} alt={alt} className={className} width={width} />
);

export default Image;
