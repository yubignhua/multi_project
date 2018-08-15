<template>
  <el-breadcrumb separator="/" v-show="breadArr.length">
    <el-breadcrumb-item
      v-for="(item,index) in breadArr"
      :key="index"
    >
      <router-link
        v-if="item.routerName"
        :to="{ name : item.routerName }"
      >{{ item.text }}</router-link>
      <span v-else>{{ item.text }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
let breadsStore = {
  // 一级目录
  level0: {
    service_rule: '服务规则',
    staff_manage: '人员管理',
    finance_manage: '财务管理'
  },
  // 二级目录  ps：key值要对应可以跳转的router 命名
  level1: {
    groupList: '分组管理',
    staffList: '员工列表',
    rechargeList: '充值对账',
    consumeList: '使用记录',
    invoiceList: '开票管理'
  },
  // 三级目录
  level2: {
    groupAdd: '创建分组',
    groupEdit: '编辑分组',
    staffAdd: '添加员工',
    staffEdit: '编辑员工',
    invoiceAdd: '开票信息',
    invoiceInfoEdit: '基本信息',
    invoiceInfoAdd: '基本信息'
  }
}

export default {
  computed: {
    breadArr () {
      let breadInfo = this.$route.meta.breads || []
      let length = breadInfo.length
      return breadInfo.map((v, i) => {
        let data = {
          text: breadsStore[`level${i}`][v]
        }
        if (length > i + 1 && i !== 0) { // 一级目录与当前目录不可跳转判断
          data.routerName = v
        }
        return data
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .el-breadcrumb{
    margin-bottom: 30px;
  }
</style>
