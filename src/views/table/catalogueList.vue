<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="Cname" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="searchCatalogue">
        Search
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Add
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="CID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('cid')">
        <template slot-scope="{row}">
          <span>{{ row.cid }}</span>
        </template>
      </el-table-column>

      <el-table-column label="PID" align="center" width="80" >
        <template slot-scope="{row}">
          <span>{{ row.pid }}</span>
        </template>
      </el-table-column>

      <el-table-column label="CNAME" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.cname}}</span>
        </template>
      </el-table-column>
      <el-table-column label="CURL" min-width="200px">
        <template slot-scope="{row}">
          <span>{{ row.curl}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Actions" align="center" width="200px" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="catalogue" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">

        <el-form-item label="Pid" prop="pid">
          <el-select v-model="catalogue.pid" class="filter-item" placeholder="Please select">
            <el-option key="-1" label="根目录" value="-1" />
            <el-option v-for="item in list" :key="item.cid" :label="item.cname" :value="item.cid" />
          </el-select>
        </el-form-item>
        <el-form-item label="Cname" prop="cname" >
          <el-input v-model="catalogue.cname" />
        </el-form-item>
        <el-form-item label="Curl" prop="curl">
          <el-input v-model="catalogue.curl" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchPv, createCatalogue, updateCatalogue, delCatalogue} from '@/api/catalogue'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination


export default {
  name: 'CatalogueList',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "false"
      },
      importanceOptions: [1, 2, 3],
      sortOptions: [{ label: 'Ascending', key: 'false' }, { label: 'Descending', key: "true" }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      catalogue: {
        cid: undefined,
        pid: undefined,
        cname: "",
        curl: "",
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        pid: [{ required: true, message: 'pid is required', trigger: 'change' }],
        cname: [{ required: true, message: 'cname is required', trigger: 'change' }],
        curl: [{ required: true, message: 'curl is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data
        this.total = response.total

        console.log(this.list)

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.catalogue = {
        cid: undefined,
        pid: undefined,
        cname: "",
        curl: "",
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createCatalogue(this.catalogue).then(res => {
            this.list.unshift(this.catalogue)
            this.dialogFormVisible = false
            // {"code":20000,"status":"ok","info":"添加成功"}
            if (res.status == "ok"){
              this.$notify({
                title: 'Success',
                message: 'Created Successfully',
                type: 'success',
                duration: 2000
              })
            }else {
              this.$notify({
                title: 'error',
                message: 'Created error',
                type: 'error',
                duration: 2000
              })
            }
            this.getList();
          })
        }
      })
    },
    handleUpdate(row) {
      this.catalogue = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },

    searchCatalogue(){
      this.$notify({
        title: 'Success',
        message: '暂时未开发',
        type: 'success',
        duration: 2000
      })
    },

    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const catalogue = Object.assign({}, this.catalogue)
          updateCatalogue(catalogue).then(res => {
            this.dialogFormVisible = false
            if (res.status == "ok"){
              this.$notify({
                title: 'Success',
                message: 'update Successfully',
                type: 'success',
                duration: 2000
              })
            }else {
              this.$notify({
                title: 'error',
                message: 'update error',
                type: 'error',
                duration: 2000
              })
            }
            this.getList();
          })
        }
      })
    },
    handleDelete(row, index) {

      let data = {cid:row.cid}
      delCatalogue(data).then(res=>{
        if (res.status == "ok"){
          this.$notify({
            title: 'Success',
            message: 'delete Successfully',
            type: 'success',
            duration: 2000
          })
        }else {
          this.$notify({
            title: 'error',
            message: 'delete error',
            type: 'error',
            duration: 2000
          })
        }
        this.getList();
      })
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['cid', 'pid', 'cname', 'curl']
        const filterVal = ['cid', 'pid', 'cname', 'curl']
        const list = this.list
        const data = this.formatJson(filterVal,list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'catalogue'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>


<style>
  .filter-container{
    padding-bottom: 10px;
  }

  .filter-item{
    margin: auto 5px;
  }

</style>
