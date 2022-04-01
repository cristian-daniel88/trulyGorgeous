export const CLICK_POPUPPHOTO = 'CLICK_POPUPPHOTO'

export const clickPopUpPhoto = (value, booleano) => ({
  type: CLICK_POPUPPHOTO,
  payload: value,
  payload2: booleano
})