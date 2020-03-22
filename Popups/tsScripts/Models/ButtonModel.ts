class ButtonModel implements IButtonModel {
    text: string;
    action: Function;
    click: Function;

    constructor(text: string, action: Function) {
        this.text = text;
        this.action = action;
    }

    clone(): ButtonModel {
        return new ButtonModel(this.text, this.action);
    }
}