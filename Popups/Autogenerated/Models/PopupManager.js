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
        this.puBuilder.openPopup(index);
    }
    closePopup(index) {
        this.puBuilder.closePopup(index);
    }
}
//# sourceMappingURL=PopupManager.js.map