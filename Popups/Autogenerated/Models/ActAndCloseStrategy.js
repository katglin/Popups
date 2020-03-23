class ActAndCloseStrategy extends BaseStrategy {
    act(index, popup, init) {
        if (popup === undefined)
            return;
        if (popup && popup.AEType) {
            this.performAction(popup.AEType);
        }
        this.puManager.closePopup(index);
        if (this.delayed[index])
            clearTimeout(this.delayed[index]);
    }
}
//# sourceMappingURL=ActAndCloseStrategy.js.map