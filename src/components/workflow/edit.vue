<template>
  <div style="text-align: left; padding-left: 0">
    <h3>
      <div class="item">
        <t-button shape="circle" variant="text">
          <icon name="chevron-left"></icon>
        </t-button>新建工作流
      </div>
    </h3>
    <div class="nodes">
      <div class="control_header">原子服务</div>
      <div class="control">
        <div @mousedown="addDragNode" data-type="Task">
          <svg viewBox="0 0 1024 1024" p-id="8287" width="14" height="14">
            <path
              d="M861.8 195.4c-1.1 0-2.5 0.6-4 1.8-47.5 37.6-95.1 51.5-142.6 51.5-135.6 0-271.2-113.3-406.8-113.3-47.5 0-95.1 13.9-142.6 51.5-3.5 2.8-6.3 8-6.3 11.5v685.3h64V628.5c28.3-11.9 56.6-17 84.9-17 135.6 0 271.2 113.3 406.8 113.3 47.5 0 95.1-13.9 142.6-51.5 3.5-2.8 6.3-8 6.3-11.5V198.4c0.1-2-0.8-3-2.3-3z m-61.7 440.5c-26.7 16.9-54.1 24.9-84.9 24.9-55 0-115.1-25.1-178.7-51.7-72.5-30.3-147.5-61.6-228.1-61.6-29.3 0-57.6 4.3-84.9 12.9V224.3c26.7-16.9 54.1-24.9 84.9-24.9 55 0 115.1 25.1 178.7 51.7 72.5 30.3 147.5 61.6 228.1 61.6 29.3 0 57.6-4.3 84.9-12.9v336.1z"
              fill="#000000"
              p-id="8288"
            />
          </svg> 任务节点
        </div>
      </div>
      <div class="control_header">流程控制节点</div>
      <div class="control">
        <div @mousedown="addDragNode" data-type="Pass">
          <svg viewBox="0 0 1024 1024" p-id="2193" width="14" height="14">
            <path
              d="M505.6 300.8c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h147.2V102.4c0-19.2 19.2-38.4 38.4-38.4 12.8 0 19.2 6.4 25.6 12.8l281.6 281.6c12.8 12.8 12.8 38.4 0 51.2l-281.6 281.6c-12.8 12.8-38.4 12.8-51.2 0-6.4-6.4-12.8-19.2-12.8-25.6V550.4H352c-19.2 0-38.4-19.2-38.4-38.4V441.6l-192 192 192 192v-70.4c0-19.2 19.2-38.4 38.4-38.4h185.6c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H390.4v121.6c0 12.8-6.4 19.2-12.8 25.6-12.8 12.8-38.4 12.8-51.2 0L38.4 659.2c-12.8-12.8-12.8-38.4 0-51.2L326.4 320c6.4 0 12.8-6.4 25.6-6.4 19.2 0 38.4 19.2 38.4 38.4v121.6h300.8c19.2 0 38.4 19.2 38.4 38.4v70.4l192-192-192-192v70.4c0 19.2-19.2 38.4-38.4 38.4H505.6v-6.4z"
              fill="#000000"
              p-id="2194"
            />
          </svg> 传递节点
        </div>
        <!-- <div @mousedown="addDragNode" data-type="Parallel">并行节点</div> -->
        <div @mousedown="addDragNode" data-type="Choice">
          <svg viewBox="0 0 1024 1024" p-id="10404" width="14" height="14">
            <path
              d="M959.884171 640.029318h-127.976012v-95.971348a64.030651 64.030651 0 0 0-64.009329-64.009329H543.95147v-95.971348h95.971348a64.009328 64.009328 0 0 0 63.988006-64.009328V64.11594a64.009328 64.009328 0 0 0-63.988006-63.988007H383.970793a64.030651 64.030651 0 0 0-64.009328 63.988007v255.952025a64.030651 64.030651 0 0 0 64.009328 64.009328h95.971348v95.971348H255.973458a64.030651 64.030651 0 0 0-63.988006 64.009329v95.971348H64.00944a64.030651 64.030651 0 0 0-63.988007 63.988006v255.973348a64.030651 64.030651 0 0 0 63.988007 63.988006h255.952025a64.030651 64.030651 0 0 0 64.009328-63.988006V704.017324a64.030651 64.030651 0 0 0-64.009328-63.988006h-63.988007v-95.971348h511.925372v95.971348h-63.988006a64.030651 64.030651 0 0 0-63.988006 63.988006v255.973348a64.030651 64.030651 0 0 0 63.988006 63.988006h255.973347a64.030651 64.030651 0 0 0 63.988007-63.988006V704.017324a64.030651 64.030651 0 0 0-63.988007-63.988006z m-575.913378-319.961353V64.11594h255.952025v255.952025H383.970793z m-64.009328 383.949359v255.973348H64.00944V704.017324h255.952025z m639.922706 255.973348H703.910824V704.017324h255.973347v255.973348z"
              p-id="10405"
              fill="#000000"
            />
          </svg> 选择节点
        </div>
        <!-- <div @mousedown="addDragNode" data-type="Map">循环节点</div> -->
      </div>
    </div>
    <div class="flow_container" ref="container"></div>
    <t-drawer
      :visible="visible"
      :showOverlay="false"
      @close="handleClose"
      :onConfirm="handleConfirm"
      header="抽屉标题"
    >
      <div class="t-drawer-demo-div">
        <span>节点名称</span>
        <t-input v-model="form.Name" />
      </div>
      <div class="t-drawer-demo-div">
        <span>备注描述</span>
        <t-textarea v-model="form.Comment" placeholder="请输入描述" />
      </div>
      <div class="t-drawer-demo-div">
        <span>原子服务</span>
        <t-select v-model="form.Resource" :options="resources" placeholder="请选择" />
      </div>
    </t-drawer>
    <vue-json-editor
      v-model="inputJson"
      :showBtns="false"
      :mode="'code'"
      @json-change="onJsonChange"
      lang="zh"
    />
    <t-button shape="circle" variant="text" @click="getData">
      <icon name="chevron-left"></icon>
    </t-button>新建工作流
  </div>
</template>

<script src="https://cdn.rawgit.com/dcodeIO/protobuf.js/6.11.2/dist/protobuf.js"></script>
<script src="./../../wasm_exec.js"></script>
<script>
import { Icon } from 'tdesign-icons-vue';
// import { Menu } from '@logicflow/extension';
import { Control } from '@logicflow/extension';
import { DndPanel } from '@logicflow/extension';
// import { Group } from '@logicflow/extension';

import Circle from './../../node/circle';
import Pass from './../../node/pass';
import Waiting from './../../node/waiting';
import Task from './../../node/task';
import Choice from './../../node/choice';
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import '@logicflow/extension/lib/style/index.css';

import vueJsonEditor from 'vue-json-editor';
LogicFlow.use(Control);
// LogicFlow.use(Menu);
LogicFlow.use(DndPanel);
export default {
  data() {
    return {
      CoreWASM: {},
      resultInfo: {},
      inputJson: {
        "TimeoutSeconds": 60,
        "Comment": "使用Pass节点演示helloworld示例",
        "StartAt": "",
        "States": {}
      },
      resources: [
        { label: 'test1', value: 'grpc:test1' },
        { label: 'test2', value: 'grpc:test2' }
      ],
      passCount: 1,
      taskCount: 1,
      choiceCount: 1,
      conditionCount: 1,
      modifiedNodeID: "",
      visible: false,
      form: {
        "Comment": "",
        "Name": "",
        "Resource": ""
      },
      x_avaliable: [],
      y_avaliable: []
    };
  },
  components: { Icon, vueJsonEditor },
  methods: {
    onJsonChange() {
      console.log(this.resultInfo);
      let now = this.lf.getGraphData();
      now.nodes.forEach(item => {
        for (let i = 0; i < this.resultInfo.nodes.length; i++) {
          if (this.resultInfo.nodes[i].id === item.id) {
            Object.keys(this.resultInfo.nodes[i].properties).forEach(item2 => {
              item.properties[item2] = this.resultInfo.nodes[i].properties[item2];
            });
          }
        }
      });
      this.lf.graphModel.graphDataToModel(now);
    },
    getNextNode(id) {
      let nodes = [];
      let data = this.lf.getGraphData();
      data.edges.forEach(item => {
        if (item.sourceNodeId === id) {
          nodes.push(this.lf.getNodeModelById(item.targetNodeId));
        }
      });
      return nodes;
    },
    codeTranslator(graphData) {
      this.inputJson.States = {};
      let endID = "";
      graphData.nodes.forEach((item) => {
        if (item.type === "Circle" && item.properties.Start) {
          let startID = item.id;
          let StartAt = this.getNextNode(startID);
          this.inputJson.StartAt = StartAt[0].getProperties().Name ? StartAt[0].getProperties().Name : "";
        }
        else if (item.type === "Circle" && item.properties.End) {
          endID = item.id;
        }
      });
      graphData.nodes.forEach((item) => {
        if (item.type === "Circle" || item.type === "Waiting")
          return;
        this.inputJson.States[item.properties.Name] = item.properties;
        if (item.type === "Choice") {
          if (this.getNextNode(item.id)[0].type === "Circle")
            this.inputJson.States[item.properties.Name].Choices = [];
          else
            this.inputJson.States[item.properties.Name].Choices = [{
              "Variable": "",
              "BooleanEquals": "",
              "NumericEquals": 0,
              "IsBoolean": "",
              "IsNumeric": "",
              "StringEquals": "",
              "Next": this.getNextNode(item.id)[0].getProperties().Name
            }];
          this.conditionCount = this.inputJson.States[item.properties.Name].Choices.length + 1;
        }
        this.getNextNode(item.id).forEach(item2 => {
          if (item2.id === endID)
            return this.inputJson.States[item.properties.Name].End = true;
          else {
            if (item.type !== "Choice")
              this.inputJson.States[item.properties.Name].Next = item2.getProperties().Name;
          }
        });
      });
      // 排序
      let tempSort = {};
      tempSort[this.inputJson.StartAt] = this.inputJson.States[this.inputJson.StartAt];
      let pointer = this.inputJson.StartAt;
      let end = false;
      let i = 0;
      while (!end) {
        if (!pointer)
          return
        if (tempSort[pointer].Type === "Choice") {
          pointer = tempSort[pointer].Choices[i].Next;
          i++
        }
        else
          pointer = tempSort[pointer].Next;
        if (!pointer)
          return
        tempSort[pointer] = this.inputJson.States[pointer];
        if (tempSort[pointer].End)
          end = true;
      }
      this.inputJson.States = tempSort;
    },
    addDragNode(e) {
      let data = this.lf.getGraphData();
      this.x_avaliable = [];
      this.y_avaliable = [];
      let flag = 0;
      data.nodes.forEach(item => {
        if (item.type === "Waiting") {
          this.x_avaliable.push([item.x - 75, item.x + 75]);
          this.y_avaliable.push([item.y - 20, item.y + 20]);
          flag++;
        }
      });
      if (flag === 0)
        return this.$message.warning('没有可以添加的区域');
      const type = e.target.getAttribute("data-type");
      if (type && type === "Pass") {
        this.lf.dnd.startDrag({
          type,
          properties: {
            "Name": "Pass节点" + this.passCount,
            "Type": type,
            "Comment": "",
            "OutputPath": "$",
            "InputPath": "$"
          }
        });
        this.passCount++;
      }
      else if (type && type === "Task") {
        this.lf.dnd.startDrag({
          type,
          properties: {
            "Name": "Task节点" + this.taskCount,
            "Type": type,
            "Comment": "",
            "Resource": "grpc:test1",
            "Parameters": {},
            "OutputPath": "$",
            "InputPath": "$"
          }
        });
        this.taskCount++;
      }
      else if (type && type === "Choice") {
        this.lf.dnd.startDrag({
          type,
          properties: {
            "Name": "Choice节点" + this.choiceCount,
            "Type": type,
            "Comment": "",
            "OutputPath": "$",
            "InputPath": "$",
            "Choices": [],
            "Default": ""
          }
        });
        this.choiceCount++;
      }
    },
    handleConfirm() {
      this.lf.setProperties(this.modifiedNodeID, this.form);
      this.visible = false;
      let data = this.lf.getGraphData();
      this.codeTranslator(data);
    },
    handleClose() {
      this.visible = false;
    },
    getNext(id) {
      let data = this.lf.getGraphData();
      let result = {};
      data.edges.forEach(item => {
        if (item.sourceNodeId === id)
          result = this.lf.getNodeModelById(item.targetNodeId);
      });
      return result;
    },
    reGender(nodes, ifWaiting) {
      nodes.sort((a, b) => {
        return a.y - b.y;
      });
      nodes.forEach((item, index) => {
        item.y = 40 + index * 100;
      });
      this.lf.graphModel.graphDataToModel({
        nodes
      });
      for (let i = 0; i < nodes.length - 1; i++) {
        this.lf.graphModel.addEdge({
          type: 'polyline',
          sourceNodeId: nodes[i].id,
          targetNodeId: nodes[i + 1].id
        });
      }
      this.resultInfo = this.lf.getGraphData();
      if (!ifWaiting)
        this.codeTranslator(this.lf.getGraphData());
    },
    fetchLocal(url) {
      let xhr = new XMLHttpRequest;
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    },
    async getData() {
      const file = this.fetchLocal('./user_service.proto');
      CoreWASM.AddResourceFromProto("111", "http://localhost:3000", "user_service.proto", file);
      const res = CoreWASM.GenerateCompilableZip("111", JSON.stringify(this.inputJson));
      let blob = new Blob([res], { type: "application/zip" })
      var el = document.createElement('a');
      el.style.display = 'none';
      el.download = this.inputJson.Comment + ".zip";
      el.href = URL.createObjectURL(blob);
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    },
  },
  mounted() {
    this.lf = new LogicFlow({
      // plugins: [
      //   Group
      // ],
      container: this.$refs.container,
      stopScrollGraph: true,
      width: 800,
      height: 650,
      grid: true,
      isSilentMode: true //静默模式
    });
    this.lf.register(Circle);
    this.lf.register(Pass);
    this.lf.register(Waiting);
    this.lf.register(Task);
    this.lf.register(Choice);
    // this.lf.register(Parallel);
    const graphData = {
      "nodes": [
        {
          "id": "777b5d3e-931f-4d7a-b9d0-9070d25287b5",
          "type": "Circle",
          "x": 360,
          "y": 80,
          "properties": {
            "Start": true
          }
        },
        {
          "id": "4baa97dc-9eb3-4b95-ad7b-15a79c942bc1",
          "type": "Choice",
          "x": 360,
          "y": 220,
          "properties": {
            "Name": "Hello",
            "Type": "Pass",
            "Comment": "",
            "OutputPath": "$",
            "InputPath": "$"
          }
        },
        {
          "id": "31b59739-6ea7-4354-bcdc-802377beb215",
          "type": "Pass",
          "x": 360,
          "y": 360,
          "properties": {
            "Name": "World",
            "Type": "Pass",
            "Comment": "",
            "OutputPath": "$",
            "InputPath": "$"
          }
        },
        {
          "id": "54eb681b-07ca-435c-9185-e9f46a208ec1",
          "type": "Circle",
          "x": 360,
          "y": 500,
          "properties": {
            "End": true
          }
        }
      ],
      "edges": [
        {
          "id": "0967d780-e271-49fc-b20e-0415d759e542",
          "type": "polyline",
          "sourceNodeId": "777b5d3e-931f-4d7a-b9d0-9070d25287b5",
          "targetNodeId": "4baa97dc-9eb3-4b95-ad7b-15a79c942bc1",
          "startPoint": {
            "x": 360,
            "y": 110
          },
          "endPoint": {
            "x": 360,
            "y": 195
          },
          "properties": {},
          "pointsList": [
            {
              "x": 360,
              "y": 110
            },
            {
              "x": 360,
              "y": 195
            }
          ]
        },
        {
          "id": "d1dd4fbe-aaf5-44fa-b11f-acce7748762d",
          "type": "polyline",
          "sourceNodeId": "4baa97dc-9eb3-4b95-ad7b-15a79c942bc1",
          "targetNodeId": "31b59739-6ea7-4354-bcdc-802377beb215",
          "startPoint": {
            "x": 360,
            "y": 245
          },
          "endPoint": {
            "x": 360,
            "y": 335
          },
          "properties": {},
          "pointsList": [
            {
              "x": 360,
              "y": 245
            },
            {
              "x": 360,
              "y": 335
            }
          ]
        },
        {
          "id": "0b84bd49-7d58-44d5-8b94-c78be15cc76d",
          "type": "polyline",
          "sourceNodeId": "31b59739-6ea7-4354-bcdc-802377beb215",
          "targetNodeId": "54eb681b-07ca-435c-9185-e9f46a208ec1",
          "startPoint": {
            "x": 360,
            "y": 385
          },
          "endPoint": {
            "x": 360,
            "y": 470
          },
          "properties": {},
          "pointsList": [
            {
              "x": 360,
              "y": 385
            },
            {
              "x": 360,
              "y": 470
            }
          ]
        }
      ]
    };
    this.lf.render(graphData);
    this.resultInfo = this.lf.getGraphData();
    this.codeTranslator(this.lf.getGraphData());
    const { eventCenter } = this.lf.graphModel;
    eventCenter.on('node:dnd-add', (args) => {
      let x = 0, y = 0;
      this.x_avaliable.forEach(item => {
        if (args.data.x > item[0] && args.data.x < item[1])
          this.y_avaliable.forEach(item2 => {
            if (args.data.y > item2[0] && args.data.y < item2[1]) {
              x = item[0] + 75;
              y = item2[0] + 20;
            }
          });
      });
      if (x === 0) {
        this.lf.graphModel.deleteNode(args.data.id);
        return this.$message.warning('请正确放置');
      }
      let data = this.lf.getGraphData();
      let waitid = "";
      data.nodes.forEach((item, index) => {
        if (item.type === "Waiting" && item.x === x && item.y === y) {
          waitid = item.id;
          data.nodes.splice(index, 1);
        }
      });
      data.nodes.forEach((item, index) => {
        if (item.id === args.data.id)
          data.nodes.splice(index, 1);
      });
      data.edges.forEach((item) => {
        if (item.targetNodeId === waitid)
          item.targetNodeId = args.data.id;
        if (item.sourceNodeId === waitid)
          item.sourceNodeId = args.data.id;
      });
      args.data.x = x;
      args.data.y = y;
      data.nodes.push(args.data);
      this.lf.graphModel.graphDataToModel(data);
      this.resultInfo = this.lf.getGraphData();
      this.codeTranslator(this.lf.getGraphData());
    });
    eventCenter.on('node:dbclick', (args) => {
      if (args.data.type === "Circle" || args.data.type === "Waiting")
        return false;
      this.modifiedNodeID = args.data.id;
      this.form = this.lf.getNodeModelById(args.data.id).getProperties();
      this.visible = true;
    });
    eventCenter.on('node:contextmenu', (args) => {
      if ((args.data.type === "Circle" && args.data.properties.End) || args.data.type === "Waiting")
        return false;
      let confirmBtn = '添加节点';
      let cancelBtn = "删除节点";
      if (args.data.type === "Circle")
        cancelBtn = null;
      let next = this.getNext(args.data.id);
      if (next.type === "Waiting")
        return false;
      const confirmDia = this.$dialog.confirm({
        header: '请选择你要进行的操作:',
        theme: "warning",
        confirmBtn,
        placement: "center",
        cancelBtn,
        onConfirm: () => {
          if (args.data.type === "Choice") {
            const conditionDia = this.$dialog.confirm({
              header: '请选择你要添加的节点条件:',
              theme: "warning",
              confirmBtn: "条件" + this.conditionCount,
              placement: "center",
              cancelBtn: !args.data.properties.Default ? "其他Default" : null,
              onConfirm: () => {
                conditionDia.destroy();
              },
              onCancel: () => {
                // this.inputJson.States[args.data.properties.Name].Default = 
                this.lf.graphModel.addNode({
                  id: "node_" + args.data.y + 80,
                  type: 'Waiting',
                  x: 350,
                  y: args.data.y + 80
                });
                this.lf.graphModel.addEdge({
                  type: 'polyline',
                  sourceNodeId: args.data.id,
                  targetNodeId: "node_" + args.data.y + 80,
                });
                let t = null;
                let data = this.lf.getGraphData();
                data.edges.forEach(element => {
                  if (element.sourceNodeId === args.data.id) {
                    this.lf.graphModel.deleteEdgeById(element.id);
                    t = element.targetNodeId;
                  }
                });
                this.lf.graphModel.addEdge({
                  type: 'polyline',
                  sourceNodeId: "node_" + args.data.y + 80,
                  targetNodeId: t,
                });
                let newdata = this.lf.getGraphData();
                this.reGender(newdata.nodes, true);
                conditionDia.destroy();
              }
            });
            return confirmDia.destroy();
          }
          let data = this.lf.getGraphData();
          this.lf.graphModel.addNode({
            id: "node_" + args.data.y + 80,
            type: 'Waiting',
            x: 350,
            y: args.data.y + 80
          });
          this.lf.graphModel.addEdge({
            type: 'polyline',
            sourceNodeId: args.data.id,
            targetNodeId: "node_" + args.data.y + 80,
          });
          let t = null;
          data.edges.forEach(element => {
            if (element.sourceNodeId === args.data.id) {
              this.lf.graphModel.deleteEdgeById(element.id);
              t = element.targetNodeId;
            }
          });
          this.lf.graphModel.addEdge({
            type: 'polyline',
            sourceNodeId: "node_" + args.data.y + 80,
            targetNodeId: t,
          });
          let newdata = this.lf.getGraphData();
          this.reGender(newdata.nodes, true);
          confirmDia.destroy();
        },
        onCancel: () => {
          this.lf.graphModel.deleteNode(args.data.id);
          let newdata = this.lf.getGraphData();
          this.reGender(newdata.nodes, false);
          confirmDia.destroy();
        }
      });
    });
  },
};
</script>

<style scoped>
.control_header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
}
.control {
  width: 100%;
  padding: 5px;
  background-color: #f6f6f6;
}
.control div {
  margin: 10px 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  user-select: none;
  cursor: move;
  background-color: #fff;
}
.control svg {
  vertical-align: middle;
}
.nodes {
  border: 1px solid #ccc;
  width: 250px;
  height: 650px;
  float: left;
}
.flow_container {
  float: left;
  width: 800px;
  height: 650px;
  border: 1px solid #d8d8d8;
}
</style>

<style>
.uml-container,
.uml-wait-container {
  border: 1px solid #d8d8d8;
  border-radius: 25px;
  height: 50px;
  cursor: pointer;
}
.uml-wait-container {
  height: 40px;
  border-radius: 5px;
}
.uml-container div,
.uml-wait-container div {
  float: left;
  height: 48px;
  line-height: 48px;
}
.uml-wait-container div {
  line-height: 40px;
  text-align: center;
  color: #ccc;
  height: 40px;
  width: 100%;
}
.uml-head {
  width: 60px;
  background-color: black;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  text-align: center;
}
.uml-head svg {
  margin: 12px;
}
.uml-body {
  width: 238px;
  padding-left: 10px;
}
.uml-body-add,
.uml-body-reduce {
  display: block;
  float: right;
  width: 30px;
  font-size: 20px;
}
.uml-parallel-body {
  width: 180px;
}
.uml-button {
  width: 29px;
  text-align: center;
  border-radius: 50%;
  font-weight: 700;
  font-size: 20px;
  color: #15a4fa;
}
.uml-button:hover {
  background-color: #ccc;
}
.t-button {
  margin-right: 20px;
}
.t-drawer-demo-div {
  margin-bottom: 24px;
}
.jsoneditor-mode-code {
  border: 1px solid #d8d8d8 !important;
}
.jsoneditor-vue {
  display: inline-block;
  width: 500px;
  height: 650px;
}
.jsoneditor-menu {
  display: none;
}
.jsoneditor-outer {
  height: 683px !important;
}
</style>