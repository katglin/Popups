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
var buttons;
window.onload = () => {
    $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
    }).done(function (data) {
        prepareButtonRegistry();
        processMessages(data);
    });
};
function prepareButtonRegistry() {
    buttons = new ButtonRegistry();
    buttons.addButton(new ButtonModel("OK", openNext));
    buttons.addButton(new ButtonModel("YES", executeActionAndClose));
    buttons.addButton(new ButtonModel("NO", openNext));
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
        $('#dialog' + index).dialog('destroy').remove();
        createDialog(index, popup);
        addColor(index.toString(), PopupColor[popup.Color]);
        $('#dialog' + index).dialog("open");
        if (popup.Type == PopupType.Default || popup.AType == ActionType.Default) {
            if (popup.AType == ActionType.Execute) {
                console.log(ActionExecuteType[popup.AEType]);
            }
            setTimeout(openNext, 5000, index, popup);
        }
    }
    else {
        closePopup(index);
    }
}
function closePopup(index) {
    $('#dialog' + index).dialog("close");
}
function processMessages(data) {
    (() => __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(data.map((chain, index) => {
            chain.forEach((popup, i) => {
                AddNext(popup, chain[i + 1] ? chain[i + 1] : null); // use order number
            });
            StartChain(chain, index);
        }));
    }))();
}
function AddNext(model, next) {
    model.NextPU = next;
}
function StartChain(chain, index) {
    return __awaiter(this, void 0, void 0, function* () {
        createContainer(index.toString());
        openNext(index, chain[0], true);
    });
}
function addColor(id, color) {
    $('.ui-dialog:has(#dialog' + id + ') .ui-widget-header').addClass(color);
}
function createContainer(id) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-' + id + '"></div>');
}
function GetButtons(id, model) {
    var btns = [];
    switch (model.Type) {
        case PopupType.Info:
        case PopupType.Warning:
            btns.push(buttons.getButton("OK"));
            break;
        case PopupType.Error:
        case PopupType.Denial:
            btns.push(buttons.getButton("YES"));
            btns.push(buttons.getButton("NO"));
            break;
        case PopupType.Confirmation:
            btns.push(buttons.getButton("YES"));
            break;
    }
    btns.forEach((btn, i) => {
        btn.click = function () {
            $('#dialog' + id).dialog('destroy').remove();
            btns[i].action(id, model);
        };
    });
    return btns;
}
function createDialog(id, popup) {
    $("<div class='dialog' id='dialog" + id + "'</div>")
        .dialog({
        position: {
            of: $('#dialog-container-' + id)
        },
        autoOpen: false,
        resizable: false,
        draggable: false,
        height: 140,
        modal: true,
        title: popup.Message,
        buttons: GetButtons(id, popup)
    });
}
//# sourceMappingURL=init-data.js.map