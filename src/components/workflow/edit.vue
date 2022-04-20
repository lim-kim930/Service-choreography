<template>
  <div class="workArea">
    <h3>
      <div class="item">
        <t-button shape="circle" variant="text" style="margin: -5px 0 0 5px" @click="backToList">
          <icon name="chevron-left"></icon>
        </t-button>
        {{title}}
        <t-button style="position: absolute; right: 100px" theme="primary" @click="getData">完成</t-button>
      </div>
    </h3>
    <div class="workArea_content">
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
        header="编辑节点"
      >
        <div class="t-drawer-demo-div">
          <span>节点名称</span>
          <t-input v-model="form.Name" />
        </div>
        <div class="t-drawer-demo-div">
          <span>备注描述</span>
          <t-textarea v-model="form.Comment" placeholder="请输入描述" />
        </div>
        <div class="t-drawer-demo-div" v-show="form.Resource !== undefined">
          <span>原子服务</span>
          <t-select v-model="resourceIndex" :options="services" placeholder="请选择" />
        </div>
        <div class="t-drawer-demo-div" v-show="form.Resource !== undefined">
          <span>接口</span>
          <t-select v-model="form.Resource" :options="resources[resourceIndex]" placeholder="请选择" />
        </div>
        <t-button theme="primary" v-show="form.Resource || form.Type === 'Choice'" @click="details">
          <MenuFoldIcon />详细配置
        </t-button>
      </t-drawer>
      <vue-json-editor
        v-model="inputJson"
        :showBtns="false"
        :mode="'code'"
        @json-change="onJsonChange"
        lang="zh"
      />
    </div>
    <t-dialog
      :header="'节点详细配置 - ' + form.Name"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="confirmDetails"
    >
      <div id="dialog" slot="body">
        <t-form :data="detailsData" :colon="true">
          <t-form-item requiredMark :required="true" label="参数" name="params">
            <t-cascader
              style="width: 200px"
              v-model="detailsData.params"
              :options="form.Resource?apiOptions[form.Resource].params:(form.lastNode?form.lastNode:[])"
              clearable
              multiple
              value-type="full"
              size="medium"
              placeholder="请选择"
              class="t-demo-cascader"
            ></t-cascader>
          </t-form-item>
          <t-form-item
            requiredMark
            v-for="(item, index) in form.Choices"
            v-bind:key="item.Next"
            :required="true"
            :label="'条件' + (index + 1)"
            name="condition"
          >
            <t-select v-model="condition[index].method" placeholder="请选择判断规则" style="width: 200px">
              <t-option value="BooleanEquals" label="布尔值是否等于设定值" key="BooleanEquals"></t-option>
              <t-option value="NumericEquals" label="数值是否等于设定值" key="NumericEquals"></t-option>
              <t-option value="IsBoolean" label="是否为布尔值" key="IsBoolean"></t-option>
              <t-option value="IsNumeric" label="是否为数值" key="IsNumeric"></t-option>
              <t-option value="StringEquals" label="字符串是否等于设定值" key="StringEquals"></t-option>
            </t-select>
            <t-input
              style="margin-left: 10px"
              v-show="condition[index].method && condition[index].method !== 'IsBoolean' && condition[index].method !== 'IsNumeric'"
              v-model="condition[index].value"
              placeholder="请输入设定值"
            />
          </t-form-item>
          <t-form-item
            requiredMark
            v-if="form.Default"
            :required="true"
            :label="'Default'"
            name="condition"
          >
            <!-- <t-select v-model="defaultData.method" placeholder="请选择判断规则" style="width: 200px">
              <t-option value="BooleanEquals" label="布尔值是否等于设定值" key="BooleanEquals"></t-option>
              <t-option value="NumericEquals" label="数值是否等于设定值" key="NumericEquals"></t-option>
              <t-option value="IsBoolean" label="是否为布尔值" key="IsBoolean"></t-option>
              <t-option value="IsNumeric" label="是否为数值" key="IsNumeric"></t-option>
              <t-option value="StringEquals" label="字符串是否等于设定值" key="StringEquals"></t-option>
            </t-select> -->
            <t-input
              style="width: 200px"
              disabled
              placeholder="其他"
            />
          </t-form-item>
          <t-form-item v-if="!form.Choices" requiredMark :required="true" label="输出" name="output">
            <t-cascader
              style="width: 200px"
              v-model="detailsData.output"
              :options="form.Resource?apiOptions[form.Resource].output:[]"
              clearable
              multiple
              value-type="full"
              size="medium"
              placeholder="请选择"
              class="t-demo-cascader"
            ></t-cascader>
          </t-form-item>
        </t-form>
      </div>
    </t-dialog>
  </div>
</template>

<script src="./../../wasm_exec.js"></script>
<script>
import { Icon, MenuFoldIcon } from 'tdesign-icons-vue';
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
      title: "新建工作流",
      workflowInfo: {},
      resultInfo: {},
      inputJson: {
        "TimeoutSeconds": 60,
        "Comment": "",
        "StartAt": "",
        "States": {}
      },
      detailsData: {
        params: "",
        output: ""
      },
      condition: [{
        method: "",
        value: ""
      }],
      defaultData: {
        method: "",
        value: ""
      },
      apiOptions: {
        "grpc:AccountService.GetAccountInfo": {
          params: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'AccountID',
                  value: 'AccountID',
                }
              ],
            }
          ],
          output: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'AccountInfo',
                  value: 'AccountInfo',
                  children: [
                    {
                      label: 'AccountID',
                      value: 'AccountID'
                    },
                    {
                      label: 'BelongToUserID',
                      value: 'BelongToUserID'
                    },
                    {
                      label: 'IdentityInfo',
                      value: 'IdentityInfo'
                    },
                    {
                      label: 'Location',
                      value: 'Location'
                    },
                    {
                      label: 'Labels',
                      value: 'Labels'
                    }
                    ,
                    {
                      label: 'Balance',
                      value: 'Balance'
                    }
                  ]
                }
              ],
            }
          ]
        },
        "grpc:StorageService.LockStorage": {
          params: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'ProductID',
                  value: 'ProductID',
                },
                {
                  label: 'AccountID',
                  value: 'AccountID',
                },
                {
                  label: 'Delta',
                  value: 'Delta',
                }
              ],
            }
          ],
          output: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'TransactionID',
                  value: 'TransactionID',
                }
              ],
            }
          ]
        },
        "grpc:OrderService.CreateOrder": {
          params: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'ProductID',
                  value: 'ProductID',
                },
                {
                  label: 'UserID',
                  value: 'UserID',
                },
                {
                  label: 'Delta',
                  value: 'Delta',
                }
              ],
            }
          ],
          output: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'OrderID',
                  value: 'OrderID',
                }
              ],
            }
          ]
        },
        "grpc:StorageService.ReleaseStorage": {
          params: [
            {
              label: '$',
              value: '$',
              children: [
                {
                  label: 'TransactionID',
                  value: 'TransactionID',
                }
              ],
            }
          ],
          output: [
            {
              label: '$',
              value: '$'
            }
          ]
        }
      },
      dialogVisible: false,
      resourceIndex: null,
      serviceData: [],
      services: [],
      resources: [],
      passCount: 1,
      taskCount: 1,
      choiceCount: 1,
      sameCount: 0,
      conditionCount: {},
      choice_default: "",
      modifiedNodeID: "",
      visible: false,
      form: {
        "Comment": "",
        "Name": "",
        "Resource": "",
      },
      x_avaliable: [],
      y_avaliable: []
    };
  },
  components: { Icon, vueJsonEditor, MenuFoldIcon },
  methods: {
    backToList() {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定返回工作流列表吗? 你可能有未保存工作 !",
        onConfirm: () => {
          this.$router.push("/workflow/list");
          dialog.hide();
        },
        onClose: () => {
          dialog.hide();
        }
      });
    },
    onJsonChange() {
      console.log(this.resultInfo);
      // let now = this.lf.getGraphData();
      // now.nodes.forEach(item => {
      //   for (let i = 0; i < this.resultInfo.nodes.length; i++) {
      //     if (this.resultInfo.nodes[i].id === item.id) {
      //       Object.keys(this.resultInfo.nodes[i].properties).forEach(item2 => {
      //         item.properties[item2] = this.resultInfo.nodes[i].properties[item2];
      //       });
      //     }
      //   }
      // });
      // this.lf.graphModel.graphDataToModel(now);
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
    details() {
      this.dialogVisible = true;
      this.detailsData = {};
      this.condition = [{
        method: "",
        value: ""
      }];
      if (this.form.Name === "Choice节点1"){
        console.log(65);
        this.form.lastNode = [{
          label: '$',
          value: '$',
          children: [
            {
              label: 'AccountInfo',
              value: 'AccountInfo',
              children: [
                {
                  label: 'Location',
                  value: 'Location'
                },
              ],
            }
          ]
        }]
      }
        
      else
        this.form.lastNode = [
          {
            label: '$',
            value: '$',
            children: [
              {
                label: 'OrderID',
                value: 'OrderID',
              }
            ],
          }
        ]
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$message.info({
        content: '操作已取消',
        closeBtn: true,
        duration: 1500,
      });
    },
    confirmDetails() {
      console.log(this.detailsData);
      console.log(this.form);
      if(!this.form.Choices)
        this.form.OutputPath = this.detailsData.output[0].join(".");
      else{
        this.form.Choices[0].Variable = this.detailsData.params[0].join(".");
        this.form.Choices[0][this.condition[0].method] = this.condition[0].value;
        this.form.lastNode = undefined;
      }

      this.dialogVisible = false;
    },
    codeTranslator(graphData) {
      this.inputJson.States = {};
      let endID = "";
      // 第一轮找出开始与结束节点
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
        item.properties.inChoice = undefined;
        if (item.type === "Circle" || item.type === "Waiting")
          return;
        this.inputJson.States[item.properties.Name] = item.properties;
        if (item.type === "Choice") {
          this.inputJson.States[item.properties.Name] = item.properties;
          this.conditionCount[item.properties.Name] = this.inputJson.States[item.properties.Name].Choices.length + 1;
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
        if (tempSort[pointer].Type === "Choice")
          return
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
    // choiceNodeSort(tempSort, pointer) {
    //   if (tempSort[pointer].Choices.length === 0 || i === tempSort[pointer].Choices.length)
    //     pointer = tempSort[pointer].Default ? tempSort[pointer].Default : "";
    //   // 选择节点内的节点
    //   else {
    //     pointer = tempSort[pointer].Choices[i].Next;
    //     let choice_end = false;
    //     while (!end) {
    //       if (!pointer)
    //         return
    //     }
    //     i++;
    //   }
    // },
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
          id: "Pass节点" + this.passCount,
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
          id: "Task节点" + this.taskCount,
          type,
          properties: {
            "Name": "Task节点" + this.taskCount,
            "Type": type,
            "Comment": "",
            "Resource": "",
            "Parameters": {},
            "OutputPath": "$",
            "InputPath": "$"
          }
        });
        this.taskCount++;
      }
      else if (type && type === "Choice") {
        this.lf.dnd.startDrag({
          id: "Choice节点" + this.choiceCount,
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
      this.form
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
    reRender(nodes, ifWaiting) {
      // 先按y坐标排序,再赋值统一间距的y坐标,渲染后加边
      nodes.sort((a, b) => {
        return a.y - b.y;
      });
      nodes.forEach((item, index) => {
        item.y = 40 + index * 100;
      });
      this.lf.graphModel.graphDataToModel({
        nodes
      });
      // 开始渲染边
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
    // fetchLocal(url) {
    //   let xhr = new XMLHttpRequest;
    //   xhr.open('GET', url, false);
    //   xhr.send(null);
    //   return xhr.responseText;
    // },
    async getData() {
      // let file = await this.fetchLocal('./product_service.proto');
      // Object.keys(this.inputJson.States).forEach((item, index) => {
      //   if (this.inputJson.States[item].Resource) {
      //     const index = this.inputJson.States[item].Resource.split(":")[1].split(".")[0];
      //     this.serviceData.forEach(item => {
      //       if (item.apis[0].search(index) !== -1){
      //         try{
      //           CoreWASM.AddResourceFromProto(item.name, "http://localhost:3000", item.fileName, item.content);
      //         }
      //         catch(ex){
      //           return this.$message.error("原子服务文件导入出错 !");
      //         }
      //         // console.log(item.name);
      //         // console.log(item.fileName);
      //         // console.log(item.content ===file);
      //       }
      //     })
      //   }
      // })

      // CoreWASM.DoDataAnalysisForInput(this.inputJson)
      // const file = this.fetchLocal('./user_service.proto');
      // 
      // const res = CoreWASM.GenerateCompilableZip("111111", JSON.stringify(this.inputJson));
      // let blob = new Blob([res], { type: "application/zip" })
      // var el = document.createElement('a');
      // el.style.display = 'none';
      // el.download = this.workflowInfo.name + ".zip";
      // el.href = URL.createObjectURL(blob);
      // document.body.appendChild(el);
      // el.click();
      // document.body.removeChild(el);
      const loadingAttachInstance = this.$loading({
        fullscreen: true,
        showOverlay: true,
        text: "加载中...",
        size: '30px',
      });
      let worksData = JSON.parse(localStorage.getItem("worksData")) || [];
      let productsData = JSON.parse(localStorage.getItem("productsData"));
      if (this.workflowInfo.editIndex) {
        worksData[this.workflowInfo.editIndex - 1] = {
          name: this.workflowInfo.formData.name,
          description: this.workflowInfo.formData.description,
          productId: this.workflowInfo.formData.productId,
          status: 1,
          index: this.workflowInfo.editIndex,
          createAt: worksData[this.workflowInfo.editIndex - 1].createAt,
          modeAt: new Date().toLocaleString(),
          graphData: this.lf.getGraphData(),
          inputJson: this.inputJson,
          version: "v1.0.0"
        };
        productsData.forEach(item => {
          if (item.index === this.workflowInfo.formData.productId) {
            item.workflow = this.workflowInfo.formData.name;
            item.status = 2;
            item.version = "v1.0.0"
          }
        });
      }
      else {
        worksData.push({
          name: this.workflowInfo.name,
          description: this.workflowInfo.description,
          productId: this.workflowInfo.productId,
          status: 1,
          index: worksData.length + 1,
          createAt: new Date().toLocaleString(),
          modeAt: new Date().toLocaleString(),
          graphData: this.lf.getGraphData(),
          inputJson: this.inputJson,
          version: "v1.0.0"
        });
        productsData.forEach(item => {
          if (item.index === this.workflowInfo.productId) {
            item.workflow = this.workflowInfo.name;
            item.workflowId = worksData.length + 1;
            item.status = 2;
            item.version = "v1.0.0"
          }
        });
      }
      localStorage.setItem("productsData", JSON.stringify(productsData));
      localStorage.setItem("worksData", JSON.stringify(worksData));
      localStorage.setItem("counts", JSON.stringify({
        passCount: this.passCount,
        taskCount: this.taskCount,
        choiceCount: this.choiceCount,
        conditionCount: this.conditionCount,
        sameCount: this.sameCount
      }));
      setTimeout(() => {
        loadingAttachInstance.hide();
        this.$message.success("保存成功 !");
        this.$router.push("/workflow/list");

      }, 500)
    },
    addNode(args) {
      this.lf.graphModel.addNode({
        id: "node_" + args.data.y + 80,
        type: 'Waiting',
        x: args.data.x,
        y: args.data.y + 80
      });
      let data = this.lf.getGraphData();
      this.reRender(data.nodes, true);
    },
    addInChoiceNode(args) {
      this.lf.graphModel.addNode({
        id: "node_" + args.data.y + 80,
        type: 'Waiting',
        x: args.data.x,
        y: args.data.y + 80
      });
      let data = this.lf.getGraphData();
      data.nodes.sort((a, b) => {
        return a.y - b.y;
      });
      this.sameCount -= 1
      data.nodes.forEach((item, index) => {
        if (item.y === args.data.y)
          this.sameCount++
      });
      data.nodes.forEach((item, index) => {
        if (item.y > args.data.y) {
          console.log(item);
          item.y = 40 + (index - this.sameCount) * 100;
        }
      });
      let targetNodeId = ""
      data.edges.forEach(element => {
        if (element.sourceNodeId === args.data.id) {
          data.edges.push({
            type: 'bezier',
            sourceNodeId: "node_" + args.data.y + 80,
            targetNodeId: element.targetNodeId
          });
          targetNodeId = element.targetNodeId
          return;
        }
      });
      data.edges.forEach((element, index) => {
        if (element.sourceNodeId === args.data.id) {
          data.edges.push({
            type: 'bezier',
            sourceNodeId: args.data.id,
            targetNodeId: "node_" + args.data.y + 80
          });
          data.edges.splice(index, 1);
          return;
        }
      });
      data.edges.forEach((element, index) => {
        if (element.targetNodeId === targetNodeId && element.sourceNodeId !== ("node_" + args.data.y + 80)) {
          data.edges.push({
            type: 'bezier',
            sourceNodeId: element.sourceNodeId,
            targetNodeId: targetNodeId
          });
          data.edges.splice(index, 1);
          return;
        }
      });
      console.log(data);
      this.lf.graphModel.graphDataToModel(data);
    },
    addChoiceNode(args) {
      let data = this.lf.getGraphData();
      let length = 1;
      let choicesNode = [];
      args.data.properties.Choices.forEach(item => {
        choicesNode.push(item.Next);
        length++;
      });
      if (args.data.properties.Default) {
        choicesNode.push(args.data.properties.Default)
        length++;
      }
      const halfLength = parseInt(length / 2);
      let x_set = [];
      if (length % 2 !== 0) {
        for (let i = 1; i <= halfLength; i++) {
          x_set.push(args.data.x - (i * 340));
        }
        x_set.push(args.data.x);
        for (let i = 1; i <= halfLength; i++) {
          x_set.push(args.data.x + (i * 340));
        }
      }
      else {
        for (let i = 1; i <= halfLength; i++) {
          x_set.push(args.data.x - (i * 170));
        }
        for (let i = 1; i <= halfLength; i++) {
          x_set.push(args.data.x + (i * 170));
        }
      }
      if (length === 2)
        data.nodes.forEach(item => {
          if (item.y > args.data.y && item.type !== "Circle") {
            this.lf.graphModel.updateAttributes(item.id, { x: x_set[0] });
          }
        })
      else
        for (let i = 0; i < length - 1; i++) {
          this.lf.graphModel.updateAttributes(choicesNode[i], { x: x_set[i] });
        }
      this.lf.graphModel.addNode({
        id: "node_" + args.data.y + 100,
        type: 'Waiting',
        x: x_set[length - 1],
        y: args.data.y + 100
      });
      let t = [];
      let endID = "";
      data.nodes.forEach(item => {
        if (item.type === "Circle" && item.properties.End)
          return endID = item.id;
      })
      let targetNodeId = ""
      data.edges.forEach(element => {
        if (element.sourceNodeId === args.data.id) {
          targetNodeId = element.targetNodeId
          if (this.lf.getNodeModelById(element.targetNodeId).type !== "Circle")
            // 将节点对应的边的条件继承过来
            t.push({
              id: element.targetNodeId,
              condition: element.text.value
            });
          this.lf.graphModel.deleteEdgeById(element.id);
          return;
        }
      });

      t.push({
        id: "node_" + args.data.y + 100,
        // 以choice_default判断添加的节点条件
        condition: this.choice_default ? ("Default") : ("条件" + this.conditionCount[args.data.properties.Name])
      })
      let list = [];// 判断是否需要下移
      t.forEach(item => {
        list.push(item.id);
        this.lf.graphModel.addEdge({
          type: 'bezier',
          sourceNodeId: args.data.id,
          targetNodeId: item.id,
          id: args.data.id + item.condition
        });
        const edgeModel = this.lf.getEdgeModelById(args.data.id + item.condition);
        if (edgeModel)
          edgeModel.updateText(item.condition);
      })
      let newdata = this.lf.getGraphData();
      newdata.nodes.sort((a, b) => {
        return a.y - b.y;
      });
      newdata.nodes.forEach((item) => {
        if (item.y >= this.lf.getNodeModelById(t[t.length - 1].id).y && list.indexOf(item.id) === -1)
          this.lf.graphModel.updateAttributes(item.id, { y: this.lf.getNodeModelById(t[t.length - 1].id).y + 100 });
      });
      t.forEach(item => {
        this.lf.graphModel.addEdge({
          type: 'bezier',
          sourceNodeId: item.id,
          targetNodeId: endID
        });
      });
      data.edges.forEach(element => {
        if (list.indexOf(element.sourceNodeId) !== -1) {
          this.lf.graphModel.deleteEdgeById(element.id);
        }
      });
      data.edges.forEach(element => {
        if (element.targetNodeId === targetNodeId && element.sourceNodeId !== ("node_" + args.data.y + 100) && element.sourceNodeId !== args.data.id) {
          this.lf.graphModel.addEdge({
            type: 'bezier',
            sourceNodeId: element.sourceNodeId,
            targetNodeId: targetNodeId,
            endPoint: { x: 390, y: 740 }
          });
          this.lf.graphModel.deleteEdgeById(element.id);
          return;
        }
      });
      // this.lf.graphModel.graphDataToModel({
      //   nodes
      // });
      // this.reRender(data.nodes, true, args.data.id);
    }
  },
  mounted() {
    this.workflowInfo = JSON.parse(sessionStorage.getItem("new_workflow")) || JSON.parse(sessionStorage.getItem("edit_workflow"));
    const counts = JSON.parse(localStorage.getItem("counts")) || {
      passCount: 1,
      taskCount: 1,
      choiceCount: 1,
      conditionCount: {},
      sameCount: 0
    }
    this.passCount = counts.passCount;
    this.taskCount = counts.taskCount;
    this.choiceCount = counts.choiceCount;
    this.conditionCount = counts.conditionCount;
    this.sameCount = counts.sameCount;
    sessionStorage.removeItem("new_workflow");
    sessionStorage.removeItem("edit_workflow");
    let graphData = {};
    if (this.workflowInfo.editIndex) {
      const loadingAttachInstance = this.$loading({
        fullscreen: true,
        showOverlay: true,
        text: "加载中...",
        size: '30px',
      });
      setTimeout(() => {
        loadingAttachInstance.hide();
      }, 500)
      this.inputJson.Comment = this.workflowInfo.formData.description;
      this.title = "编辑工作流 - " + this.workflowInfo.formData.name;
      this.inputJson = this.workflowInfo.inputJson;
      graphData = this.workflowInfo.graphData;
    }
    else {
      this.inputJson.Comment = this.workflowInfo.description;
      this.title = "新建工作流 - " + this.workflowInfo.name;
      graphData = {
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
            "id": "Hello",
            "type": "Pass",
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
            "id": "World",
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
            "targetNodeId": "Hello",
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
            "sourceNodeId": "Hello",
            "targetNodeId": "World",
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
            "sourceNodeId": "World",
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
    }
    this.serviceData = JSON.parse(localStorage.getItem("serviceData"));
    this.serviceData.forEach((item, index) => {
      this.services.push({ label: item.name, value: index });
      this.resources[index] = [];
      item.apis.forEach(item2 => {
        this.resources[index].push({ label: item2.split("/")[1], value: 'grpc:' + item2.split("/")[0] + '.' + item2.split("/")[1] });
      });
    });
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

    this.lf.render(graphData);
    this.resultInfo = this.lf.getGraphData();
    this.codeTranslator(this.lf.getGraphData());
    const { eventCenter } = this.lf.graphModel;
    eventCenter.on('node:dnd-add', (args) => {
      let x = null, y = 0;
      this.x_avaliable.forEach(item => {
        if (args.data.x > item[0] && args.data.x < item[1])
          this.y_avaliable.forEach(item2 => {
            if (args.data.y > item2[0] && args.data.y < item2[1]) {
              x = item[0] + 75;
              y = item2[0] + 20;
            }
          });
      });
      if (x === null) {
        this.lf.graphModel.deleteNode(args.data.id);
        return this.$message.warning('请正确放置');
      }
      let data = this.lf.getGraphData();
      let waitid = "";
      // 定位到要放置的waiting
      data.nodes.forEach((item, index) => {
        if (item.type === "Waiting" && item.x === x && item.y === y) {
          waitid = item.id;
          data.nodes.splice(index, 1);
        }
      });
      data.nodes.forEach((item, index) => {
        if (item.id === args.data.id) {
          data.nodes.splice(index, 1);
        }
      });

      // 将指向waiting的边转移给新加的节点
      let nextNode = "";
      data.edges.forEach(item => {
        let modifiedNode = this.lf.getNodeModelById(item.sourceNodeId);
        if (item.targetNodeId === waitid) {
          item.targetNodeId = args.data.id;
          // 对选择节点进行Choices或者Default属性赋值
          if (modifiedNode.type !== "Choice" && modifiedNode.getProperties().inChoice) {
            args.data.properties.inChoice = true;
          }
          else if (modifiedNode.type === "Choice") {
            args.data.properties.inChoice = true;
            data.nodes.forEach((item2) => {
              if (item2.id === modifiedNode.id) {
                if (!this.choice_default)
                  item2.properties.Choices.push({
                    "Variable": "",
                    "BooleanEquals": "",
                    "NumericEquals": 0,
                    "IsBoolean": "",
                    "IsNumeric": "",
                    "StringEquals": "",
                    "Next": args.data.properties.Name
                  })
                else
                  item2.properties.Default = args.data.properties.Name;
              }
            });
          }
        }
        if (item.sourceNodeId === waitid) {
          if (args.data.type === "Choice" && this.lf.getNodeModelById(item.targetNodeId).type !== "Circle") {
            nextNode = this.lf.getNodeModelById(item.targetNodeId).getProperties().Name;
            item.text = "条件1";
          }
          item.sourceNodeId = args.data.id;
        }
      });
      args.data.x = x;
      args.data.y = y;
      if (args.data.type === "Choice" && nextNode)
        args.data.properties.Choices = [{
          "Variable": "",
          "BooleanEquals": "",
          "NumericEquals": 0,
          "IsBoolean": "",
          "IsNumeric": "",
          "StringEquals": "",
          "Next": nextNode
        }]
      data.nodes.push(args.data);
      this.lf.graphModel.graphDataToModel(data);
      this.resultInfo = this.lf.getGraphData();
      this.codeTranslator(this.lf.getGraphData());
    });
    eventCenter.on('node:dbclick', (args) => {
      if (args.data.type === "Circle" || args.data.type === "Waiting")
        return false;
      this.modifiedNodeID = args.data.id;
      this.resourceIndex = null
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
              confirmBtn: "条件" + this.conditionCount[args.data.properties.Name],
              placement: "center",
              cancelBtn: !args.data.properties.Default ? "其他Default" : null,
              onConfirm: () => {
                this.choice_default = "";
                this.addChoiceNode(args);
                conditionDia.destroy();
              },
              onCancel: () => {
                this.choice_default = args.data.properties.Name;
                this.addChoiceNode(args);
                conditionDia.destroy();
              }
            });
            return confirmDia.destroy();
          }
          if (args.data.properties.inChoice) {
            confirmDia.destroy();
            return this.addInChoiceNode(args);
          }
          this.addNode(args);
          confirmDia.destroy();
        },
        onCancel: () => {
          this.lf.graphModel.deleteNode(args.data.id);
          let newdata = this.lf.getGraphData();
          this.reRender(newdata.nodes, false);
          confirmDia.destroy();
        }
      });
    });
  },
};
</script>

<style scoped>
.item {
  line-height: 32px;
  margin-bottom: 10px;
}
.workArea {
  text-align: left;
  padding-left: 0;
}
.workArea h3 {
  margin: 0;
}
.workArea_content {
  display: flex;
  height: 650px;
}
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
  width: 250px;
  height: 650px;
  float: left;
  border: 1px solid #d8d8d8;
}
.flow_container {
  float: left;
  width: 800px;
  height: 650px;
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