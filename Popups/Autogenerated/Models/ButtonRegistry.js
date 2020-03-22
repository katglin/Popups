class ButtonRegistry {
    constructor() {
        this.buttons = [];
    }
    addButton(button) {
        this.buttons.push(new ButtonModel(button.text, button.action));
    }
    getButton(text) {
        return this.buttons.find(b => b.text == text).clone();
    }
}
//# sourceMappingURL=ButtonRegistry.js.map