window.onload = () => {
    var result = $.ajax({
        url: "/Home/InitCollections",
        type: "get",
        data: null,
        async: false
    });
    }
};