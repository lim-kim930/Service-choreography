<template>
  <div style="text-align: left">
    <h3>用户管理</h3>
    <t-button theme="primary" @click="dialogVisible = true">
      <add-icon slot="icon" name="AddIcon" />新增
    </t-button>
    <t-table rowKey="index" :data="worksData" :columns="columns" :hover="true">
      <template #op-column>
        <p>操作</p>
      </template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">重置</a>
        <span style="display: inline-block; width: 10px"></span>
        <a class="link delete" @click="rehandleClickOp(slotProps)">删除</a>
      </template>
    </t-table>
    <t-dialog header="新增用户" :visible="dialogVisible" :onClose="closeDialog" :onConfirm="createFlow">
      <div slot="body">
        <t-form :data="formData" ref="form" :colon="true">
          <t-form-item requiredMark :required="true" label="账号" name="name">
            <t-input clearable v-model="formData.name" placeholder="请输入"></t-input>
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
        name: "aaaaa",
        pwd: "********",
        createAt: "2022-01-01 09:00",
        type: "技术管理员",
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
          title: '账号'
        },
        {
          align: 'center',
          colKey: 'type',
          title: '用户角色'
        },
        {
          align: 'center',
          colKey: 'pwd',
          title: '密码',
        },
        {
          align: 'center',
          colKey: 'createAt',
          title: '创建时间'
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
            <b>输入:</b>
          </p>
          <p class="content">{row.input}</p>
          <br />
          <p class="title">
            <b>输出:</b>
          </p>
          <p class="content">{row.output}</p>
        </div>
      ),
      globalLocale: {
        table: {
          expandIcon: (h) => h && <ChevronRightIcon />,
        },
      },
    };
  },
  components: { AddIcon },
  methods: {
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },
    rehandleExpandChange(value, { expandedRowData }) {
      this.expandedRowKeys = value;
      console.log('rehandleExpandChange', value, expandedRowData);
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
      console.log(6666);
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
  margin: 15px 20px 0 0;
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
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
}
</style>
