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

        const processes = ["A", "B", "C", "D"];

        await Promise.all(
            processes.map(async process => {
                run(process);
            })
        );

        console.log(
            `All Completed! ${Number(new Date()) - Number(initialTimestamp)}ms.`
        );
    })();

}

async function run(process) {
    $.confirm({
        title: 'Confirm!',
        content: 'Simple confirm!',
        confirm: function () {
            alert('Confirmed!');
        },
        cancel: function () {
            alert('Canceled!')
        }
    });
}