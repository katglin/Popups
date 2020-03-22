interface IPopupBuilder {
    reset(index: number);
    addContainer(index: string);
    addColor(index: string, color: string);
    addButtons(index: number, model: PopupModel, buttonsReg);
    createPopup(index: number, popup: PopupModel);
    openPopup(index: number);
    closePopup(index: number);
}