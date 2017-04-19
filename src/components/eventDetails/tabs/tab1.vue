<template>
  <Page class="page">
    <Content>
      <h2>中华人民共和国</h2>
      <div></div>
      <List>
        <Item>
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
        <Item>
          <Icon name="icon-map" slot="item-left"></Icon>
          办理流程图
        </Item>
        <Item>
          <Icon name="icon-question" slot="item-left"></Icon>
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
  }
</style>
<script type="text/ecmascript-6">
  import { Note } from 'vimo/components/note'

  export default {
    components: {Note}
  }
</script>