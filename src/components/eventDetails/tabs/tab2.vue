<template>
  <Page>
    <Content Padding>
      <List>
        <Item>
          <icon></icon>
          受理地点/时间666
        </Item>
        <Item>
          <icon></icon>
          投诉电话
          <Note slot="item-right">0571-85068589</Note>
        </Item>
        <Item>
          <icon></icon>
          监督投诉电话
          <Note slot="item-right">0571-85171233</Note>
        </Item>
        <Item>
          <icon></icon>
          办理流程图
        </Item>
        <Item>
          <icon></icon>
          常见问题解答
        </Item>
      </List>
    </Content>
  </Page>
</template>
<script type="ecmascript-6">
  import { Note } from 'vimo/components/note'
  export default {
    components: {Note}
  }
</script>