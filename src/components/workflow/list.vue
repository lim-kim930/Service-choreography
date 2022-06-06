<template>
  <div style="text-align: left">
    <h3>工作流</h3>
    <t-button theme="primary" @click="openAddDialog">
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
      <!-- <template #status="{ row }">
        <p v-if="row.status === 0" class="status">正在使用</p>
        <p v-if="row.status === 1" class="status unhealth">未使用</p>
      </template>-->
      <template #op="slotProps">
        <a class="link" @click="openEditDialog(slotProps)">编辑</a>
        <span style="display: inline-block; width: 10px"></span>
        <a class="link delete" @click="deleteFlow(slotProps)">删除</a>
      </template>
    </t-table>
    <t-dialog
      :header="editIndex?'编辑工作流':'新建工作流'"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="createOrEditFlow"
    >
      <div slot="body">
        <t-form :data="formData" ref="form" :colon="true" labelWidth="120px">
          <t-form-item requiredMark :required="true" label="工作流名称" name="name">
            <t-input clearable v-model="formData.name" placeholder="请输入"></t-input>
          </t-form-item>
          <t-form-item v-if="!editIndex" requiredMark :required="true" label="选择产品" name="name">
            <t-select v-model="formData.productId">
              <t-option
                v-for="item in productsData"
                :value="item.index"
                :label="item.name"
                :key="item.index"
              ></t-option>
            </t-select>
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
      editIndex: null,
      worksData: [],
      productsData: [],
      formData: {
        name: "",
        description: "",
        productId: ""
      },
      columns: [
        {
          align: 'center',
          colKey: 'name',
          title: '工作流名称'
        },
        // {
        //   align: 'center',
        //   colKey: 'status',
        //   width: 120,
        //   title: '状态',
        //   cell: 'status'
        // },
        {
          align: 'center',
          colKey: 'product',
          title: '所属产品',
          cell: 'product'
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
          colKey: 'description',
          title: '描述/备注',
          ellipsis: true
        },
        {
          align: 'center',
          colKey: 'op',
          title: '操作',
          cell: 'op'
        }
      ],
    };
  },
  props: ["wh"],
  components: { AddIcon },
  methods: {
    openAddDialog() {
      this.formData = {
        name: "",
        description: "",
        productId: ""
      };
      this.dialogVisible = true;
    },
    openEditDialog(value) {
      this.editIndex = value.row.index;
      this.formData = {
        name: value.row.name,
        description: value.row.description,
        productId: value.row.productId
      };
      this.dialogVisible = true;
    },
    deleteFlow(value) {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定要删除工作流: " + value.row.name + " 吗?",
        onConfirm: () => {
          console.log(value);
          this.worksData.splice(value.rowIndex, 1);
          localStorage.setItem("worksData", JSON.stringify(this.worksData));
          let productsData = JSON.parse(localStorage.getItem("productsData"));
          productsData.forEach(item => {
            if (item.index === value.row.productId) {
              item.workflow = null;
              item.workflowId = null;
            }
          });
          localStorage.setItem("productsData", JSON.stringify(productsData));
          dialog.hide();
          this.$message.success("删除成功 !");
        },
        onClose: () => {
          dialog.hide();
        }
      });
    },
    createOrEditFlow() {
      if (!this.formData.name)
        return this.$message.error("请完成必填项 !");
      sessionStorage.removeItem("new_workflow");
      sessionStorage.removeItem("edit_workflow");
      // let date = new Date();
      // this.worksData.push({
      //   name: this.formData.name,
      //   description: this.formData.description,
      //   status: 1,
      //   index: this.worksData.length + 1,
      //   createAt: date.toLocaleString(),
      //   modeAt: date.toLocaleString()
      // });
      if (this.editIndex) {
        // this.worksData[this.editIndex - 1].name = this.formData.name;
        // this.worksData[this.editIndex - 1].description = this.formData.description;
        // this.worksData[this.editIndex - 1].modeAt = new Date().toLocaleString;
        sessionStorage.setItem("edit_workflow", JSON.stringify({
          formData: this.formData,
          inputJson: this.worksData[this.editIndex - 1].inputJson,
          graphData: this.worksData[this.editIndex - 1].graphData,
          editIndex: this.editIndex
        }));
      }
      else {
        sessionStorage.setItem("new_workflow", JSON.stringify(this.formData));
      }
      this.dialogVisible = false;
      this.$router.push("/workflow/edit");
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$message.info({
        content: '操作已取消',
        closeBtn: true,
        duration: 1500,
      });
    }
  },
  mounted() {
    this.worksData = JSON.parse(localStorage.getItem("worksData")) || [];
    this.productsData = JSON.parse(localStorage.getItem("productsData"));
    this.worksData.forEach(item => {
      this.productsData.forEach(product => {
        if (item.productId === product.index) {
          item.product = product.name;
        }
      });
    });
    if (sessionStorage.getItem("productInfo")) {
      this.formData = {
        name: "",
        description: "",
        product: JSON.parse(sessionStorage.getItem("productInfo")).name,
        productId: JSON.parse(sessionStorage.getItem("productInfo")).index
      };
      this.dialogVisible = true;
      sessionStorage.removeItem("productInfo");
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
