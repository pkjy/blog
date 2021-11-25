<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminDashboard from './admin/index.vue'
import EditorDashboard from './editor/index.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    AdminDashboard,
    EditorDashboard
  },
  data() {
    return {
      currentRole: 'admin-dashboard'
    }
  },
  created() {
    if (!this.$store.state.user.roles.includes('admin')) {
      this.currentRole = 'editor-dashboard'
    }
  }
})
</script>
