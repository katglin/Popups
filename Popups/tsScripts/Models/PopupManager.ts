class PopupManager {
    puBuilder: IPopupBuilder;

    constructor(builder: IPopupBuilder) {
        this.puBuilder = builder;
    }

    makePopup(index: number, popup: PopupModel) {
        this.puBuilder.reset(index);
        this.puBuilder.addContainer(index);
        this.puBuilder.prepareButtonRegistry();
        this.puBuilder.createPopup(index, popup);
        this.puBuilder.addColor(index, PopupColor[popup.Color]);
        this.puBuilder.openPopup(index);
    }

    closePopup(index: number) {
        this.puBuilder.closePopup(index);
    }
}