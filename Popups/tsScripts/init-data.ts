/// <reference path=  "../node_modules/@types/jqueryui/index.d.ts" />

var buttons;

window.onload = () => {
    $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
        }).done(function (data: PopupModel[][]) {

        prepareButtonRegistry();
        processMessages(data);
    });
}

function prepareButtonRegistry() {
    buttons = new ButtonRegistry();
    buttons.addButton(new ButtonModel("OK", openNext));
    buttons.addButton(new ButtonModel("YES", executeActionAndClose));
    buttons.addButton(new ButtonModel("NO", openNext));
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

function closePopup(index: number) {
    $('#dialog' + index).dialog("close");
}

function processMessages(data: PopupModel[][]) {
    (async () => {
        await Promise.all(
            data.map((chain, index) => {
                chain.forEach((popup, i) => {
                    AddNext(popup, chain[i+1] ? chain[i+1] : null); // use order number
                });
                StartChain(chain, index);
            })
        );
    })();
}

function AddNext(model: PopupModel, next: PopupModel) {
    model.NextPU = next;
}

async function StartChain(chain: PopupModel[], index: number) {
    createContainer(index.toString());
    openNext(index, chain[0], true);
}

function addColor(id: string, color: string) {
    $('.ui-dialog:has(#dialog'+id+') .ui-widget-header').addClass(color);
}

function createContainer(id: string) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-'+ id + '"></div>');
}

function GetButtons(id: number, model: PopupModel) {
    var btns = [];
    switch (model.Type) {
        case PopupType.Info:case PopupType.Warning:
            btns.push(buttons.getButton("OK"));
            break;
        case PopupType.Error:case PopupType.Denial:
            btns.push(buttons.getButton("YES"));
            btns.push(buttons.getButton("NO"));
            break;
        case PopupType.Confirmation:
            btns.push(buttons.getButton("YES"));
            break;
    }

    btns.forEach((btn, i)=> {
        btn.click = function () {
            $('#dialog' + id).dialog('destroy').remove();
            btns[i].action(id, model);
        }
    });
    return btns;      
}

function createDialog(id: number, popup: PopupModel) {
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