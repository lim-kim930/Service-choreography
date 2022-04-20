<template>
  <div style="text-align: left;padding: 10px">
    <h3>原子服务</h3>
    <t-button theme="primary" @click="openAddDialog">
      <cloud-upload-icon slot="icon" name="CloudUploadIcon" />导入
    </t-button>
    <t-table
      empty="还没有导入过原子服务"
      rowKey="index"
      :data="serviceData"
      :columns="columns"
      :hover="true"
      :expanded-row="expandedRow"
      :expandOnRowClick="false"
    >
      <template #op="slotProps">
        <a class="link" @click="openEditDialog(slotProps)">编辑</a>
        <span style="display: inline-block; width: 10px"></span>
        <a class="link delete" @click="deleteService(slotProps)">删除</a>
      </template>
    </t-table>
    <t-dialog
      :header="editIndex?('编辑' + formData.name):'导入原子服务'"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="addOrEditService"
    >
      <div slot="body" id="dialog">
        <t-form :data="formData" ref="form" :colon="true">
          <t-form-item requiredMark label="服务名称" name="name">
            <t-input clearable v-model="formData.name" placeholder="请输入" style="width: 200px"></t-input>
          </t-form-item>
          <t-form-item requiredMark label="选择文件" name="file" v-show="!editIndex">
            <t-upload
              v-model="formData.fileContent"
              accept=".proto"
              :autoUpload="true"
              theme="file"
              draggable
              tips="只能上传.proto文件"
              action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
            />
          </t-form-item>
          <t-form-item requiredMark label="服务类型" name="address">
            <t-select v-model="formData.type" style="width: 200px" placeholder="请选择">
                <t-option value="http" label="http" key="http"></t-option>
                <t-option value="grpc" label="grpc" key="grpc"></t-option>
              </t-select>
          </t-form-item>
          <t-form-item requiredMark label="服务地址" name="address">
            <t-input clearable v-model="formData.address" placeholder="请输入" style="width: 340px"></t-input>
          </t-form-item>
          <t-form-item label="描述/备注" name="description">
            <t-textarea
              clearable
              v-model="formData.description"
              placeholder="请输入"
              name="description"
              style="width: 340px"
              :autosize="{minRows: 3, maxRows: 5}"
              :maxcharacter="200"
            />
          </t-form-item>
        </t-form>
      </div>
    </t-dialog>
  </div>
</template>
<script src="./../../public/wasm_exec.js"></script>
<script>
import { ChevronRightIcon, CloudUploadIcon } from 'tdesign-icons-vue';
export default {
  data() {
    return {
      dialogVisible: false,
      serviceData: [],
      editIndex: null,
      formData: {
        name: "",
        description: "",
        fileContent: null,
        type: "",
        address: ""
      },
      columns: [
        {
          align: 'center',
          colKey: 'name',
          title: '服务名称',
          width: 220
        },
        {
          align: 'center',
          colKey: 'type',
          title: '服务类型',
          width: 220
        },
        {
          align: 'center',
          colKey: 'address',
          title: '服务地址'
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
          colKey: 'op',
          title: '操作',
          cell: 'op'
        }
      ],
      // defaultExpandedRowKeys: ['2', 4],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>接口定义:</b>
          </p>
          <p style="white-space: pre-line">{row.apis.join("\n")}</p>
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
  components: { CloudUploadIcon },
  methods: {
    openEditDialog(value) {
      this.editIndex = value.rowIndex + 1;
      this.formData = {
        name: value.row.name,
        description: value.row.description,
        type: value.row.type,
        address: value.row.address
      };
      this.dialogVisible = true;
    },
    deleteService(value) {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定要删除原子服务: " + value.row.name + " 吗?",
        onConfirm: () => {
          this.serviceData.splice(value.rowIndex, 1);
          localStorage.setItem("serviceData", JSON.stringify(this.serviceData));
          dialog.hide();
          this.$message.success("删除成功 !");
        },
        onClose: () => {
          dialog.hide();
        }
      });
    },
    // uploadLoading(file){
    //   return new Promise((resolve) => {
    //     file.percent = 0;
    //     setTimeout
    //     const timer = setTimeout(() => {
    //       resolve({ status: 'success', response: { url: 'https://tdesign.gtimg.com/site/avatar.jpg' } });
    //       file.percent = 100;
    //       clearTimeout(timer);
    //     }, 500);
    //   });
    // },
    openAddDialog() {
      this.dialogVisible = true;
      this.formData = {
        name: "",
        description: "",
        fileContent: null
      };
    },
    addOrEditService() {
      if (this.editIndex) {
        if (!this.formData.name)
          return this.$message.error("请完成必填项 !");
        this.serviceData[this.editIndex - 1].name = this.formData.name;
        this.serviceData[this.editIndex - 1].description = this.formData.description;
        this.serviceData[this.editIndex - 1].address = this.formData.address;
        this.serviceData[this.editIndex - 1].type = this.formData.type;
        localStorage.setItem("serviceData", JSON.stringify(this.serviceData));
        this.dialogVisible = false;
        this.$message.success("修改原子服务信息成功 !");
        return this.editIndex = null;
      }
      if (!this.formData.name || !this.formData.fileContent)
        return this.$message.error("请完成必填项 !");
      const loadingAttachInstance = this.$loading({
        attach: '#dialog',
        showOverlay: true,
        text: "提交中...",
        size: '30px',
      });
      let reader = new FileReader();
      reader.readAsText(this.formData.fileContent[0].raw);
      reader.onload = () => {
        try{
          // CoreWASM.AddResourceFromProto(this.formData.name, this.formData.address, this.formData.fileContent[0].name, reader.result);
          const name = this.formData.fileContent[0].name.split(".")[0].split("_");
          const index = name[0].substr(0, 1).toUpperCase() + name[0].slice(1) + name[1].substr(0, 1).toUpperCase() + name[1].slice(1);
          const rpcs = reader.result.split("service " + index)[1].split("message")[0].split("{}").join().split("{")[1].split("}")[0];
          let apis = rpcs.split("\r\n  rpc ");
          let temp = [];
          apis.forEach(item => {
            if (item)
              temp.push(item.split(" return")[0]);
          });
          apis = [];
          temp.forEach(item => {
            apis.push(index + "/" + item.split("(")[0]);
          });
          setTimeout(() => {
            loadingAttachInstance.hide();
            this.$message.success("导入原子服务成功 !");
            this.serviceData.push({
            index: this.serviceData.length + 1,
            name: this.formData.name,
            fileName: this.formData.fileContent[0].name,
            address: this.formData.address,
            description: this.formData.description || name[0] + "_" + name[1],
            createAt: new Date().toLocaleString(),
            type: this.formData.type,
            apis,
            content: reader.result
          });
          localStorage.setItem("serviceData", JSON.stringify(this.serviceData));
            this.dialogVisible = false;
          }, 200);
        } catch(ex){
          this.$message.error("导入原子服务失败: " + ex);
          loadingAttachInstance.hide();
        }
      };
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$message.info({
        content: this.editIndex ? '编辑已取消' : '导入已取消',
        closeBtn: true,
        duration: 1500,
      });
      this.editIndex = null;
    }
  },
  mounted() {
    this.serviceData = JSON.parse(localStorage.getItem("serviceData")) || [];
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
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
}
</style>
<style lang="less">
.t-dialog__modal-default {
  width: 600px;
}
.explink {
  color: #006eff;
  cursor: pointer;
}
</style>