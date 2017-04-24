<template>
  <Page class="page">
    <!-- <Header>
      <Navbar>
        <Title>办理流程图</Title>
      </Navbar>
    </Header> -->
    <Content >
      <div  padding >
        <img :src="url" alt="">
      </div>
    </Content>
  </Page>
</template>
<style scoped lang="scss">
  .page{
    font-family:microsoft YaHei;
    .note{
      color:#1492ff;
    }
    .details{
      background:#f5f8f7;
      font-size:15px;
    }
  }
</style>
<script type="text/ecmascript-6">
  import { Note } from 'vimo/components/note'
  import axios from 'axios'
  export default{
    data(){
      return{
        url:"http://www.zjzwfw.gov.cn/picture/0/170119224709983676.jpg"
      }
    },
    created(){
      let params = this.$options.modalData.params;
      if(!/http:/g.test(params)) params = "http://"+ params;
      this.url = params;
    }
  }
</script>