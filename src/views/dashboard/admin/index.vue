<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24"
              :sm="24"
              :lg="8">
        <div class="chart-wrapper">
          <radar-chart />
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24"
              :sm="24"
              :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}"
              :sm="{span: 24}"
              :md="{span: 24}"
              :lg="{span: 12}"
              :xl="{span: 12}"
              style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
    </el-row> -->
  </div>
</template>

<script lang="ts">
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { defineComponent } from 'vue';
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'
import RadarChart from './components/RadarChart.vue'
// import TransactionTable from './components/TransactionTable.vue'

export default defineComponent({
  name: 'DashboardAdmin',
  components: {
    BarChart,
    PieChart,
    RadarChart,
    // TransactionTable
  }
})
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
