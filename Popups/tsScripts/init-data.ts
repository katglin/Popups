/// <reference path=  "../node_modules/@types/jqueryui/index.d.ts" />

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
                    AddNext(popup, chain[i+1] ? chain[i+1] : null);
                });
                run(chain, index);
            })
        );
    })();
}

function AddNext(model: PopupModel, next: PopupModel) {
    model.NextPU = next;
}

async function run(chain: PopupModel[], index: number) {
    createContainer(index.toString());
    createDialog(index, chain[0]); // use Order number
    $('#dialog' + index).dialog("open");
}

function createContainer(id: string) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-'+ id + '"></div>');
}

function GetButtons(id: number, model: PopupModel) {
    return [
        {text: "YES", click: breakChain},
        {text: "NO", click: model.NextPU ? 
        function() {
            $(this).dialog('destroy').remove()
            createDialog(id, model.NextPU);
            $('#dialog' + id).dialog("open");
    } : breakChain}
    ];        
}

function breakChain() {  // do action + break chain
    $(this).dialog("close");
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