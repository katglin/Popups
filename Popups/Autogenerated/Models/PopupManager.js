class PopupManager {
    constructor(builder) {
        this.puBuilder = builder;
    }
    makePopup(index, popup) {
        this.puBuilder.reset(index);
        this.puBuilder.addContainer(index);
        this.puBuilder.prepareButtonRegistry();
        this.puBuilder.createPopup(index, popup);
        this.puBuilder.addColor(index, PopupColor[popup.Color]);
        this.openPopup(index);
    }
    openPopup(index) {
        $('#dialog' + index).dialog("open");
    }
    closePopup(index) {
        $('#dialog' + index).dialog("close");
    }
}
//# sourceMappingURL=PopupManager.js.map