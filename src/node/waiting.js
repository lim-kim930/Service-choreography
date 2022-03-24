import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class WaitNode extends HtmlNode {
    setHtml(rootEl) {
        const el = document.createElement("div");
        el.className = "uml-wrapper";
        const html = `
      <div class="uml-wait-container">
        <div class="uml-wait-body">请将节点拖入此处</div>
      </div>
    `;
        el.innerHTML = html;
        rootEl.innerHTML = "";
        rootEl.appendChild(el);
    }
}

class WaitNodeModel extends HtmlNodeModel {
    setAttributes() {
        this.width = 150;
        this.height = 40;
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
    type: "Waiting",
    view: WaitNode,
    model: WaitNodeModel
};