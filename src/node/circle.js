import { CircleNode, CircleNodeModel } from "@logicflow/core";

class UserTaskModel extends CircleNodeModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = '#d0edfe';
        style.strokeWidth = '7';
        style.fill = '#15a4fa';
        return style;
    }
    initNodeData(data) {
        super.initNodeData(data);
        this.r = 30;
    }
    getOutlineStyle() {
        const style = super.getOutlineStyle();
        style.stroke = "#15a4fa";
        style.hover.stroke = "#15a4fa";
        return style;
    }
}

class UserTaskView extends CircleNode { }

export default {
    type: "Circle",
    view: UserTaskView,
    model: UserTaskModel
};
