import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class TaskNode extends HtmlNode {
    setHtml(rootEl) {
        const { properties } = this.props.model;
        const el = document.createElement("div");
        el.className = "uml-wrapper";
        const html = `
            <div class="uml-container">
                <div class="uml-head"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="8287" width="26" height="26"><path d="M861.8 195.4c-1.1 0-2.5 0.6-4 1.8-47.5 37.6-95.1 51.5-142.6 51.5-135.6 0-271.2-113.3-406.8-113.3-47.5 0-95.1 13.9-142.6 51.5-3.5 2.8-6.3 8-6.3 11.5v685.3h64V628.5c28.3-11.9 56.6-17 84.9-17 135.6 0 271.2 113.3 406.8 113.3 47.5 0 95.1-13.9 142.6-51.5 3.5-2.8 6.3-8 6.3-11.5V198.4c0.1-2-0.8-3-2.3-3z m-61.7 440.5c-26.7 16.9-54.1 24.9-84.9 24.9-55 0-115.1-25.1-178.7-51.7-72.5-30.3-147.5-61.6-228.1-61.6-29.3 0-57.6 4.3-84.9 12.9V224.3c26.7-16.9 54.1-24.9 84.9-24.9 55 0 115.1 25.1 178.7 51.7 72.5 30.3 147.5 61.6 228.1 61.6 29.3 0 57.6-4.3 84.9-12.9v336.1z" fill="#ffffff" p-id="8288"></path></svg></div>
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

class TaskNodeModel extends HtmlNodeModel {
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
    type: "Task",
    view: TaskNode,
    model: TaskNodeModel
};