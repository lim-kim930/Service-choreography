<template>
  <div style="text-align: left">
    <h3>工作流</h3>
    <t-button theme="primary" @click="dialogVisible = true">
      <add-icon slot="icon" name="AddIcon" />新建
    </t-button>
    <t-table
      empty="当前还没有创建的工作流"
      rowKey="index"
      :data="worksData"
      :columns="columns"
      :height="48*(worksData.length?worksData.length:1)"
      :maxHeight="wh - 320"
      :hover="true"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">正在使用</p>
        <p v-if="row.status === 1" class="status unhealth">未使用</p>
      </template>
      <template #op-column>
        <p>操作</p>
      </template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">编辑</a>
        <span style="display: inline-block; width: 10px"></span>
        <a class="link delete" @click="rehandleClickOp(slotProps)">删除</a>
      </template>
    </t-table>
    <t-dialog
      header="新建工作流"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="createFlow"
    >
      <div slot="body">
        <t-form :data="formData" ref="form" :colon="true">
          <t-form-item requiredMark :required="true" label="工作流名称" name="name">
            <t-input clearable v-model="formData.name" placeholder="请输入"></t-input>
          </t-form-item>
          <t-form-item label="描述/备注" name="description">
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
      dialogVisible: false,
      worksData: [{
        index: 1,
        name: "工作流1",
        description: "这是描述1这是描述1这是描述1这是描述1这是描述1",
        createAt: "2022-01-01 09:00",
        modeAt: "2022-01-01 21:00",
        status: 0,
      }, {
        index: 2,
        name: "工作流2",
        description: "这是描述2这是描述2这是描述2这是描述2这是描述2",
        createAt: "2022-01-01 09:00",
        modeAt: "2022-01-01 21:00",
        status: 1,
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
          title: '工作流名称'
        },
        {
          align: 'center',
          colKey: 'status',
          width: 120,
          title: '状态',
          cell: 'status'
        },
        {
          align: 'center',
          colKey: 'description',
          title: '描述/备注',
          ellipsis: true
        },
        {
          align: 'center',
          colKey: 'createAt',
          title: '创建时间'
        },
        {
          align: 'center',
          colKey: 'modeAt',
          title: '最后编辑于'
        },
        {
          align: 'center',
          colKey: 'op',
          title: 'op-column',
          cell: 'op'
        }
      ],
    };
  },
  props: ["wh"],
  components: { AddIcon },
  methods: {
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
      });
      this.$router.push("/workflow/edit");
    }
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
