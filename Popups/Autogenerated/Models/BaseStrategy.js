class BaseStrategy {
    constructor(builder) {
        this.CLOSE_DELAY = 5000;
        this.delayed = []; // Save setTimeout functions to clear them on button pressed (do not open next popup)
        this.puBuilder = builder;
        this.puManager = new PopupManager(this.puBuilder); // Director to build popups
    }
    performAction(type) {
        console.log(ActionExecuteType[type]);
    }
}
//# sourceMappingURL=BaseStrategy.js.map