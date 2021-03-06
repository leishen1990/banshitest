/**
 * Created by Hsiang on 2017/3/20.
 *
 * # 应用层级的配置
 *
 * 包括domain/url/AK/ssecretID等
 *
 * 主要存放合成变量
 *
 */
var domain = window.domain;
var interfaces = {
  getGrThems:'/getGrThems.do',
  getFrThems:'/getFrThems.do',
  showDepts:'/showDepts.do',
  getNewGrItems:'/getNewGrItems.do',
  getBsznCailiaoList:'/getBsznCailiaoList.do',
  showBasicInfo:'/showBasicInfo.do',
  getBsznCondition:'/getBsznCondition.do',
  getChildrenItems:'/getChildrenItems.do'
};
Object.keys(interfaces).forEach(function(e,i){
  interfaces[e] = domain+interfaces[e]; 
})

interfaces.mode='ios'

export default interfaces