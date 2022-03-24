import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class ButtonNode extends HtmlNode {
    setHtml(rootEl) {
        const { properties } = this.props.model;
        const el = document.createElement("div");
        el.className = "uml-wrapper";
        const html = `
      <div class="uml-container">
        <div class="uml-head"><svg viewBox="0 0 1024 1024" p-id="4827" width="26" height="26"><path d="M128 113.877333a42.666667 42.666667 0 0 1 27.477333-39.893333C210.346667 53.077333 265.130667 42.666667 320 42.666667c58.666667 0 117.333333 11.946667 176 35.84L512 85.333333c64 28.458667 128 42.666667 192 42.666667 45.482667 0 91.008-7.168 136.490667-21.546667a42.666667 42.666667 0 0 1 55.210666 35.712l0.298667 4.949334v507.008a42.666667 42.666667 0 0 1-27.477333 39.893333c-54.826667 20.906667-109.653333 31.317333-164.522667 31.317333-58.666667 0-117.333333-11.946667-176-35.84L512 682.666667c-64-28.458667-128-42.666667-192-42.666667-35.541333 0-71.125333 4.394667-106.666667 13.184V938.666667a42.666667 42.666667 0 0 1-85.333333 0V113.877333zM320 128c-30.506667 0-60.970667 4.053333-91.434667 12.032l-15.232 4.266667v421.376l21.333334-3.968a522.666667 522.666667 0 0 1 85.333333-7.04c74.069333 0 148.394667 15.488 240.938667 56.064 47.701333 19.370667 95.36 29.269333 143.061333 29.269333 30.506667 0 60.970667-4.053333 91.434667-11.989333l15.232-4.309334-0.256-421.333333-21.290667 3.968c-28.373333 4.693333-56.746667 6.997333-85.12 6.997333-74.069333 0-148.394667-15.488-240.938667-56.064C415.36 137.898667 367.701333 128 320 128z" fill="#ffffff" p-id="4828"></path></svg></div>
        <div class="uml-body"><span>${properties.name}</span></div>
      </div>
    `;
        el.innerHTML = html;
        rootEl.innerHTML = "";
        rootEl.appendChild(el);
        // window.setData = () => {
        // const { graphModel, model } = this.props;
        // graphModel.eventCenter.emit("custom:button-click", model);
        // };
    }
}

class ButtonNodeModel extends HtmlNodeModel {
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
    type: "Ellipse",
    view: ButtonNode,
    model: ButtonNodeModel
};