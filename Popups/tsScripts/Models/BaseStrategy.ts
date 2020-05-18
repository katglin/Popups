abstract class BaseStrategy implements IClickAction {

    puBuilder: IPopupBuilder;
    puManager: PopupManager;

    constructor(builder: IPopupBuilder) {
        this.puBuilder = builder;
        this.puManager = new PopupManager(this.puBuilder);   // Director to build popups
    }

    CLOSE_DELAY = 5000;
    delayed = [];  // Save setTimeout functions to clear them on button pressed (do not open next popup)

    abstract act(index: number, popup: PopupModel, init: boolean);

    performAction(type: ActionExecuteType) {
        console.log(ActionExecuteType[type]);
    }
}