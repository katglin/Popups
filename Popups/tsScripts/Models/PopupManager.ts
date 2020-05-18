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
        this.openPopup(index);
    }

    openPopup(index: number) {
        $('#dialog' + index).dialog("open");
    }

    closePopup(index: number) {
        $('#dialog' + index).dialog("close");
    }
}