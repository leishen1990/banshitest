<template>
    <Page>
        <Header>
            <Navbar hidden>
                <Title>个人办事</Title>
            </Navbar>
            <Toolbar>
                <Segment v-model="relationship" >
                    <SegmentButton value="1">基本信息</SegmentButton>
                    <SegmentButton value="2">申报材料</SegmentButton>
                    <SegmentButton value="3">受理条件</SegmentButton>
                </Segment>
            </Toolbar>
        </Header>
        <Content>
          <router-view></router-view>
        </Content>
    </Page>
</template>
<style scoped lang="scss">
    .note-ios{
      color:#1492ff;
    }
</style>
<script type="text/ecmascript-6">
  export default{
    name: 'Banshi',
    data(){
      return {
        relationship: '1',
      }
    },
    watch: {
      relationship:function(newValue, oldValue){
        switch(parseInt(newValue)){
          case 1 : 
          this.$router.push({ name: 'eventDetailsTab1'}) 
          break;
          case 2 : 
          this.$router.push({ name: 'eventDetailsTab2'}) 
          break;
          case 3 : 
          this.$router.push({ name: 'eventDetailsTab3'}) 
          break;
        }
      }
    },
    computed: {},
    methods: {
      nihao(){
        alert('nihao')
      },
      onChange(value){
        console.debug(value)
      },
      onSelected(value){
        console.debug(value)
      }
    },
      
    created: function () {
      console.debug('created')

      console.debug(this)
      console.debug(this.relationship)

    },
    mounted: function () {
      console.debug('mounted')

    },
    // components: {Navbar , Toolbar, ToolbarButtons, "Title":ToolbarTitle , Segment, SegmentButton, List, Item, ListHeader}
  }
</script>