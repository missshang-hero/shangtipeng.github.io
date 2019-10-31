<style scoped>
  html,body,#app{
    height: 100%;
    background: url(../static/img/bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div id="app" class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <!-- <Sider collapsible :collapsed-width="78" width="145" v-model="isCollapsed">
        <Menu active-name="/navigate" @on-select="routeTo" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="/navigate">
            <Icon type="ios-navigate"></Icon>
            <span>导航</span>
          </MenuItem>
          <MenuItem name="/monitor">
            <Icon type="monitor"></Icon>
            <span>控制中心</span>
          </MenuItem>
          <MenuItem name="/settings">
            <Icon type="settings"></Icon>
            <span>设置</span>
          </MenuItem>
        </Menu>
      </Sider> -->
      <Layout>
        <Content :style="{padding: '18px 38px 0 38px',height:'100%',position:'relative'}">
          <router-view style="width:100;height:100%"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import {Layout,Sider,Menu,MenuItem,Icon,Header,Content,Breadcrumb,BreadcrumbItem,Card} from 'iview'
  export default {
    data () {
      return {
        isCollapsed: false
      };
    },
    methods:{
      routeTo(e){
        this.$router.replace(e);
      }
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    components:{Layout,Sider,Menu,MenuItem,Icon,Header,Content,Breadcrumb,BreadcrumbItem,Card}
  }
</script>
