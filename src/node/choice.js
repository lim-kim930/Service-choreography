import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class ChoiceNode extends HtmlNode {
    setHtml(rootEl) {
        const { properties } = this.props.model;
        const el = document.createElement("div");
        el.className = "uml-wrapper";
        const html = `
            <div class="uml-container">
                <div class="uml-head"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="10404" width="26" height="26"><path d="M959.884171 640.029318h-127.976012v-95.971348a64.030651 64.030651 0 0 0-64.009329-64.009329H543.95147v-95.971348h95.971348a64.009328 64.009328 0 0 0 63.988006-64.009328V64.11594a64.009328 64.009328 0 0 0-63.988006-63.988007H383.970793a64.030651 64.030651 0 0 0-64.009328 63.988007v255.952025a64.030651 64.030651 0 0 0 64.009328 64.009328h95.971348v95.971348H255.973458a64.030651 64.030651 0 0 0-63.988006 64.009329v95.971348H64.00944a64.030651 64.030651 0 0 0-63.988007 63.988006v255.973348a64.030651 64.030651 0 0 0 63.988007 63.988006h255.952025a64.030651 64.030651 0 0 0 64.009328-63.988006V704.017324a64.030651 64.030651 0 0 0-64.009328-63.988006h-63.988007v-95.971348h511.925372v95.971348h-63.988006a64.030651 64.030651 0 0 0-63.988006 63.988006v255.973348a64.030651 64.030651 0 0 0 63.988006 63.988006h255.973347a64.030651 64.030651 0 0 0 63.988007-63.988006V704.017324a64.030651 64.030651 0 0 0-63.988007-63.988006z m-575.913378-319.961353V64.11594h255.952025v255.952025H383.970793z m-64.009328 383.949359v255.973348H64.00944V704.017324h255.952025z m639.922706 255.973348H703.910824V704.017324h255.973347v255.973348z" p-id="10405" fill="#ffffff"></path></svg></div>
                <div class="uml-body"><span>${properties.Name}</span></div>
            </div>`;
        el.innerHTML = html;
        rootEl.innerHTML = "";
        rootEl.appendChild(el);
        // window.setData = () => {
        // const { graphModel, model } = this.props;
        // graphModel.eventCenter.emit("custom:button-click", model);
        // };
    }
}

class ChoiceNodeModel extends HtmlNodeModel {
    // getNodeStyle() {
    //     const style = super.getNodeStyle();
    //     style.stroke = '#d0edfe';
    //     style.strokeWidth = '7';
    //     style.fill = '#15a4fa';
    //     return style;
    // }
    setAttributes() {
        this.width = 300;
        this.height = 50;
        this.color = "red";
        this.text.editable = false;
        this.anchorsOffset = [[0, 25], [0, -25]];
    }
    getOutlineStyle() {
        const style = super.getOutlineStyle();
        style.stroke = "#15a4fa";
        style.hover.stroke = "#15a4fa";
        return style;
    }
}

export default {
    type: "Choice",
    view: ChoiceNode,
    model: ChoiceNodeModel
};