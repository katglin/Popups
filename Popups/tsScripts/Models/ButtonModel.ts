class ButtonModel implements IButtonModel {
    text: string;
    strategy: IClickAction;
    click: Function;

    constructor(text: string, strategy: IClickAction) {
        this.text = text;
        this.strategy = strategy;
    }

    clone(): ButtonModel {
        return new ButtonModel(this.text, this.strategy);
    }
}
