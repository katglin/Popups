class ButtonModel {
    constructor(text, strategy) {
        this.text = text;
        this.strategy = strategy;
    }
    clone() {
        return new ButtonModel(this.text, this.strategy);
    }
}
//# sourceMappingURL=ButtonModel.js.map