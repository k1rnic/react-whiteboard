export default (family: string, weight: number, url: string, style: 'normal' | 'italic' = 'normal') => `
  @font-face {
    font-family: ${family};
    font-weight: ${weight};
    font-style: ${style};
    src: url(${url});
  }`;
