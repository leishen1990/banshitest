<template>
  <Page class="page">
    <Header>
      <Navbar>
        <Title>常见问题解答</Title>
      </Navbar>
    </Header>
    <Content>
      <h4>
        {{question}}
      </h4>
      <!-- <List>
        <Item>
          <Label>
            <h2>1.参保期间，如果姓名发生变更。。。。</h2>
            <p>答：饭店客房快放开贷款</p>
          </Label>
        </Item>
      </List> -->
    </Content>
    <Footer>
        <Toolbar>
            <p>如果您仍有疑问，可直接咨询。<i class="query">点此咨询</i></p>
        </Toolbar>
    </Footer>
  </Page>
</template>
<style scoped lang="scss">
  .page{
    font-family:microsoft YaHei;
    .note{
      color:#1492ff;
    }
    .query{
      font-style:normal;
      color:#1492ff;
    }
  }
</style>
<script type="text/ecmascript-6">
  import { Note } from 'vimo/components/note'

  export default {
    components: {Note},
    data(){
      return{
        question:""
      }
    },
    created(){
      let params = this.$options.modalData.params;
      this.question = params;
    }
  }
</script>