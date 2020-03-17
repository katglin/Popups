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
        const processes = [1, 2, 3, 4];
        yield Promise.all(processes.map((process) => __awaiter(this, void 0, void 0, function* () {
            run(process);
        })));
    }))();
}
function run(process) {
    return __awaiter(this, void 0, void 0, function* () {
        createContainer(process);
        createDialog(process, "Test " + process);
        $('#dialog' + process).dialog("open");
    });
}
function createContainer(id) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-' + id + '"></div>');
}
function createDialog(id, message) {
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
        title: message,
        buttons: [
            {
                text: "OK",
                click: function () {
                    console.log(id);
                    $(this).dialog('destroy').remove();
                    createDialog(id, "Another message for" + id);
                    $('#dialog' + id).dialog("open");
                }
            },
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });
}
//# sourceMappingURL=init-data.js.map