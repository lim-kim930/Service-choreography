import { Group } from '@logicflow/extension';
class ParallelNode extends Group.view {}
class ParallelNodeModel extends Group.model {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = '#AEAFAE';
        style.strokeDasharray = '3 3';
        style.strokeWidth = 1;
        return style;
    }
}

export default ({
    type: 'Parallel',
    model: ParallelNodeModel,
    view: ParallelNode
});