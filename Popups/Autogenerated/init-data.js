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
            for (let i = 0; i < chain.length; i++) {
                var next = chain.find(x => x.Order == chain[i].Order + 1);
                chain[i].NextPU = next;
            }
            (new OpenNextStrategy(new PopupBuilder())).act(index, chain[0], true);
        }));
    }))();
}
//# sourceMappingURL=init-data.js.map