class ButtonRegistry {
    buttons: ButtonModel[];

    constructor() {
        this.buttons = [];
    }

    addButton(button: ButtonModel) {
        this.buttons.push(new ButtonModel(button.text, button.strategy));
    }

    getButton(text: string): ButtonModel {
        return this.buttons.find(b => b.text == text).clone();
    }
}