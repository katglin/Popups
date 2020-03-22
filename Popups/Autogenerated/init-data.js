/// <reference path=  "../node_modules/@types/jqueryui/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var puBuilder;
window.onload = () => {
    $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
    }).done(function (data) {
        processMessages(data);
    });
};
function processMessages(data) {
    (() => __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(data.map((chain, index) => {
            chain.forEach((popup, i) => {
                AddNext(popup, chain[i + 1] ? chain[i + 1] : null); // use order number
            });
            openNext(index, chain[0], true);
        }));
    }))();
}
function AddNext(model, next) {
    model.NextPU = next;
}
function executeActionAndClose(index, popup) {
    if (popup === undefined)
        return;
    if (popup && popup.AEType) {
        console.log(ActionExecuteType[popup.AEType]);
    }
    $('#dialog' + index).dialog("close");
}
function openNext(index, popup, init = false) {
    if (popup === undefined)
        return;
    if (!init && popup)
        popup = popup.NextPU;
    if (popup) {
        puBuilder = new PopupBuilder();
        puBuilder.reset(index);
        puBuilder.addContainer(index);
        puBuilder.prepareButtonRegistry();
        puBuilder.createPopup(index, popup);
        puBuilder.addColor(index, PopupColor[popup.Color]);
        puBuilder.openPopup(index);
        if (popup.Type == PopupType.Default || popup.AType == ActionType.Default) {
            if (popup.AType == ActionType.Execute) {
                console.log(ActionExecuteType[popup.AEType]);
            }
            setTimeout(openNext, 5000, index, popup);
        }
    }
    else {
        puBuilder.closePopup(index);
    }
}
//# sourceMappingURL=init-data.js.map