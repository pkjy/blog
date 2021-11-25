<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Redirect',
  created() {
    console.log('Redirect')
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  }

})
</script>
