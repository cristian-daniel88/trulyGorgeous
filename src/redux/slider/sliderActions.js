export const HOVER_SLIDER = "HOVER_SLIDER"; 
export const SLIDER_MANUAL = "SLIDER_MANUAL";


export const hoverSlider = (value) => ({
  type: HOVER_SLIDER,
  payload:value
});


export const sliderManual = () => ({
    type: SLIDER_MANUAL,
});



