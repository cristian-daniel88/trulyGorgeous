export const HOVER_WEDDING = "HOVER_WEDDING";
export const HOVER_ALTERATIONS = "HOVER_ALTERATIONS";
export const HOVER_ABOUT = "HOVER_ABOUT";
export const HOVER_DESIGNERS = "HOVER_DESIGNERS";



export const hoverPopUpWeddingDresses = (value) => ({
  type: HOVER_WEDDING,
  payload:value,
});

export const hoverPopUpAlterations = (value) => ({
    type: HOVER_ALTERATIONS,
    payload: value
  });


export const hoverPopUpAboutUs = (value) => ({
    type: HOVER_ABOUT,
    payload: value,
  });

export const hoverPopDesigners = (value) => ({
  type: HOVER_DESIGNERS,
  payload: value
})




