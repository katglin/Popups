class OpenNextStrategy extends BaseStrategy {
    act(index, popup, init = false) {
        if (popup === undefined)
            return;
        if (!init && popup)
            popup = popup.NextPU;
        if (this.delayed[index])
            clearTimeout(this.delayed[index]);
        if (popup) {
            this.puManager.makePopup(index, popup);
            if (popup.Type == PopupType.Default || popup.AType == ActionType.Default) {
                if (popup.AType == ActionType.Execute) {
                    this.performAction(popup.AEType);
                }
                this.delayed[index] = setTimeout((index, popup) => { this.act(index, popup); }, this.CLOSE_DELAY, index, popup);
            }
        }
        else {
            this.puManager.closePopup(index);
        }
    }
}
//# sourceMappingURL=OpenNextStrategy.js.map