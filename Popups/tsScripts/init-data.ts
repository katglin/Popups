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
                for (let i = 0; i < chain.length; i++) {
                    var next = chain.find(x => x.Order == chain[i].Order + 1);
                    chain[i].NextPU = next;
                }
                (new OpenNextStrategy(new PopupBuilder())).act(index, chain[0], true);
            })
        );
    })();
}