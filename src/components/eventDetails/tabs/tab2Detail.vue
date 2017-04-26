<template>
  <Page>
    <Content class="body">
      <button @click="close" id="close">X</button>
      <div>
        <h5 class="titl">{{name1}}</h5>
        <table border="1px solid #" class="detailTable">
          <tr>
            <td>材料形式</td>
            <td>{{res.clxs}}</td>
          </tr>
          <tr>
            <td>材料详细要求</td>
            <td>{{res.clxxyq}}</td>
          </tr>
          <tr>
            <td>必要性及描述</td>
            <td>{{res.byxjms}}</td>
          </tr>
          <tr>
            <td>备注</td>
            <td>{{res.hrefexamle}}</td>
          </tr>
        </table>
      </div>
    </Content>
  </Page>
</template>
<style scoped lang="scss">
  .content-ios {
    background-color: rgba(255,255,255,.95);
  }

  .detailTable {
    width: 80%;
    margin: 10px auto;
  }
  .titl{
    margin-top: 50px;
  }
  #close{
    width: 30px;
    height: 30px;
    font-size: 16px;
    position: fixed;
    top: 5px;
    right: 5px;
  }
</style>
<script>
  export default {
    // name: "tab2Detail",
    data(){
      return{
        res:{},
        name1:""
      }
    },
    methods:{
      close(){
        this.$modal.dismiss()
      }
    },
    created(){
      // let params = this.$options.modalData.params;
      // scope.name1 = params.name;
      // scope = this;
      let params = null;
      params.name= "临时救助金给付";
      params.clid= 1;
      params.webid= 3;
      params.itemcode= 26837;
      params;
      debugger;

      let url = this.$config.get('getBsznCailiaoList');
      axios.get(url,{
        params: params
      }).then(function(res){
        scope.res = res.data.detail;
      })
    }
  }
</script>