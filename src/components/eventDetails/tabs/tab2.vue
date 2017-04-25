<template>
  <Page>
    <Content>
       <!-- <h5><i id="material"></i>必要材料</h5>     -->
      <!-- <div v-html="res" id="cailiao"></div> -->
      <List class="lh-lg">
        <ListHeader class="lh-lg">
           <div id="material"></div>
           <h2 >
             必要材料
           </h2>
        </ListHeader>
        <Item v-for = "item in res">
          <p>{{item.name}}</p>
        </Item>
        <Item v-if="!res">
          <p>目前还没有没有所需材料</p>
        </Item>
        <!-- <Item>
          <p>
          投诉电话
          </p>
          <Note slot="item-right"><a href="tel:0571-85068589">0571-85068589</a></Note>
        </Item>
        <Item>
          <p>
            监督投诉电话
          </p>
          <Note slot="item-right">0571-85171233</Note>
        </Item>
      </List>
      <div class="interval"></div>
      <List class="lh-lg">
        <ListHeader class="lh-lg">
           <div id="material"></div>
           <h2 >
             必要材料
           </h2>
        </ListHeader>
        <Item>
          <p>受理地点/时间666</p>
        </Item>
        <Item>
          <p>
          投诉电话
          </p>
          <Note slot="item-right">0571-85068589</Note>
        </Item>
        <Item>
          <p>
            监督投诉电话
          </p>
          <Note slot="item-right">0571-85171233</Note>
        </Item> -->
      </List>
    </Content>
  </Page>
</template>
<script type="ecmascript-6">
  import { Note } from 'vimo/components/note'
  import axios from 'axios'
  export default {
    data(){
      return{
        res:""
      }
    },
    components: {Note},
    created(){
      let scope = this;
      let params = this.$route.params;
      // params.itemCode = this.$route.params.itemid;
      // delete params.itemcode;
      // params;
      // debugger;
      let url = this.$config.get('getBsznCailiaoList');
      axios.get(url,{
        params: params
      }).then(function(res){
        scope.res = res.data.cailiao;
      })
    }
  }
</script>
<style scoped lang="scss">
  .note{
      color:#1492ff;
    }
  .lh-lg{
    line-height:45px;
    p{
      line-height:35px;
    }
  }
  #material{
    background: url('../../../assets/material60-60.png');
    display: inline-block;
    margin: 0;
    width: 20px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .interval{
    height:20px;
    background:#f5fbf7;
  }
  #cailiao {
    text-align:left;
    padding: 0px 10px;
  }
  h5 {
    text-align:left;
    padding-left: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
</style>
