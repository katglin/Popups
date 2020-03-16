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
        const initialTimestamp = new Date();

        const processes = [1,2];

        await Promise.all(
            processes.map(async process => {
                run(process);
            })
        );
    })();

}

async function run(process) {

    $("#dialog" + process).dialog("open");
}

$("#dialog1").dialog({
    classes: {
        "ui-dialog": "highlight"
    },
    position: [10, 10],
    autoOpen: false,
    modal: true,
    title: "View Details 1",
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        }
    ]
});

$("#dialog2").dialog({
    classes: {
        "ui-dialog": "highlight"
    },
    position: [50,50],
    autoOpen: false,
    modal: true,
    title: "View Details 2",
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
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


    //$.confirm({
    //    title: 'Confirm!',
    //    content: 'Simple confirm!',
    //    buttons: {
    //        confirm: function () {
    //            $.alert('Confirmed!');
    //        },
    //        cancel: function () {
    //            $.alert('Canceled!');
    //        },
    //        somethingElse: {
    //            text: 'Something else',
    //            btnClass: 'btn-blue',
    //            keys: ['enter', 'shift'],
    //            action: function () {
    //                $.alert('Something else?');
    //            }
    //        }
    //    }
    //});