<template>
  <div class="mixin-components-container">

    <el-row>
      <el-card class="box-card" style="min-height: 60px">
          <el-col :span="4" class="text-center">
            <el-button v-waves type="primary" icon="el-icon-upload" style="position: absolute; right: 20px; bottom: 20px;" @click="imagecropperShow=true" >
              图片上传
            </el-button>
          </el-col>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:50px;">

      <el-col :span="6" v-for="item in fileProject" :key="item.fid">
        <el-card class="box-card" >
          <div slot="header" class="clearfix" style="text-align: center">
            {{item.fileName}}
          </div>
          <div style="display: inline-block; text-align: center">
            <div class="item-content" style="display: inline-block">
              <pan-thumb width="150px" height="150px" style="word-break:break-all;" :image="item.fileDownloadUri">
                {{item.fileDownloadUri}}
              </pan-thumb>
            </div>
            <el-button v-waves type="primary" style="display: inline-block; width: 150px; margin: 10px auto"  @click="delImageFile(item.fid,item.fileName)" >
              删除图片
            </el-button>
          </div>

        </el-card>
      </el-col>

    </el-row>


    <pagination v-show="total>0"
                :total="total"
                :page.sync="fileParams.page"
                :limit.sync="fileParams.limit"
                :pageSizes="[8, 12, 16, 20]"
                @pagination="getFileData" />


    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://47.98.116.55:9710/uploadFile"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
    import ImageCropper from '@/components/ImageCropper'
    import PanThumb from '@/components/PanThumb'
    import MdInput from '@/components/MDinput'
    import DropdownMenu from '@/components/Share/DropdownMenu'
    import waves from '@/directive/waves/index.js' // 水波纹指令
    import Pagination from '@/components/Pagination' // secondary package based on el-pagination


    import {fetchFileList , delFile} from '@/api/getfileurl.js'


    export default {
        name: "ImageManage",
        components: {
          ImageCropper,
          PanThumb,
          MdInput,
          DropdownMenu,
          Pagination
        },
        directives: {
          waves
        },
        data() {
          return {
            imagecropperShow: false,
            imagecropperKey: 0,
            image: '',
            fileProject:[],
            fileParams:{
                page:1,
                limit:12,
                sort:false
            },
            total: 0,
          }
        },
        created(){
            this.getFileData();
        },
        methods: {

            // 删除图片

            delImageFile(fid,fileName){
                let Data = {
                    fid:fid,
                    fileName:fileName
                }

                delFile(Data).then(res => {
                    this.getFileData();
                    this.$message({
                        message: res.info,
                        type: 'success'
                    })
                })
            },


            // 获取数据
            getFileData(){
                fetchFileList(this.fileParams).then(res => {
                    this.fileProject = res.data
                    this.total = res.total

                })
            },

            cropSuccess(resData) {
              this.imagecropperShow = false
              this.imagecropperKey = this.imagecropperKey + 1
              this.getFileData();
              this.$message({
                  message: resData.info,
                  type: 'success'
              })
            },
            close() {
              this.imagecropperShow = false
            }
        }
    }
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .mixin-components-container {
    background-color: #f0f2f5;
    padding: 30px;
    min-height: calc(100vh - 84px);
  }
  .component-item{
    min-height: 100px;
  }

  .el-card__body {
    padding: 20px;
    text-align: center;
  }

  .box-card {
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    margin: 10px auto;
  }


</style>
