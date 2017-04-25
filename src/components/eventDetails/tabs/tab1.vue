<template>
  <Page class="page">
    <Content>
      <h2>中华人民共和国</h2>
      <div class="details">
        <Grid>
          
              <Row  v-for="(value,key,index) in obj" v-if="value&&index<l" :key="key"  >
                  <Column  col-5 style="text-align:left;">
                      {{objName[key]}}
                  </Column>
                  <Column col-7 style="text-align:right;">
                      {{value}}
                  </Column>
              </Row>
              <div :class="{length:length,length1:length1}"  style="overflow:hidden;">
                <div :class="{pos:pos,pos1:pos1}">
                    <Row  v-for="(value,key,index) in obj" v-if="value&&index>=l" :key="key"  >
                        <Column  col-5 style="text-align:left;">
                            {{objName[key]}}
                        </Column>
                        <Column col-7 style="text-align:right;">
                            {{value}}
                        </Column>
                    </Row>
                </div>
              </div>
        </Grid>
        
           <i @click="moreCol" class="but"></i>
       
      </div>
      <List>
        <Item @click.native="timePlace(1)">
          <Icon name="icon-location"  slot="item-left"></Icon>
          受理地点/时间
        </Item>
        <Item>
          <Icon name="icon-phone" slot="item-left"></Icon>
          投诉电话

          <Note slot="item-right"><a v-bind:href="tel+tsdh">{{tsdh}}</a></Note>
        </Item>
        <Item>
          <Icon name="icon-phone" slot="item-left"></Icon>
          监督投诉电话
          <Note slot="item-right"><a v-bind:href="tel+zxdh">{{zxdh}}</a></Note>
        </Item>
        <Item @click.native="timePlace(2)">
          <Icon name="icon-map" slot="item-left"></Icon>
          办理流程图
        </Item>
        <Item @click.native="timePlace(3)">
          <Icon name="icon-question" slot="item-left" ></Icon>
          常见问题解答
        </Item>
      </List>
    </Content>
  </Page>
</template>
<style scoped lang="scss">
   .rela{
    position:relative;
   }
  .pos{
    position:relative;
    top:-80px;
    transition:top .5s cubic-bezier(0.96, 0.15, 0.82, 0);
  }

  .pos1{
    position:relative;
    top:0px;
    transition:top .5s cubic-bezier(0.96, 0.15, 0.82, 0);
  } 

   .length{
    height:0px;
    transition:all .5s cubic-bezier(0.96, 0.15, 0.82, 0);
  }
  .length1{
    height:100px;
    transition:all .5s cubic-bezier(0.96, 0.15, 0.82, 0);
  } 
  
  .page{
    font-family:microsoft YaHei;
    h2 {
      font-size: 18px;
    }
    .note{
      color:#1492ff;
    }
    .details{
      background:#f5f8f7;
      font-size:15px;
    }
    .but {
      margin: 10px auto;
      display: block;
      width: 50px;
      height: 30px;
      background: url("../../../assets/downDetail.png") no-repeat 100% 100%
    }
  }
</style>
<script type="text/ecmascript-6">
  import { Note } from 'vimo/components/note' //:to="{name:'timePlace',params:{sldd:sldd}"
  import axios from 'axios'
  import timePlaceTemplate from './tab1/timePlace.vue'
  import faqTemplate from './tab1/faq.vue'
  import processTemplate from './tab1/process.vue'
  //import  'velocity'
  export default {
    data(){
      return{
        pos:true,
        pos1:false,
        length:true,
        length1:false,
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
        sldd:'',
        tsdh:'',
        zxdh:'',
        tel:"tel:",
        cjwt:"",
        template:[timePlaceTemplate,processTemplate,faqTemplate],
        params:['sldd','bllct','cjwt']
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
        scope.length = scope.length?false:true;
        scope.length1 = scope.length?false:true;
        scope.pos = scope.pos?false:true;
        scope.pos1 = scope.pos?false:true;
      },
      timePlace(type){
        let scope = this;
        console.log(scope[scope.params[parseInt(type)-1]])
        let template = scope.template[parseInt(type)-1];
        this.$modal.present({
          name:'受理时间地点',
          position:'bottom',
          template:template ,
          modalData: {params:scope[scope.params[parseInt(type)-1]]},
          onDismiss (data) {
            debugger;
          }
        })
      }
    },
    components: {Note},
    created(){
      let scope = this;
      let params = this.$route.params;
      let url = this.$config.get('showBasicInfo');
      axios.get(url,{
        params:params
      }).then(function(res){
        let data  = res.data;
        data.sfsf = data.sfsf=="0"?"不收费":"收费";
        data.cnqx += "工作日";
        data.fdqx += "工作日";
        let obj = scope.obj;
        let i = 0; 
        scope.sldd = data.sldd;
        scope.tsdh = data.tsdh;
        scope.zxdh = data.zxdh;
        scope.bllct = data.bllct;
        scope.cjwt = data.cjwt;
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
          scope.data =data;
      }
    }
  }
</script>