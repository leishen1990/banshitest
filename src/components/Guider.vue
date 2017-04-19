<template>
    <Page>
        <Header>
            <Navbar>
                <Title>办事指南</Title>
            </Navbar>
            <Toolbar>
                <Segment v-model="seg" class="tab-layout">
                    <SegmentButton value="1" >个人办事</SegmentButton>
                    <SegmentButton value="2">法人办事</SegmentButton>
                </Segment>
            </Toolbar>
        </Header>
        <Content class="hello">
           <List>
                <Item>
                    <Label>地区</Label>
                    <Select item-right placeholder="杭州市西湖区" interface="alert" @onChange="onChange">
                        <Option value="f">Female</Option>
                        <Option value="m">Male</Option>
                    </Select>
                </Item>
               <Item>
                   <Label>部门</Label>
                   <Select item-right placeholder="Select" interface="alert" @onChange="onChange">
                       <Option value="f">Female</Option>
                       <Option value="m">Male</Option>
                   </Select>
               </Item>
                <Item>
                   <Label>主题</Label>
                   <Select item-right placeholder="Select" interface="alert" @onChange="onChange">
                       <Option value="f">Female</Option>
                       <Option value="m">Male</Option>
                   </Select>
               </Item>
           </List>
           <Button style="width:90%;">搜索</Button>
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
  export default {
    name: 'guider',
    data () {
      return {
        msg: 'Welcome to  Vimo!',
        seg:"1"
      }
    },
    methods:{
      getData(){
        this.$config.get('getMemberUrl')
      },
      onChange(value){
        console.log(value+"东汉莫妮娜")
      }
    },
    components:{
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
