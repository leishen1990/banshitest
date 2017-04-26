<template>
    <Page>
        <!-- <Header>
            <Navbar>
                <Title>个人办事</Title>
            </Navbar>
        </Header> -->
        <Content>
            <List>
              <Item v-for="(item,index) in itemList" :key="item.id" :class="{'isShow':selectId===item.id}">
                <Grid>
                  <Row class="parent">
                    <Column col-10 @click.native = "closeModal(item)"class='item1'>
                      <Label class="th-5" >
                          <!-- {{childShowList[index]}} -->
                          <h2>{{item.name}}</h2>
                          <p>{{item.qlfrom}}</p>
                      </Label>
                    </Column>
                    <Column col-2 @click.native.present='goChild(item,index)' v-if="parseInt(item.isHaveChildren)" :key="item.id">
                      <div class="hasChildren" ></div>
                    </Column>
                  </Row>
                  <!-- <Row v-for="(item,index) in child"> -->
                  <Row class="child" v-if="parseInt(item.isHaveChildren)"  v-for="(item1,index1) in item.childArr" :key="item1.id" id="item.id">
                    <Column>
                      <Label>
                          <h2>{{item1.name}}</h2>
                          <p>{{item1.qlfrom}}</p>
                      </Label>
                    </Column>
                  </Row>
                </Grid>
              </Item>
            </List>
            <InfiniteScroll class="infiniteScroll" :enabled="true" threshold="10%" @onInfinite="onInfinite">
                <InfiniteScrollContent loadingSpinner="ios" loadingText="正在加载..."></InfiniteScrollContent>
                <!-- <h5 class="loadedAll" text-center>全部加载完毕</h5> -->
            </InfiniteScroll>
        </Content>
    </Page>
</template>
<style scoped lang="scss">
    .isShow{
      .child{
        display: block;
      }
    }
    .label{
        margin: 0;
      }
    .parent {
      h2 {
        font-size: 16px;
        padding: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p{
        padding: 2px 0
      }
    }
    .child {
      margin-left: 12px;
      border-top: 1px solid rgb(200,199,204);
      border-left: 1px solid rgb(200,199,204);
      padding-left: 5px;
      display:none;
      h2 {
        font-size: 14px;
        padding: 5px 0
      }
      p {
        font-size: 12px;
      }
    }
    .item1 {
      padding:0;
    }
    .hasChildren{
      background: url("../assets/biao60.png") no-repeat;
      height: 100%;
      background-size: 50% 40%;
      background-position: center center;
    }
</style>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import { InfiniteScroll, InfiniteScrollContent } from 'vimo/components/infinite-scroll'
  const AS = 'as'
  export default{
    name: 'Banshi',
    components:{
      InfiniteScroll,InfiniteScrollContent
    },
    data(){
      return {
       i:0,
       itemList:[],
       params:"",
       start:0,
       end:10,
       url:"",
       child:[],
       childShowList:[],
       type:"",
       selectId:"",

      }
    },
    watch: {
      relationship(value){}
    },
    /*computed: {
      this.childShowList.forEach(function(item){
        item = false;
      })
    },*/
    methods: {
      goChild(item,index){
        let scope = this;
    

      if(scope.selectId === item.id){
        scope.selectId = null
      }else{
        scope.selectId = item.id
      }

      let params = {
        webId:"1",
        itemId:item.id,
        mainCode:item.maincode,
        deptId:item.deptid,
        type:scope.params.type,
        itemType:item.type
      };
      let url = this.$config.get('getChildrenItems');
      axios.get(url,{
        params:params
      }).then(function(res){
        for(let i=0,len=scope.itemList.length;len>i;i++){
          let _item = scope.itemList[i]
          if(_item.id ===item.id ){
            _item.childArr =  res.data
            break;
          }
        }
      })
    },
     getRes(value){
     },
     directTo(){
      this.$router.push({name:'eventDetails'});
     },
     onInfinite(infiniteScroll){
        let scope = this;
        scope.params.end += 10; 
        axios.get(scope.url,{
          params:scope.params
        }).then(function(res){
          scope.itemList=res.data;
          infiniteScroll.complete();
        })
     },
     closeModal(item,e){
      let res = {
        itemcode:item.id,
        name:item.name
      } 
       this.$modal.dismiss({
          result: res
       })
     }
    },
    
    created(){
     let scope = this;
     let params = this.$options.modalData.params;
     scope.params = params;
     let getNewGrItems = this.$config.get('getNewGrItems');
     scope.url = getNewGrItems;
     axios.get(getNewGrItems,{
      params:params
     }).then(function(res){
      res.data.forEach((item)=>{
          item.childArr=[];
      })

      scope.itemList = res.data;



      scope.childShowList = new Array(res.data.length);
      scope.child = new Array(res.data.length); 
     });
    },
    activated(){
    },
    mounted: function () {
    }
    // components: {Navbar , Toolbar, ToolbarButtons, "Title":ToolbarTitle , Segment, SegmentButton, List, Item, ListHeader}
  }
</script>