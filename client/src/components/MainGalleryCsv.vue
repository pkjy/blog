<template>
  <div>
    <example-card>
      <template slot="header">JSON转CSV</template>
      <template slot="content">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
        <div class="text-center"
             style="margin-top:16px;">
          <el-button @click="download"
                     type="primary">下载</el-button>
        </div>
      </template>
      <template slot="desc">
        简介：引入json2csv文件，调用setDataConver方法。接受对象参数：data为数据数组；fileName为文件名；columns为栏。
      </template>
    </example-card>
  </div>
</template>

<script>
import ExampleCard from '@/components/common/ExampleCard'
import json2csv from '@/utils/json2csv.js'
export default {
  name: 'MainGalleryCsv',
  components: {
    ExampleCard
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    download() {
      let copydata = []
      let columns = {}
      let data = []

      copydata = this.tableData.slice(0)
      data = copydata.map(v => {
        return {
          date: v.date,
          name: v.name,
          address: v.address
        }
      })
      columns = {
        title: ['日期', '姓名', '地址'],
        key: ['date', 'name', 'address']
      }

      json2csv.setDataConver({
        data: data,
        fileName: `下载CSV`,
        columns: columns
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
