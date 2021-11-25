<template>
  <div style="margin-top:12px;">
    <el-card class="box-card">
      <template v-slot:header>
        <span class="f-s_16 card__header">
          <slot name="header"></slot>
        </span>
      </template>
      <div class="card__content">
        <slot name="content"></slot>
      </div>
      <div class="card__footer">
        <span>
          <slot name="desc"></slot>
        </span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExampleCard',
})
</script>

<style  scoped>
.box-card {
  width: 900px;
  box-sizing: border-box;
}
.card__content {
  padding-bottom: 20px;
}
.card__footer {
  padding-top: 20px;
  font-size: 14px;
  border-top: 1px solid #e6ebf5;
}
.box-card .card__header {
  font-weight: bold;
}
</style>
