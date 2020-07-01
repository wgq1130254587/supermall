<template>
  <div id="home">
      <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
      <HomeSwiper :banners="banners"/>
      <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import HomeSwiper from "@/views/home/childComps/HomeSwiper";
    import {getHomeMultidata} from "@/notwork/home";
    import RecommendView from "@/views/home/childComps/RecommendView";


    export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView

    },
      data(){
      return {
        banners:[],
        recommends:[]
      }
      },
      created() {

        getHomeMultidata().then(res =>{
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    }
</script>

<style scoped>
    .home-nav{
        background-color:var(--color-tint);
        color: white;
    }
</style>
