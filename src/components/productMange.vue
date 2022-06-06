<template>
  <div style="text-align: left;padding: 10px">
    <h3>产品列表</h3>
    <t-button theme="primary" @click="openAddDialog">
      <add-icon slot="icon" name="AddIcon" />新增
    </t-button>
    <t-table
      empty="当前还没有产品"
      rowKey="index"
      :data="productsData"
      :columns="columns"
      :hover="true"
      :expandOnRowClick="false"
      :expanded-row="expandedRow"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">已发布</p>
        <p v-if="row.status === 1" class="status unhealth">未发布</p>
        <p v-if="row.status === 2" class="status warning">投票中</p>
        <p v-if="row.status === 3" class="status error">未通过</p>
      </template>
      <template #op="slotProps">
        <a v-if="slotProps.row.status === 1" class="link" @click="editProduct(slotProps)">修改</a>
        <span v-if="slotProps.row.status === 1" style="display: inline-block; width: 10px"></span>
        <!-- <a v-if="slotProps.row.status === 1" class="link" @click="editProduct(slotProps)">发布</a> -->
        <span style="display: inline-block; width: 10px"></span>
        <a
          v-if="slotProps.row.status !== 0"
          class="link delete"
          @click="deleteProduct(slotProps)"
        >删除</a>
      </template>
      <template #workflow="{ row }">
        <p
          v-if="row.workflow === null"
          class="status unhealth"
          style="cursor: pointer; width: 140px;"
          @click="goWorkflow(row)"
        >未绑定(点击编排)</p>
        <p
          v-if="row.workflow !== null"
          :style="{width: row.workflow.length*18 + 72 + 'px', 'margin-left': (152-(row.workflow.length*15))/2 + 'px'}"
          class="status"
        >
          {{row.workflow}}
          <span
            style="color: #ccc;cursor: pointer;"
            @click="goWorkflowEdit(row)"
          >点击编辑</span>
        </p>
      </template>
    </t-table>
    <t-dialog
      header="新建产品"
      :visible="dialogVisible"
      :confirmBtn="step === 1?'下一步':'确定'"
      cancelBtn="取消"
      :onClose="closeDialog"
      :onConfirm="addProduct"
    >
      <div id="dialog" slot="body">
        <t-form :data="formData" ref="form" :colon="true">
          <div v-show="step === 1">
            <t-form-item requiredMark :required="true" label="产品名称" name="name">
              <t-input clearable v-model="formData.name" placeholder="请输入" style="width: 300px"></t-input>
            </t-form-item>
            <t-form-item requiredMark :required="true" label="产品类型" name="name">
              <t-select v-model="formData.type" style="width: 200px">
                <t-option value="定期存款" label="定期存款" key="定期存款"></t-option>
                <t-option value="通知存款" label="通知存款" key="通知存款"></t-option>
              </t-select>
            </t-form-item>
            <t-form-item requiredMark :required="true" label="起存金额" name="name">
              <t-input-number
                v-model="formData.money"
                placeholder="请输入"
                theme="normal"
                :max="1000000"
                :min="1"
              ></t-input-number>
              <span style="margin-left: 5px">元</span>
            </t-form-item>
            <t-form-item requiredMark :required="true" label="产品期限" name="name">
              <t-input-number
                v-model="formData.time"
                placeholder="请输入"
                theme="normal"
                :max="10000"
                :min="1"
              ></t-input-number>
              <span style="margin-left: 5px">
                <t-select v-model="formData.timeType">
                  <t-option value="天" label="天" key="day"></t-option>
                  <t-option value="月" label="月" key="month"></t-option>
                  <t-option value="年" label="年" key="year"></t-option>
                </t-select>
              </span>
            </t-form-item>
            <t-form-item requiredMark :required="true" label="递增金额" name="name">
              <t-input-number
                v-model="formData.add"
                placeholder="请输入"
                theme="normal"
                :max="1000000"
                :min="1"
              ></t-input-number>
            </t-form-item>
            <t-form-item requiredMark :required="true" label="年利率(%)" name="name">
              <t-input-number
                style="width: 200px"
                v-model="formData.rate"
                :max="15"
                :min="0.01"
                theme="normal"
                :decimalPlaces="4"
                :format="value => `${value}%`"
              ></t-input-number>
            </t-form-item>
            <!-- <t-form-item requiredMark :required="true" label="结息方式" name="name">
            <t-select v-model="formData.method">
              <t-option value="按季度" label="按季度" key="day"></t-option>
              <t-option value="按定期周期" label="按定期周期" key="month"></t-option>
            </t-select>
            </t-form-item>-->
            <t-form-item label="描述/介绍" name="description">
              <t-textarea
                clearable
                v-model="formData.description"
                placeholder="请输入"
                name="description"
                :autosize="{minRows: 3, maxRows: 5}"
                :maxcharacter="200"
              />
            </t-form-item>
          </div>
          <div v-show="step === 2">
            <t-form-item v-model="a" label="计息规则" name="1">
              <t-textarea
                clearable
                placeholder="请输入"
                name="a"
                :autosize="{minRows: 3, maxRows: 5}"
              />
            </t-form-item>
            <t-form-item v-model="b" label="存入规则" name="2">
              <t-textarea
                clearable
                placeholder="请输入"
                name="b"
                :autosize="{minRows: 3, maxRows: 5}"
              />
            </t-form-item>
            <t-form-item v-model="c" label="支取规则" name="3">
              <t-textarea
                clearable
                placeholder="请输入"
                name="c"
                :autosize="{minRows: 3, maxRows: 5}"
              />
            </t-form-item>
          </div>
        </t-form>
      </div>
    </t-dialog>
  </div>
</template>

<script>
import { AddIcon } from 'tdesign-icons-vue';
export default {
  data() {
    return {
      next: false,
      expandControl: 'true',
      expandIcon: true,
      dialogVisible: false,
      productsData: [],
      a:"",
      b:"",
      c:"",
      formData: {
        name: "",
        type: "",
        description: "",
        money: 0,
        time: 0,
        timeType: "月",
        add: 0,
        method: "",
        rate: 0
      },
      step: 1,
      columns: [
        {
          align: 'center',
          colKey: 'name',
          title: '产品名称',
          width: 200
        },
        {
          align: 'center',
          colKey: 'status',
          title: '状态',
          cell: 'status',
          width: 120
        },
        {
          align: 'center',
          colKey: 'workflow',
          title: '工作流',
          cell: 'workflow',
          width: 290
        },
        {
          align: 'center',
          colKey: 'type',
          title: '产品类型',
          width: 180
        },
        {
          align: 'center',
          colKey: 'time',
          title: '产品存期(月)',
          width: 170
        },
        {
          align: 'center',
          colKey: 'rate',
          title: '利率',
          width: 140
        },
        {
          align: 'center',
          colKey: 'createAt',
          title: '创建时间',
          width: 270
        },
        {
          align: 'center',
          colKey: 'op',
          title: '操作',
          cell: 'op'
        }
      ],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>产品介绍:</b>
          </p>
          <p>{row.description || "暂无"}</p>
          <div class="data-details">
            <span class="title">
              <b>利率:</b>
            </span>
            <span class="content">{row.rate.toFixed(4) + "%"}</span>
            <span class="title">
              <b>产品存期</b>
            </span>
            <span class="content">{row.time + (row.timeType === "月" ? "个月" : row.timeType)}</span>
            <span class="title">
              <b>起存金额:</b>
            </span>
            <span class="content">{row.money}元</span>
            <span class="title">
              <b>购买递增金额:</b>
            </span>
            <span class="content">{row.add}元</span>
          </div>
        </div>
      ),
      globalLocale: {
        table: {
          expandIcon: (h) => h && <ChevronRightIcon />,
        },
      },
    };
  },
  props: ["wh"],
  components: { AddIcon },
  methods: {
    openAddDialog() {
      this.step = 1;
      this.dialogVisible = true;
      this.formData = {
        name: "",
        type: "",
        description: "",
        money: 0,
        time: 0,
        timeType: "",
        add: 0,
        method: "",
        rate: 0
      };
    },
    editProduct({ text, row }) {
      console.log(text, row);
    },
    goWorkflow(row) {
      sessionStorage.setItem("productInfo", JSON.stringify(row));
      this.$router.push("/workflow/list");
    },
    goWorkflowEdit(row) {
      let worksData = JSON.parse(localStorage.getItem("worksData"));
      worksData.forEach(item => {
        if (item.name === row.workflow) {
          return sessionStorage.setItem("edit_workflow", JSON.stringify({
            formData: {
              name: item.name,
              description: item.description,
              productId: item.productId
            },
            inputJson: item.inputJson,
            graphData: item.graphData,
            editIndex: item.index
          }));
        }
      });
      this.$router.push("/workflow/edit");
    },
    deleteProduct(value) {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定要删除工作流: " + value.row.name + " 吗?",
        onConfirm: () => {
          console.log(value);
          this.productsData.splice(value.rowIndex, 1);
          localStorage.setItem("productsData", JSON.stringify(this.productsData));
          dialog.hide();
          this.$message.success("删除成功 !");
        },
        onClose: () => {
          dialog.hide();
        }
      });
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$message.info({
        content: '操作已取消',
        closeBtn: true,
        duration: 1500,
      });
    },
    addProduct() {
      if (this.step === 1)
        return this.step = 2;
      const loadingAttachInstance = this.$loading({
        attach: '#dialog',
        showOverlay: true,
        text: "提交中...",
        size: '30px',
      });
      let date = new Date();
      this.productsData.push({
        name: this.formData.name,
        type: this.formData.type,
        description: this.formData.description,
        status: 1,
        creater: JSON.parse(localStorage.getItem("arrange_user")).uname,
        money: this.formData.money,// 起存金额
        time: this.formData.time, // 存期
        timeType: this.formData.timeType, // 存期
        rate: this.formData.rate, // 利率
        add: this.formData.add, // 购买递增金额
        method: this.formData.method, //结息方式
        index: this.productsData.length + 1,
        workflow: null,
        createAt: "2022/4/15 01:24:14"
      });
      localStorage.setItem("productsData", JSON.stringify(this.productsData));
      setTimeout(() => {
        loadingAttachInstance.hide();
        this.dialogVisible = false;
        this.$message.success("添加成功 !");
      }, 200);
    }
  },
  mounted() {
    this.productsData = JSON.parse(localStorage.getItem("productsData")) || [];
  }
};
</script>

<style scoped lang="less">
h3 {
  margin-left: 10px;
  display: inline-block;
}
.t-button {
  float: right;
  margin: 15px 10px 0 0;
}
.t-table {
  width: calc(100% - 20px);
  margin: 10px;
  box-shadow: 0px 0px 4px #ccc;
  col {
    height: 20px;
  }
  .link {
    color: #006eff;
    cursor: pointer;
    text-decoration: none;
  }
  .link.delete {
    color: #e34d59;
  }
  .status {
    position: relative;
    color: #00a870;
    margin: 0;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: "";
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #c0c0c0;
    &::before {
      background-color: #c0c0c0;
    }
  }
  .status.warning {
    color: #e6a23c;
    &::before {
      background-color: #e6a23c;
    }
  }
  .status.error {
    color: #f56c6c;
    &::before {
      background-color: #f56c6c;
    }
  }
}
</style>
<style lang="less">
.t-input-number .t-button {
  margin: 0 !important;
}
.data-details {
  display: flex;
  width: 100%;
}
.data-details .content {
  padding-left: 5px;
  display: inline-block;
  margin: 0 20px 0 0;
  flex: 1;
}
</style>