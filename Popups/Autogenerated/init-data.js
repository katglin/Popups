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
        const initialTimestamp = new Date();
        const processes = [1, 2];
        yield Promise.all(processes.map((process) => __awaiter(this, void 0, void 0, function* () {
            run(process);
        })));
    }))();
}
function run(process) {
    return __awaiter(this, void 0, void 0, function* () {
        $("#dialog" + process).dialog("open");
    });
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
    position: [50, 50],
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
//# sourceMappingURL=init-data.js.map