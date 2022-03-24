import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class PassNode extends HtmlNode {
    setHtml(rootEl) {
        const { properties } = this.props.model;
        const el = document.createElement("div");
        el.className = "uml-wrapper";
        const html = `
            <div class="uml-container">
                <div class="uml-head"><svg viewBox="0 0 1024 1024" p-id="2193" width="26" height="26"><path d="M505.6 300.8c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h147.2V102.4c0-19.2 19.2-38.4 38.4-38.4 12.8 0 19.2 6.4 25.6 12.8l281.6 281.6c12.8 12.8 12.8 38.4 0 51.2l-281.6 281.6c-12.8 12.8-38.4 12.8-51.2 0-6.4-6.4-12.8-19.2-12.8-25.6V550.4H352c-19.2 0-38.4-19.2-38.4-38.4V441.6l-192 192 192 192v-70.4c0-19.2 19.2-38.4 38.4-38.4h185.6c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H390.4v121.6c0 12.8-6.4 19.2-12.8 25.6-12.8 12.8-38.4 12.8-51.2 0L38.4 659.2c-12.8-12.8-12.8-38.4 0-51.2L326.4 320c6.4 0 12.8-6.4 25.6-6.4 19.2 0 38.4 19.2 38.4 38.4v121.6h300.8c19.2 0 38.4 19.2 38.4 38.4v70.4l192-192-192-192v70.4c0 19.2-19.2 38.4-38.4 38.4H505.6v-6.4z" fill="#ffffff" p-id="2194"></path></svg></div>
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

class PassNodeModel extends HtmlNodeModel {
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
    type: "Pass",
    view: PassNode,
    model: PassNodeModel
};