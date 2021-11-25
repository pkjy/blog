<template>
  <el-table :data="list"
            style="width: 100%;padding-top: 15px;">
    <el-table-column label="OrderID"
                     min-width="200">
      <template v-slot="scope">
        {{ orderId(scope.row.orderId) }}
      </template>
    </el-table-column>
    <el-table-column label="Price"
                     width="195"
                     align="center">
      <template v-slot="scope">
        ¥{{ toThousandFilter(scope.row.price) }}
      </template>
    </el-table-column>
    <el-table-column label="Status"
                     width="100"
                     align="center">
      <template v-slot="{row}">
        <el-tag :type="transactionStatusFilter(row.status)">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getTransactions } from '@/api/transactions'
import { ITransactionData } from '@/api/types'

export default defineComponent({
  name: 'TransactionTable',
  data() {
    return {
      list: []
    } as {
      list: ITransactionData[]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    orderId(str: string) {
      return str.substring(0, 30)
    },
    transactionStatusFilter: (status: string) => {
      const statusMap: { [key: string]: string } = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    toThousandFilter: (num: number) => {
      return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    },
    async fetchData() {
      const response = await getTransactions({ /* Your params here */ })
      this.list = (response.data as { items: ITransactionData[] }).items.slice(0, 8)
    }
  }
})
</script>
