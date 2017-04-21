<template>
    <Page>
        <Header>
            <Navbar>
                <Title>个人办事</Title>
            </Navbar>
            <Toolbar>
                <Segment v-model="relationship" @onChange="onChange">
                    <SegmentButton value="1" @onSelected="showItem" >基本信息</SegmentButton>
                    <SegmentButton value="2" @onSelected="showItem" v-on:click="showItem">申报材料</SegmentButton>
                    <SegmentButton value="3" @onSelected="showItem" v-on:click="showItem">受理条件</SegmentButton>
                </Segment>
            </Toolbar>
        </Header>
        <Content>
            <div class="">
              <List v-if="item1">
                  <ListHeader @touchstart.native="onShow=!onShow">
                      <span>必要材料{{relationship}}</span>
                  </ListHeader>
                  <Item v-if="onShow">item1
                  </Item>
                  <Item v-show="onShow">item1</Item>
                  <Item v-show="onShow">item1</Item>
                  <Item v-show="onShow">item1</Item>
              </List>
          <List v-if="item2">
             <ListHeader @touchstart.native="onShow=!onShow">
                 <span>必要材料{{relationship}}</span>
             </ListHeader>
             <Item v-if="onShow">item1
             </Item>
             <Item v-show="onShow">item2</Item>
             <Item v-show="onShow">item1</Item>
             <Item v-show="onShow">item1</Item>
                        </List>
          <List v-if="item3">
             <ListHeader @touchstart.native="onShow=!onShow">
                 <span>必要材料{{relationship}}</span>
             </ListHeader>
             <Item v-if="onShow">item1
             </Item>
             <Item v-show="onShow">item3</Item>
             <Item v-show="onShow">item1</Item>
             <Item v-show="onShow">item1</Item>
          </List>
            </div>
        </Content>
    </Page>
</template>
<style scoped lang="scss">
    .body {

    }
</style>
<script type="text/ecmascript-6">
  const AS = 'as'
  export default{
    name: 'Banshi',
    data(){
      return {
        relationship: 'item2',
        onShow: true,
        item1: true,
        item2: false,
        item3: false
      }
    },
    watch: {
      relationship(value){}
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
      },
      showItem(value){
        let _this = this;
        switch(value){
          case "1":{
            _this.item1 = true;
            _this.item2 = false;
            _this.item3 = false;
          }
          break;
          case "2":{
            _this.item1 = false;
            _this.item2 = true;
            _this.item3 = false;
          }
          break;
          case "3":{
            _this.item1 = false;
            _this.item2 = false;
            _this.item3 = true;
          }
        }
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
    components: {}
  }
</script>