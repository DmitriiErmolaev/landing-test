export interface ILogoWithText {
  text: string,
}

export interface ICaricaturesSlider {
  labelId: string,
}

export interface ICaricature {
  title: string,
  description: string,
  id:string,
  url: string,
}

export interface ICaricatureCard {
  title: string,
  description: string,
  index: number,
  url: string,
  ariaHidden: boolean,
}

export interface ISliderButton {
  direction: 'left' | 'right'
  switchImage: () => void;
}