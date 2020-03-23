class BaseStrategy {
    constructor() {
        this.CLOSE_DELAY = 5000;
        this.delayed = []; // Save setTimeout functions to clear them on button pressed (do not open next popup)
        this.puManager = new PopupManager(new PopupBuilder()); // Director to build popups
    }
    performAction(type) {
        console.log(ActionExecuteType[type]);
    }
}
//# sourceMappingURL=BaseStrategy.js.map