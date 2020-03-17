/// <reference path=  "../node_modules/@types/jqueryui/index.d.ts" />

window.onload = () => {
    $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
    }).done(function (data: PopupModel[]) {
        processMessages(data);
    });
}

function processMessages(data: PopupModel[]) {

    (async () => {
        const processes = [1, 2, 3, 4];

        await Promise.all(
            processes.map(async process => {
                run(process);
            })
        );
    })();
}

async function run(process) {
    createContainer(process);
    createDialog(process, "Test " + process);
    $('#dialog' + process).dialog("open");
}

function createContainer(id: string) {
    $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-'+ id + '"></div>');
}


function createDialog(id: number, message: string) {
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
                        $(this).dialog('destroy').remove()
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