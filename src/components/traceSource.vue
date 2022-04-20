<template>
  <div style="text-align: left;padding: 10px">
    <h3>业务溯源</h3>
    <t-table
      rowKey="index"
      :data="traceData"
      :columns="columns"
      :hover="true"
      :expanded-row="expandedRow"
    ></t-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandControl: 'true',
      expandIcon: true,
      expandOnRowClick: true,
      dialogVisible: false,
      traceData: [{
        index: 1,
        product: "3个月存款产品",
        workflow: "未绑定",
        type: "新建产品",
        content: "新建产品",
        user: "manager1",
        time: "2022/4/9 17:42:38"
      },
      {
        index: 2,
        product: "3个月存款产品",
        workflow: "定期存款-杭州",
        type: "绑定/新建工作流",
        content: "commit: 新建工作流",
        user: "manager1",
        time: "2022/4/9 17:50:21"
      },
      {
        index: 3,
        product: "3个月存款产品",
        workflow: "定期存款-杭州",
        type: "修改工作流",
        content: "commit: 一些修改",
        user: "manager1",
        time: "2022/4/9 20:01:43"
      },
      {
        index: 4,
        product: "3个月存款产品",
        workflow: "定期存款-杭州",
        type: "投票",
        content: "发起投票",
        user: "manager1",
        time: "2022/4/9 17:50:22"
      },
      {
        index: 5,
        product: "3个月存款产品",
        workflow: "定期存款-杭州",
        type: "投票",
        content: "赞成投票",
        user: "manager2",
        time: "2022/4/9 20:03:01"
      },
      {
        index: 6,
        product: "6个月存款产品",
        workflow: "未绑定",
        type: "新建产品",
        content: "新建产品",
        user: "manager2",
        time: "2022/4/15 01:24:14"
      }
      ,
      {
        index: 7,
        product: "6个月存款产品",
        workflow: "定期存款-长沙",
        type: "绑定/新建工作流",
        content: "commit: 新建工作流",
        user: "manager2",
        time: "2022/4/15 01:34:38"
      }
      ,
      {
        index: 4,
        product: "6个月存款产品",
        workflow: "定期存款-长沙",
        type: "投票",
        content: "发起投票",
        user: "manager1",
        time: "2022/4/15 01:35:24"
      },
      {
        index: 5,
        product: "6个月存款产品",
        workflow: "定期存款-长沙",
        type: "投票",
        content: "赞成投票",
        user: "manager2",
        time: "2022/4/15 01:35:49"
      }],
      columns: [
        {
          align: 'center',
          colKey: 'product',
          title: '产品'
        },
        {
          align: 'center',
          colKey: 'workflow',
          title: '工作流'
        },
        {
          align: 'center',
          colKey: 'type',
          title: '操作类型',
        },
        {
          align: 'center',
          colKey: 'content',
          title: '操作内容',
        },
        {
          align: 'center',
          colKey: 'user',
          title: '操作人员'
        },
        {
          align: 'center',
          colKey: 'time',
          title: '操作时间'
        }
      ],
      expandedRowKeys: ['2'],
      // defaultExpandedRowKeys: ['2', 4],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>交易哈希:</b>
          </p>
          <p class="content">0x8bedfe65eef2ce4602bd1c2f37c780ffc2d035f8195390f2c6dd6ff6ded9e9cd</p>
          <p class="title">
            <b>交易号:</b>
          </p>
          <p class="content">0x3f96</p>
          <p class="title">
            <b>区块哈希:</b>
          </p>
          <p class="content">0xdd18b82976baa4f74507cd8a9d1ce9f4ec3d7a1d8f898b1c1454e8f209a7d782</p>
          <p class="title">
            <b>区块时间戳:</b>
          </p>
          <p class="content">1649497358211188570</p>
          <p class="title">
            <b>写入时间:</b>
          </p>
          <p class="content">1649497363247987581</p>
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
