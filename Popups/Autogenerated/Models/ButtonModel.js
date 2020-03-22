class ButtonModel {
    constructor(text, action) {
        this.text = text;
        this.action = action;
    }
    clone() {
        return new ButtonModel(this.text, this.action);
    }
}
//# sourceMappingURL=ButtonModel.js.map