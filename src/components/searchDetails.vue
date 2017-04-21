<template>
    <Page>
        <Header>
            <Navbar>
                <Title>个人办事</Title>
            </Navbar>
        </Header>
        <Content>
           <ItemGroup>
                   <Item v-for="item in itemList" :key="item.id"   @click.native="closeModal(item)"><!-- :to="{name:'eventDetails'}" -->
                       <Label class="th-5" >
                           <h2>{{item.name}}</h2>
                           <p>{{item.qlfrom}}</p>
                       </Label>
                   </Item>
               </ItemGroup>
        </Content>
    </Page>
</template>
<style scoped lang="scss">
    .body {

    }
</style>
<script type="text/ecmascript-6">
  import axios from 'axios'
  const AS = 'as'
  export default{
    name: 'Banshi',
    data(){
      return {
       itemList:[]
      }
    },
    watch: {
      relationship(value){}
    },
    computed: {},
    methods: {
     directTo(){
      this.$router.push({name:'eventDetails'});
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
     let getNewGrItems = this.$config.get('getNewGrItems');
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