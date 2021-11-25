<template>
  <div>
    <input ref="excelUploadInput"
           class="excel-upload-input"
           type="file"
           accept=".xlsx, .xls"
           @change="handleClick">
    <div class="drop"
         @drop="handleDrop"
         @dragover="handleDragover"
         @dragenter="handleDragover">
      Drop excel file here or
      <el-button :loading="loading"
                 style="margin-left:16px;"
                 size="mini"
                 type="primary"
                 @click="handleUpload">
        Browse
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import XLSX from 'xlsx'

export default defineComponent({
  name: 'UploadExcel',
  props: {
    beforeUpload: {
      required: true,
      type: Function,
    },
    onSuccess: {
      required: true,
      type: Function,
    }
  },
  setup(props) {
    const excelUploadInput = ref()
    const loading = ref(false)
    const excelData = ref({
      header: null,
      results: null
    })

    const generateData = (header: any, results: any) => {
      excelData.value.header = header
      excelData.value.results = results
      props.onSuccess && props.onSuccess(excelData.value)
    }

    const handleDrop = (e: DragEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (loading.value) return
      if (!e.dataTransfer) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        // this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]

      if (!isExcel(rawFile)) {
        // this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
        return false
      }
      upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    }

    const handleDragover = (e: DragEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'copy'
      }
    }

    const handleUpload = () => {
      excelUploadInput.value.click()
    }

    const handleClick = (e: MouseEvent) => {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        const rawFile = files[0] // only use files[0]
        upload(rawFile)
      }
    }

    const upload = (rawFile: File) => {
      excelUploadInput.value = '' // Fixes can't select the same excel
      if (!props.beforeUpload) {
        readerData(rawFile)
        return
      }
      const before = props.beforeUpload(rawFile)
      if (before) {
        readerData(rawFile)
      }
    }

    const readerData = (rawFile: File) => {
      loading.value = true
      const reader = new FileReader()
      reader.onload = e => {
        const data = (e.target as FileReader).result
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        const header = getHeaderRow(worksheet)
        const results = XLSX.utils.sheet_to_json(worksheet)
        generateData(header, results)
        loading.value = false
      }
      reader.readAsArrayBuffer(rawFile)
    }

    const getHeaderRow = (sheet: { [key: string]: any }) => {
      const headers: string[] = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      const R = range.s.r
      // start in the first row
      for (let C = range.s.c; C <= range.e.c; ++C) { // walk every column in the range
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        // find the cell in the first row
        let hdr = ''
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        if (hdr === '') {
          hdr = 'UNKNOWN ' + C // replace with your desired default
        }
        headers.push(hdr)
      }
      return headers
    }

    const isExcel = (file: File) => {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
    return {
      excelUploadInput,
      handleClick,
      handleDrop,
      handleDragover,
      loading,
      handleUpload
    }
  }

})
</script>

<style lang="scss" scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}

.drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
