<template>
  <Page class="page">
    <Content>
      <h2>中华人民共和国</h2>
      <div class="details">
        <Grid>
          <Row  v-for="(value,key,index) in obj" v-if="value"  v-show="index<l">
              <Column  col-5 style="text-align:left;">
                  {{objName[key]}}
              </Column>
              <Column col-7 style="text-align:right;">
                  {{value}}
              </Column>
          </Row>
        </Grid>
        <Button @click="moreCol"></Button>
      </div>
      <List>
        <Item :to="{name:'timePlace','sldd':sldd}">
          <Icon name="icon-location" slot="item-left"></Icon>
          受理地点/时间
        </Item>
        <Item>
          <Icon name="icon-phone" slot="item-left"></Icon>
          投诉电话
          <Note slot="item-right">0571-85068589</Note>
        </Item>
        <Item>
          <Icon name="icon-phone" slot="item-left"></Icon>
          监督投诉电话
          <Note slot="item-right">0571-85171233</Note>
        </Item>
        <Item >
          <Icon name="icon-map" slot="item-left"></Icon>
          办理流程图
        </Item>
        <Item :to="{name:'faq'}">
          <Icon name="icon-question" slot="item-left" ></Icon>
          常见问题解答
        </Item>
      </List>
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
  export default {
    data(){
      return{
        pre:true,
        suf:false,
        i:0,
        l:5,
        preOrSuf:['','','','','','','',''],
        obj:{
          bljg:"",
          fwdx:"",
          sfsf:"",
          fdqx:"",
          cnqx:"",
          type:"",
          qlly:"",
          zrcs:""
        },
        objName:{
          bljg:"实施机关",
          fwdx:"办事对象",
          sfsf:"收费情况",
          fdqx:"法定期限",
          cnqx:"承诺期限",
          type:"权利事项类型",
          qlly:"权利来源",
          zrcs:"责任处（科）室"
        },
        sldd:''
      }
    },
    methods:{
      getpreOrSuf(i){
        let data = this.preOrSuf[i];
        let res = true;

        return 1;
      },
      moreCol(){
        let scope = this;
        scope.l =  scope.l==5?10000:5;
      }
    },
    components: {Note},
    created(){
      let scope = this;
      let params = this.$route.params;
    /* let params = {
      itemcode:"13565",
      name:"伤残抚恤关系接收、转移的确认",
      webid:"1"
     }*/
      let url = this.$config.get('showBasicInfo');
      axios.get(url,{
        params:params
      }).then(function(res){
        let data  = res.data;
        let obj = scope.obj;
        let i = 0; 
        scope.sldd = data.sldd;
        Object.keys(obj).forEach(function(e,j){
          if(!!data[e]){
           obj[e] = data[e];
           if(i<5) scope.preOrSuf[j] = 'pre';
           else scope.preOrSuf[j] = 'suf';
           i++;
          }else{
            delete scope.obj[e];
          }
        })
       scope.i = i;
      })
    },
    events: {
      done(data) {
          debugger
          scope.data =data;
          debugger
      }
    }
  }
</script>