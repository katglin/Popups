abstract class BaseStrategy implements IClickAction {
    CLOSE_DELAY = 5000;
    delayed = [];  // Save setTimeout functions to clear them on button pressed (do not open next popup)

    puManager = new PopupManager(new PopupBuilder());   // Director to build popups
    abstract act(index: number, popup: PopupModel, init: boolean);

    performAction(type: ActionExecuteType) {
        console.log(ActionExecuteType[type]);
    }
}