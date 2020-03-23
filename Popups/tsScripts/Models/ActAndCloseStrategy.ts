class ActAndCloseStrategy extends BaseStrategy {
    act(index: number, popup: PopupModel, init: boolean) {
        if (popup === undefined) return;
        if (popup && popup.AEType) {
            this.performAction(popup.AEType);
        }
        this.puManager.closePopup(index);
        if(this.delayed[index]) clearTimeout(this.delayed[index]);
    }
}