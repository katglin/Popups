class OpenNextStrategy extends BaseStrategy {
    act(index: number, popup: PopupModel, init: boolean = false) {
        if (popup === undefined) return;
        if (!init && popup) popup = popup.NextPU;
        if(this.delayed[index]) clearTimeout(this.delayed[index]);
        if (popup) {
            this.puManager.makePopup(index, popup);
            // auto close, execute action if any, and show next if any
            if (popup.Type == PopupType.Default || popup.AType == ActionType.Default) {
                if (popup.AType == ActionType.Execute) {
                    this.performAction(popup.AEType);
                }
                this.delayed[index] = setTimeout(
                    (index: number, popup: PopupModel) => { this.act(index, popup); }, this.CLOSE_DELAY, index, popup);
            }
        }
        else {
            this.puManager.closePopup(index);
        }
    }
}