<template>
  <Page>
    <Content >
       <div padding v-html="url">
         
       </div>
      <!-- <List class="lh-lg">
        <ListHeader class="lh-lg" padding>
           <h2 >
             您必须符合以下条件：
           </h2>
        </ListHeader>
        <Item >
          <p>
            1.符合医保报销规定的门诊医疗费
          </p>
        </Item>
        <Item>
          <p>
            2.报销申请须在发生医疗费用的下一个结算年度首月底前提出
          </p>
        </Item>
      </List> -->
    </Content>
  </Page>
</template>
<script type="ecmascript-6">
  import { Note } from 'vimo/components/note'
  import axios from 'axios'
  import Base64 from '../../../config/utils.js'
  export default {
    data(){
      return{
        url:""
      }
    },
    created(){
      let scope = this;
      let params = this.$route.params;
      let url = this.$config.get('getBsznCondition');
      axios.get(url,{
        params:params
      }).then(function(res){
        scope.url = res.data.sqtj;
        if(!scope.url){
          scope.url = "没有条件！！"
          return;
        }
        var base = new Base64();
        scope.url = base.decode(res.data.sqtj);
      })
    }
  }
</script>
<style scoped lang="scss">
  p{
    padding: 10px 0;
  }
</style>