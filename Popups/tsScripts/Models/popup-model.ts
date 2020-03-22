/// <reference path=  "../../node_modules/@types/jqueryui/index.d.ts" />

class PopupModel {
    /// <summary>
    /// Contains popup message
    /// </summary>
    Message: string;

    /// <summary>
    /// Contains popup type
    /// </summary>
    Type: PopupType;

    /// <summary>
    /// Contains popup color
    /// </summary>
    Color: PopupColor;

    /// <summary>
    /// Сontains popup display order
    /// </summary>;
    Order: number;

    /// <summary>
    /// Сontains action type for popup
    /// </summary>
    AType: ActionType;

    /// <summary>
    /// Contains execution type for action
    /// </summary>
    AEType: ActionExecuteType;

    // Buttons: object[]; // DialogButtonOptions

    NextPU: PopupModel;
}
