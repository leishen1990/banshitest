<template>
  <Page class="page">
    <Content>
      <h2>中华人民共和国</h2>
      <div class="details">
        <Grid>
          <Row v-if="obj.bljg"  v-show="prela1">
            <Column style="text-align:left;">
                实施机关：
            </Column>
            <Column style="text-align:right;">
                {{obj.bljg}}
            </Column>
         </Row>
         <Row v-if="obj.fwdx" v-show="prela2">
            <Column  style="text-align:left;">
                办事对象
            </Column>
            <Column style="text-align:right;">
                {{obj.fwdx}}
            </Column>
         </Row>
         <Row v-if="obj.sfsf" v-show="prela3">
            <Column  style="text-align:left;">
                收费情况
            </Column>
            <Column v-if="obj.sfsf='0'" style="text-align:right;">
                不收费
            </Column>
            <Column v-else="obj.sfsf='1'" style="text-align:right;">
                收费
            </Column>
         </Row>
         <Row v-if="obj.fdqx" v-show="prela4">
            <Column  style="text-align:left;">
                法定期限
            </Column>
            <Column style="text-align:right;">
                {{obj.fdqx}}工作日
            </Column>
         </Row>
         <Row v-if="obj.cnqx" v-show="prela5">
            <Column  style="text-align:left;">
                法定期限
            </Column>
            <Column style="text-align:right;">
                {{obj.cnqx}}工作日
            </Column>
         </Row>
         <Row v-if="obj.type"  v-show="prela6">
            <Column style="text-align:left;">
                权利事项类型
            </Column>
            <Column style="text-align:right;">
                {{obj.type}}
            </Column>
         </Row>
         <Row v-if="obj.qlly"  v-show="prela7">
            <Column style="text-align:left;">
                权利来源
            </Column>
            <Column style="text-align:right;">
                {{obj.qlly}}
            </Column>
         </Row>
         <Row v-if="obj.zrcs"  v-show="prela8">
            <Column style="text-align:left;">
                责任处（科）室
            </Column>
            <Column style="text-align:right;">
                {{obj.zrcs}}
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
        if(this.suf) this.suf = false;
        else this.suf = true;
      }
    },
    computed:{
      prela1(){
        let i = this.suf;
        return this[this.preOrSuf[0]];
      },
      prela2(){
        let i = this.suf;
        return this[this.preOrSuf[1]];
      },
      prela3(){
        let i = this.suf;
        return this[this.preOrSuf[2]];
      },
      prela4(){
        let i = this.suf;
        return this[this.preOrSuf[3]];
      },
      prela5(){
        let i = this.suf;
        return this[this.preOrSuf[4]];
      },
      prela6(){
        let i = this.suf;
        return this[this.preOrSuf[5]];
      },
      prela7(){
        let i = this.suf;
        return this[this.preOrSuf[6]];
      },
        prela8(){
        let i = this.suf;
        return this[this.preOrSuf[7]];
      }
    },
    components: {Note},
    created(){
      let scope = this;
     // let params = this.$route.params;
     let params = {
      itemcode:"13565",
      name:"伤残抚恤关系接收、转移的确认",
      webid:"1"
     }
      let url = this.$config.get('showBasicInfo');
      axios.get(url,{
        params:params
      }).then(function(res){
        let data  = res.data;
        let obj = scope.obj;
        let i = 0; 
        scope.sldd = data.sldd;
        Object.keys(obj).forEach(function(e,j){
          if(!!e){
           obj[e] = data[e];
           if(i<5) scope.preOrSuf[j] = 'pre';
           else scope.preOrSuf[j] = 'suf';
           i++;
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