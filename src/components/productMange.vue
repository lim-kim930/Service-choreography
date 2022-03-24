<template>
  <div style="text-align: left">
    <h3>产品列表</h3>
    <t-button theme="primary" @click="dialogVisible = true">
      <add-icon slot="icon" name="AddIcon" />新增
    </t-button>
    <t-table
      empty="当前还没有产品"
      rowKey="index"
      :data="worksData"
      :columns="columns"
      :maxHeight="wh - 320"
      :hover="true"
      :expanded-row-keys="expandedRowKeys"
      :expanded-row="expandedRow"
      @expand-change="rehandleExpandChange"
      :expandOnRowClick="expandOnRowClick"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">已发布</p>
        <p v-if="row.status === 1" class="status unhealth">未发布</p>
      </template>
      <template #op-column>
        <p>操作</p>
      </template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">修改</a>
        <span style="display: inline-block; width: 10px"></span>
        <a class="link delete" @click="rehandleClickOp(slotProps)">删除</a>
      </template>
    </t-table>
    <t-dialog
      header="新建产品"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="createFlow"
    >
      <div slot="body">
        <t-form :data="formData" ref="form" :colon="true">
          <t-form-item requiredMark :required="true" label="产品名称" name="name">
            <t-input clearable v-model="formData.name" placeholder="请输入"></t-input>
          </t-form-item>
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
      expandControl: 'true',
      expandIcon: true,
      expandOnRowClick: true,
      dialogVisible: false,
      worksData: [{
        index: 1,
        name: "产品1",
        description: "这是描述1这是描述1这是描述1这是描述1这是描述1",
        createAt: "2022-01-01 09:00",
        workflow: "工作流2",
        money: 10000,
        status: 0,
        time: "4",
        add: 1000,
        method: "按季度"
      },{
        index: 2,
        name: "产品2",
        description: "这是描述2这是描述2这是描述2这是描述2这是描述2",
        createAt: "2022-01-01 09:00",
        workflow: "工作流1",
        status: 1,
        money: 3000,
        time: "2",
        add: 1000,
        method: "按定期周期"
      }],
      formData: {
        name: "",
        description: ""
      },
      columns: [
        {
          align: 'center',
          width: '100',
          colKey: 'index',
          title: '序号'
        },
        {
          align: 'center',
          colKey: 'name',
          title: '产品名称'
        },
        {
          align: 'center',
          colKey: 'status',
          width: 100,
          title: '状态',
          cell: 'status'
        },
        {
          align: 'center',
          colKey: 'time',
          title: '产品存期(年)',
        },
        {
          align: 'center',
          colKey: 'money',
          title: '起存金额(元)',
        },
        {
          align: 'center',
          colKey: 'createAt',
          title: '创建时间'
        },
        {
          align: 'center',
          colKey: 'workflow',
          title: '工作流'
        },
        {
          align: 'center',
          colKey: 'op',
          title: 'op-column',
          cell: 'op'
        }
      ],
      expandedRowKeys: ['2'],
      // defaultExpandedRowKeys: ['2', 4],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>产品介绍:</b>
          </p>
          <p class="content">{row.description}</p>
          <br />
          <p class="title">
            <b>购买递增金额:</b>
          </p>
          <p class="content">{row.add}</p>
          <br />
          <p class="title">
            <b>结息方式:</b>
          </p>
          <p class="content">{row.method}</p>
        </div>
      ),
      globalLocale: {
        table: {
          expandIcon: (h) => h && <ChevronRightIcon />,
        },
      },
    }
  },
  props: ["wh"],
  components: { AddIcon },
  methods: {
    rehandleExpandChange(value, { expandedRowData }) {
      this.expandedRowKeys = value;
      console.log('rehandleExpandChange', value, expandedRowData);
    },
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$message.info({
        content: '操作已取消',
        closeBtn: true,
        duration: 1500,
      });
    },
    createFlow() {
      this.dialogVisible = false;
      let date = new Date();
      this.worksData.push({
        name: this.formData.name,
        description: this.formData.description,
        status: 1,
        index: this.worksData.length + 1,
        createAt: date.toLocaleString(),
        modeAt: date.toLocaleString()
      })
      this.$router.push("/workflow/edit");
    }
  }
}
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
      left: 0px;
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
}
</style>
