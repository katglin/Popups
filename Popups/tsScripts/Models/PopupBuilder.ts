class PopupBuilder implements IPopupBuilder {

    buttonsReg: ButtonRegistry;

    reset(index: number){
        $('#dialog' + index).dialog('destroy').remove();
    }

    addContainer(index: number) {
        if ($('#dialog-container-'+ index).length == 0) {
            $('#dialogContainer').append('<div class="dialog-container" id = "dialog-container-'+ index + '"></div>');
        }
    }

    addColor(index: number, color: string) {
        $('.ui-dialog:has(#dialog'+index+') .ui-widget-header').addClass(color);
    }

    prepareButtonRegistry() {
        this.buttonsReg = new ButtonRegistry();
        this.buttonsReg.addButton(new ButtonModel("OK", new OpenNextStrategy(this)));
        this.buttonsReg.addButton(new ButtonModel("YES", new ActAndCloseStrategy(this)));
        this.buttonsReg.addButton(new ButtonModel("NO", new OpenNextStrategy(this)));
    }

    addButtons(index: number, model: PopupModel) {
        var btns = [];
        switch (model.Type) {
            case PopupType.Info:case PopupType.Warning:
                btns.push(this.buttonsReg.getButton("OK"));
                break;
            case PopupType.Error:case PopupType.Denial:
                btns.push(this.buttonsReg.getButton("YES"));
                btns.push(this.buttonsReg.getButton("NO"));
                break;
            case PopupType.Confirmation:
                btns.push(this.buttonsReg.getButton("YES"));
                break;
        }

        btns.forEach((btn, i)=> {
            btn.click = function () {
                $('#dialog' + index).dialog('destroy').remove();
                btns[i].strategy.act(index, model);
            }
        });
        return btns; 
    }

    createPopup(index: number, popup: PopupModel) {
        return $("<div class='dialog' id='dialog" + index + "'</div>")
        .dialog({
            position: {
                of: $('#dialog-container-' + index)
            },
            autoOpen: false,
            resizable: false,
            draggable: false,
            height: 140,
            modal: true,
            title: popup.Message,
            buttons: this.addButtons(index, popup)
        });
    }
}