/// <reference path=  "../node_modules/@types/jqueryui/index.d.ts" />

var puBuilder;

window.onload = () => {
    $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
        }).done(function (data: PopupModel[][]) {
            processMessages(data);
    });
}

function processMessages(data: PopupModel[][]) {
    (async () => {
        await Promise.all(
            data.map((chain, index) => {
                chain.forEach((popup, i) => {
                    AddNext(popup, chain[i+1] ? chain[i+1] : null); // use order number
                });
                openNext(index, chain[0], true);
            })
        );
    })();
}

function AddNext(model: PopupModel, next: PopupModel) {
    model.NextPU = next;
}

function executeActionAndClose(index: number, popup: PopupModel) {
    if (popup === undefined) return;
    if (popup && popup.AEType) {
        console.log(ActionExecuteType[popup.AEType]);
    }
    $('#dialog' + index).dialog("close");
}

function openNext(index: number, popup: PopupModel, init = false) {
    if (popup === undefined) return;
    if (!init && popup) popup = popup.NextPU;
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

