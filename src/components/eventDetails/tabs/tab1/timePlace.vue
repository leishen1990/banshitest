<template>
  <Page class="page">
    <!-- <Header>
      <Navbar>
        <Title>受理时间地点</Title>
      </Navbar>
    </Header> -->
    <Content >
      <div  padding v-html="resdata">
        
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
        resdata:""
      }
    },
    created(){
      let params = this.$options.modalData.params;
      this.resdata = params;
    }
  }
</script>