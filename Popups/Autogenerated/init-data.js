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
                AddNext(popup, chain[i + 1] ? chain[i + 1] : null);
            });
            run(chain, index);
        }));
    }))();
}
function AddNext(model, next) {
    model.NextPU = next;
}
function run(chain, index) {
    return __awaiter(this, void 0, void 0, function* () {
        createContainer(index.toString());
        createDialog(index, chain[0]); // use Order number
        $('#dialog' + index).dialog("open");
    });
}
function createContainer(id) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-' + id + '"></div>');
}
function GetButtons(id, model) {
    return [
        { text: "YES", click: breakChain },
        { text: "NO", click: model.NextPU ?
                function () {
                    $(this).dialog('destroy').remove();
                    createDialog(id, model.NextPU);
                    $('#dialog' + id).dialog("open");
                } : breakChain }
    ];
}
function breakChain() {
    $(this).dialog("close");
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