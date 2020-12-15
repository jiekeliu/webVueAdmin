<template>
  <div class="catalogueList">
    <el-table
      border
      :data="list"
      fit
      highlight-current-row
    >
    <el-table-column label="CID" prop="id" align="center" width="80" >
        <template slot-scope="{row}">
          <span>{{ row.cid }}</span>
        </template>
    </el-table-column>
      <el-table-column label="PID" prop="id" align="center" width="80" >
        <template slot-scope="{row}">
          <span>{{ row.pid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CNAME" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.cname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CURL" width="400px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.curl }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Actions" align="center" class-name="small-padding fixed-width">
        <template >
          <el-button type="primary" size="mini" >
            Edit
          </el-button>
          <el-button  size="mini" type="danger" >
            Delete
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
        import {getCatalogue} from '../../api/indexPageData'

        export default {
        name: "catalogueList",

        data(){
          return{
            data:[],
            list:[
              {
              cid: 1,
              cname: "主页",
              curl: "index",
              pid: 0
            },
              {
                cid: 2,
                cname: "主页",
                curl: "index",
                pid: 0
              }
            ],
          }
        },

      created() {
        this.getCatalogueData();

      },
      methods:{
        getCatalogueData(){
          getCatalogue().then(res=>{
            console.log(res)
          })
        },

      }

    }
</script>

<style scoped>

</style>
