<template>
    <Page>
        <Header>
            <Navbar>
                <Title>个人办事</Title>
            </Navbar>
        </Header>
        <Content>

            <List>
              <Item v-for="(item,index) in itemList" :key="index" @click.native="closeModal(item)" >
                <Label class="th-5" >
                    <h2>{{item.name}}</h2>
                    <p>{{item.qlfrom}}</p>
                </Label>
                <div class="hasChildren" v-if="parseInt(item.isHaveChildren)"></div>
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
    .hasChildren{
      background: url("../assets/biao60.png");
      width: 20px;
      height: 20px;
      background-size: contain;
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
       url:""
      }
    },
    watch: {
      relationship(value){}
    },
    computed: {},
    methods: {
     getRes(value){
     },
     directTo(){
      this.$router.push({name:'eventDetails'});
     },
     onInfinite(infiniteScroll){
        let scope = this;
       //scope.params.start += 10;
        scope.params.end += 10; 
        axios.get(scope.url,{
          params:scope.params
        }).then(function(res){
          scope.itemList=res.data;
          infiniteScroll.complete();
        })
     },
     closeModal(item){
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
      scope.itemList = res.data;
     });
    },
    activated(){
    },
    mounted: function () {
    },
    ready(){
    }
    // components: {Navbar , Toolbar, ToolbarButtons, "Title":ToolbarTitle , Segment, SegmentButton, List, Item, ListHeader}
  }
</script>