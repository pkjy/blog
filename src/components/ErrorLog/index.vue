<template>
  <div>
    <el-badge :is-dot="true"
              style="line-height: 25px; margin-top: -5px;"
              v-if="errorLogs.length>0"
              @click="dialogTableVisible=true">
      <Svg name="kai-bug"></Svg>
    </el-badge>

    <el-dialog v-model="dialogTableVisible"
               width="80%"
               append-to-body>
      <template #title>
        <span style="padding-right: 10px;">Error Log</span>
        <el-button size="mini"
                   type="primary"
                   icon="el-icon-delete"
                   @click="clearAll">
          Clear All
        </el-button>
      </template>
      <el-table :data="errorLogs"
                border>
        <el-table-column label="Message">
          <template v-slot="{row}">
            <div>
              <span class="message-title">Msg:</span>
              <el-tag type="danger">
                {{ row.err.message }}
              </el-tag>
            </div>
            <br>
            <div>
              <span class="message-title"
                    style="padding-right: 10px;">Info: </span>
              <el-tag type="warning">
                {{ row.vm.$el }} error in {{ row.info }}
              </el-tag>
            </div>
            <br>
            <div>
              <span class="message-title"
                    style="padding-right: 16px;">Url: </span>
              <el-tag type="success">
                {{ row.url }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template v-slot="scope">
            {{ scope.row.err.stack }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'
export default defineComponent({
  name: 'ErrorLog',
  setup() {
    const dialogTableVisible = ref(false)
    const store = useStore()
    const errorLogs = computed(() => store.state.errorLog.logs)

    function clearAll() {
      dialogTableVisible.value = false
      store.dispatch('errorLog/ClearErrorLog')
    }

    return {
      dialogTableVisible,
      clearAll,
      errorLogs
    }
  },
})
</script>

<style lang="scss" scoped>
.message-title {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-right: 8px;
}
</style>
