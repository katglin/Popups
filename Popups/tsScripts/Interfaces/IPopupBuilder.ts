interface IPopupBuilder {
    reset(index: number);
    addContainer(index: number);
    prepareButtonRegistry();
    addColor(index: number, color: string);
    addButtons(index: number, model: PopupModel, buttonsReg);
    createPopup(index: number, popup: PopupModel);
    openPopup(index: number);
    closePopup(index: number);
}