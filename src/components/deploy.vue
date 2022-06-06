<template>
  <div style="text-align: left;padding: 10px" class="deploy">
    <h3>部署管理</h3>
    <t-table
      rowKey="index"
      :data="productsData"
      :columns="columns"
      :hover="true"
      :expanded-row="expandedRow"
    >
      <template #name="{row}">
        <p
          :style="{width: row.name.length*18 + 36 + 'px', 'margin-left': (229-(row.name.length*15))/2 + 'px','margin-top': 0,'margin-bottom': 0}"
        >
          {{row.name}}
          <span style="color: #ccc;cursor: pointer;" @click="goProduct()">查看</span>
        </p>
      </template>
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">已发布</p>
        <p v-if="row.status === 1" class="status unhealth">未发布</p>
        <p v-if="row.status === 2" class="status warning">投票中</p>
        <p v-if="row.status === 3" class="status error">未通过</p>
      </template>
      <template #op="{row}">
        <a v-if="row.status === 2 && row.creater !== user" class="link" @click="vote(row)">投票</a>
        <a v-if="row.status === 0" class="link" @click="version(row)">版本管理</a>
        <span v-if="row.status === 0" style="display: inline-block; width: 10px"></span>
        <a v-if="row.status === 0" class="link delete" @click="deleteProduct(row)">下线</a>
      </template>
    </t-table>
    <t-dialog
      :header="'发布投票 - ' + this.formData.name"
      :visible="dialogVisible"
      :onClose="closeDialog"
      :onConfirm="voteConfirm"
    >
      <div slot="body">
        <t-form :data="formData" ref="form" :colon="true">
          <t-form-item label="产品名称" name="name">
            <t-input disabled v-model="formData.name" placeholder="请输入"></t-input>
          </t-form-item>
          <t-form-item label="创建用户" name="name">
            <t-input disabled v-model="formData.creater" placeholder="请输入"></t-input>
          </t-form-item>
          <t-form-item label="投票" name="description">
            <t-radio-group v-model="formData.vote">
              <t-radio value="ok">赞成</t-radio>
              <t-radio value="no">反对</t-radio>
            </t-radio-group>
          </t-form-item>
        </t-form>
      </div>
    </t-dialog>
    <t-dialog
      class="version"
      :header="'版本管理 ' +'- '+modifying.name"
      :visible="dialogVisible2"
      :cancelBtn="null"
      :onClose="()=>{dialogVisible2 = false}"
      :onConfirm="()=>{dialogVisible2 = false}"
    >
      <div slot="body">
        <t-table rowKey="index" :data="modifying.versions" :columns="columns2" bordered>
          <template #op="{row}">
            <a
              v-show="row.version !== modifying.version"
              class="link"
              @click="switchVersion(row)"
            >切换</a>
          </template>
        </t-table>
      </div>
    </t-dialog>
  </div>
</template>

<script>
import { ChevronRightIcon } from 'tdesign-icons-vue';
export default {
  data() {
    return {
      pagination: {
        defaultCurrent: 2,
        defaultPageSize: 5,
        total: 28
      },
      expandControl: 'true',
      expandIcon: true,
      dialogVisible: false,
      dialogVisible2: false,
      productsData: [],
      modifying: {},
      formData: {
        name: "",
        creater: "",
        user: "",
        vote: "ok"
      },
      columns: [
        {
          align: 'center',
          colKey: 'name',
          title: '产品名称',
          cell: 'name',
          width: 300
        },
        {
          align: 'center',
          colKey: 'status',
          title: '部署状态',
          cell: 'status',
          width: 140
        },
        {
          align: 'center',
          colKey: 'creater',
          title: '创建用户'
        },
        {
          align: 'center',
          colKey: 'createAt',
          title: '创建时间'
        },
        {
          align: 'center',
          colKey: 'version',
          title: '工作流版本'
        },
        {
          align: 'center',
          colKey: 'op',
          title: '操作',
          cell: 'op'
        }
      ],
      columns2: [
        {
          align: 'center',
          colKey: 'version',
          title: '版本',
          cell: 'name'
        },
        {
          align: 'center',
          colKey: 'date',
          title: '创建时间',
        },
        {
          align: 'center',
          colKey: 'commit',
          title: 'commit',
        },
        {
          align: 'center',
          colKey: 'workflow',
          title: '工作流'
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
            <b>服务地址:</b>
          </p>
          <p class="content">{row.url || "未发布"}</p>
          <br />
        </div>
      ),
      globalLocale: {
        table: {
          expandIcon: (h) => h && <ChevronRightIcon />,
        },
      },
    };
  },
  methods: {
    goProduct() {
      this.$router.push("/productMange");
    },
    deleteProduct(row) {
      console.log(row);
    },
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },
    vote(row) {
      this.formData.name = row.name;
      this.formData.creater = row.creater;
      this.dialogVisible = true;
    },
    switchVersion(row) {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定要更改版本吗?",
        onConfirm: () => {
          this.productsData.forEach(item => {
            if (item.workflow === row.workflow) {
              item.version = row.version;
              localStorage.setItem("productsData", JSON.stringify(this.productsData));
              return;
            }
          });
          dialog.hide();
          this.$message.success("更改成功 !");
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
    voteConfirm() {
      const loadingAttachInstance = this.$loading({
        fullscreen: true,
        showOverlay: true,
        text: "加载中...",
        size: '30px',
      });
      setTimeout(() => {
        loadingAttachInstance.hide();
        this.dialogVisible = false;
        this.$message.success("投票成功! ");
        if (this.formData.vote === "ok") {
          const loadingAttachInstance2 = this.$loading({
            fullscreen: true,
            showOverlay: true,
            text: "交付部署中...",
            size: '30px',
          });
          this.productsData.forEach(item => {
            if (item.name === this.formData.name) {
              // item.location = item.workflow.split("-")[1];
              item.url = "https://limkim.xyz/financing/product" + item.index;
              item.status = 0;
            }
          });
          setTimeout(() => {
            loadingAttachInstance2.hide();
              this.$message.success("已交付部署 ");
              localStorage.setItem("productsData", JSON.stringify(this.productsData));
            // let products1Data = [];
            // let products2Data = [];
            // this.productsData.forEach(item => {
            //   if (item.status === 0 && item.type === "定期存款")
            //     products1Data.push(item);
            //   else if (item.status === 0 && item.type === "通知存款")
            //     products2Data.push(item);
            // });
            // this.axios({
            //   method: "post",
            //   url: "https://api.limkim.xyz/editProduct",
            //   data: {
            //     products1Data,
            //     products2Data
            //   }
            // }).then(() => {
            //   loadingAttachInstance2.hide();
            //   this.$message.success("已交付部署 ");
            //   localStorage.setItem("productsData", JSON.stringify(this.productsData));
            // }).catch(() => {
            //   this.$message.error("部署失败! ");
            // });
          }, 500);
        }
        else {
          this.productsData.forEach(item => {
            if (item.name === this.formData.name) {
              item.status = 3;
            }
          });
          localStorage.setItem("productsData", JSON.stringify(this.productsData));
        }
      }, 500);
    },
    version(row) {
      this.dialogVisible2 = true;
      this.modifying = row;
      let date = "";
      JSON.parse(localStorage.getItem("worksData")).forEach(item => {
        if (item.productId === this.modifying.index)
          date = item.createAt;
      });
      this.modifying.versions = [
        {
          version: "v1.0.0",
          commit: "新建工作流",
          date,
          workflow: this.modifying.workflow
        },
        {
          version: "v1.1.0",
          commit: "一些修改",
          date: "2022/4/9 20:01:43",
          workflow: this.modifying.workflow
        }
      ];
    }
  },
  mounted() {
    this.productsData = JSON.parse(localStorage.getItem("productsData")) || [];
    this.user = JSON.parse(localStorage.getItem("arrange_user")).uname;
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
.deploy .version .t-dialog--default {
  width: 70% !important;
}
</style>