import React from "react";
type Props = {
  width: string;
  height: string;
};

const Logo = ({ width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    style={{ width, height }}
  >
    <path
      fill="#5229cb"
      d="M512.21 180.5h-295.6l26.64 551.73L512.21 843.5l268.96-111.27 26.64-551.73z"
    />
    <path
      d="M678.89 395.46L519.3 302.19a14.032 14.032 0 00-14.17 0l-159.59 93.27a10.797 10.797 0 00-5.35 9.33v183.32c0 3.84 2.04 7.39 5.35 9.33l159.59 93.27c4.38 2.56 9.79 2.56 14.17 0l159.59-93.27c3.32-1.94 5.35-5.49 5.35-9.33V404.79c0-3.84-2.03-7.39-5.35-9.33z"
      fill="#fff"
    />
    <path
      d="M623.16 429.23l-106.24-62.09a9.356 9.356 0 00-9.43 0l-106.24 62.09a7.178 7.178 0 00-3.56 6.21v122.03a7.2 7.2 0 003.56 6.21l106.24 62.09c2.91 1.7 6.52 1.7 9.43 0l106.24-62.09a7.178 7.178 0 003.56-6.21V435.44a7.157 7.157 0 00-3.56-6.21z"
      fill="#827dfa"
    />
  </svg>
);

export default Logo;
