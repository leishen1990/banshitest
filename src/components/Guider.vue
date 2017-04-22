<template>
    <Page>
        <!-- <Header>
             <Navbar>
            </Navbar> 
            
        </Header> -->
        <Content class="hello">
          <Toolbar>
              <Segment v-model="seg" class="tab-layout">
                  <SegmentButton value="1" @onSelected="tabClick">个人办事</SegmentButton>
                  <SegmentButton value="2" @onSelected="tabClick">法人办事</SegmentButton>
              </Segment>
          </Toolbar>
           <List>
               <!--  <Item>
                   <Label>地区：</Label>
                   <Select item-right placeholder="请选择地区" interface="alert" @onChange="">
                       <Option value="f">Female</Option>
                       <Option value="m">Male</Option>
                   </Select>
               </Item> -->
               <Item>
                   <Label>部门：</Label>
                   <Select item-right placeholder="请选择部门" v-model="deptid" interface="alert" >
                       <Option v-for="item in sectorList" :value="item.id" :key="item.id">{{item.name}}</Option>
                   </Select>
               </Item>
                <Item>
                   <Label>主题：</Label>
                   <Select item-right placeholder="请选择主题" v-model="themid" interface="alert" @onChange="">
                       <Option v-for="item in themeList" :value="item.id" :key="item.id">{{item.name}}</Option>
                   </Select>
               </Item>
                <Item>
                    <Label color="primary">关键字：</Label>
                    <Input item-right placeholder="请输入关键字" v-model="word" class='inp'></Input>
                </Item>
           </List>
           <Button style="width:90%;" @click="toSearchDetails">搜索</Button>
           <List>
               <ListHeader>
                   大家都在搜：
               </ListHeader>
               <ItemGroup>
                   <Item button>
                       <Label class="th-5" >
                           <h2>内地居民婚姻登记证</h2>
                           <p>西湖区明政局</p>
                       </Label>
                   </Item>
                   <Item button>
                        <Label class="th-5">
                           <h2>内地居民婚姻登记证</h2>
                           <p>西湖区明政局</p>
                       </Label>
                   </Item>
                   <Item button>
                        <Label class="th-5">
                           <h2>内地居民婚姻登记证</h2>
                           <p>西湖区明政局</p>
                       </Label>
                   </Item>
               </ItemGroup>
           </List>
        </Content>
    </Page>
</template>
<script>
  import axios from 'axios'
  import toSearchDetails from './searchDetails.vue' 
  export default {
    name: 'guider',
    data () {
      return {
        msg: 'Welcome to  Vimo!',
        seg:"1",
        themeList:[],
        sectorList:[],
        type:1,
        themid:"",
        deptid:"",
        word:"",
        webid:"1"
      }
    },
    methods:{
      tabClick(value){
       this.type = value;
       this.reloadSelect(value);
      },
      initSelect(){
        let scope = this;
        let themeUrl = this.$config.get('getGrThems');
        let deptsUrl = this.$config.get('showDepts');
        axios.get(themeUrl).then(function(res){
          scope.themeList = res.data;
        });
        axios.get(deptsUrl,{
          params:{
            type:scope.type,
            webid:"3"
          }
        }).then(function(res){
          scope.sectorList = res.data;
        });
      },
      reloadSelect(type){
        let scope = this;
        let url = this.$config.get('getFrThems');
        if(type=="1") url = this.$config.get('getGrThems');
        console.log(url)
        axios.get(url).then(function(res){
          scope.themeList = res.data;
        });
      },
      toSearchDetails(){
        let scope = this;
        let params = {
            webid:scope.webid,
            themid:scope.themid,
            deptid:scope.deptid,
            word:scope.word,
            start:0,
            end:10
          }
        this.$modal.present({
          name:'modal_1',
          position:'bottom',
          template: toSearchDetails,
          modalData: {params:params},
          onDismiss (data) {
            data.result.webid = scope.webid
            scope.$router.push({
              name:'eventDetails',
              params:data.result
            });
          }
        })
      }
    },
    components:{
    },
    created(){
     this.initSelect();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .tab-layout{
        width:90%;
        margin: 0 auto;
    }
    .tab-layout div{
        max-width: 90%;
    }
    .block{
        display: block;
    }
    .th-5>h2,.th-5>p{
      line-height:30px;
    }
</style>
