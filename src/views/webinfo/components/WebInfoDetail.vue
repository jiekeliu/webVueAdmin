<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">

        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm" >
          发布
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">

            <div class="postInfo-container">
              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="网站名称:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_name"  maxlength="10" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="200px" label="网站icon:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_icon_url"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="主页标题:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_title"  maxlength="15" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="200px" label="主页副标题:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_subtitle"  maxlength="30" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="网站背景图链接:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_bgimg_url"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="200px" label="管理者:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_manager"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="网站介绍背景图地址:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_describe_img_url"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="200px" label="备案号:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_code"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="文章背景图连接:" class="postInfo-container-item">
                    <el-input v-model="postForm.article_bg_url"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label-width="200px" label="管理者联系方式:" class="postInfo-container-item">
                    <el-input v-model="postForm.web_connection"  maxlength="255" show-word-limit placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label-width="200px" label="网站介绍:" class="postInfo-container-item">
                    <Tinymce ref="editor" v-model="postForm.web_describe" :height="400" />
                  </el-form-item>
                </el-col>
              </el-row>

            </div>
          </el-col>
        </el-row>

      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/SingleImage3'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import { validURL } from '@/utils/validate'
import { getWebInfo,updateWebInfo } from '@/api/webinfo'
import Warning from './Warning'
import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'

const defaultForm = {
  status: 'draft',
  web_icon_url: 'null', //网站icon链接
  web_name: 'null', // 网站名称
  web_title: 'null', // 网站标题
  web_subtitle: 'null', // 网站副标题
  web_bgimg_url: 'null', // 网站背景图链接
  web_manager: 'null', // 网站管理者(关联用户列表)
  web_describe: 'null', // 关于网站
  web_describe_img_url: 'null', // 关于网站背景图地址
  web_code: 'null', // 网站备案号
  article_bg_url: 'null', // 文章背景图
  web_connection: 'null' // 站长联系方式
}

export default {
  name: 'WebInfoDetail',
  components: { Tinymce, MDinput, Upload, Sticky, Warning, CommentDropdown, PlatformDropdown, SourceUrlDropdown },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(new Error('外链url填写不正确'))
        }
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
      },
      tempRoute: {},

        options: [{
            value: 'jesonker',
            label: 'jesonker'
        }, {
            value: 'jiekeliu',
            label: 'jiekeliu'
        }, {
            value: '刘杰',
            label: '刘杰'
        }],

    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.content_short.length
    },
    displayTime: {
      get() {
        return (+new Date(this.postForm.display_time))
      },
      set(val) {
        this.postForm.display_time = new Date(val)
      }
    }
  },
  created() {
    this.getWebInfoData()
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {

    getWebInfoData(){
      getWebInfo().then(res =>{
        this.postForm = res.data.items
      })
    },

    submitForm() {
      updateWebInfo(this.postForm).then(res =>{
          if (res.status == "ok") {
              this.loading = true
              this.$notify({
                  title: '成功',
                  message: '发布文章成功',
                  type: 'success',
                  duration: 2000
              })
              this.postForm.status = 'published'
              this.loading = false
          } else {
              console.log('error submit!!')
              return false
          }
      })
    },
  }
}
</script>


<style>
  .sub-navbar {
    height: 50px;
    line-height: 50px;
    position: relative;
    width: 100%;
    text-align: right;
    padding-right: 20px;
    -webkit-transition: 600ms ease position;
    transition: 600ms ease position;
    background: -webkit-gradient(linear, left top, right top, from(#20b6f9), color-stop(0%, #20b6f9), color-stop(100%, #2178f1), to(#2178f1));
    background: linear-gradient(90deg, #20b6f9 0%, #20b6f9 0%, #2178f1 100%, #2178f1 100%);
  }

</style>

<style lang="scss" rel=”stylesheet/scss” scoped >
  @import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
