<template>
  <div>
    <!-- 页面内容 -->
    <div class="header-title">
      <span>{{ $route.query.bigtitle }}</span>
      <span>/</span>
      <span>{{ $route.query.smalltitle }}</span>
      <h2>{{ $route.query.smalltitle }}</h2>
      <p>
        Tips：这是一个接收传参的测试页面,人员查询在查询表格~
      </p>
      <div class="icons">
        <a href="javascript:;">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          />快速开始
        </a>
        <a href="javascript:;">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          />产品简介
        </a>
        <a href="javascript:;">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          />产品文档
        </a>
      </div>
      <img
        class="backimg"
        src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      />
    </div>

    <div class="content">

      <div class="create-card card">+ 新增产品</div>

      <div class="show-card card" v-for="(item,index) of items" :key="index">
        <div class="card-top">
          <img :src="item.url"/>
          <div>
            <h3>{{item.title}}</h3>
            <p>
              {{item.text}}
            </p>
          </div>
        </div>


        <div class="card-bottom">
          <span>操作一</span>
          <span></span>
          <span>操作二</span>
        </div>

      </div>

    </div>

  </div>
</template>


<script>
export default {
  name: "CardList",
  data() {
    return {
        items:[
            {url:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",title:"Alipay",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",title:"Angular",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",title:"Ant Design",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",title:"Ant Design Pro",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",title:"Bootstrap",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",title:"React",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",title:"Vue",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"},
            {url:"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",title:"Webpack",text:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似"}
            
        ]
    };
  },
  methods: {
    onSearch() {},
  },
  mounted() {
    // console.log(this.$route.query);
  },
};
</script>


<style scoped>
a{
  text-decoration: none;
  color: rgb(0,173,247);
}
/* title */
.header-title {
  width: 100%;
  background-color: white;
  padding-left: 25px;
  margin-bottom: 20px;
  padding-bottom: 35px;

  position: relative;
}
.header-title span {
  display: inline-block;
  margin: 10px 3px;
}
.header-title span:nth-child(1) {
  margin-left: 0;
  color: silver;
}
.header-title span:nth-child(2) {
  color: silver;
}
.header-title span:nth-child(3) {
  color: black;
}
.header-title h2 {
  font-weight: bold;
  margin-top: 2px;
}
.header-title p {
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
}
.header-title .icons{
  display: flex;
}
.header-title .icons a {
  margin: 0 10px;
  display: flex;
}
.header-title .icons a img {
  margin-right: 15px;
}
.header-title .backimg {
  width: 155px;
  position: absolute;
  bottom: 12px;
  right: 140px;
}

/* content */
.content {
  font-size: 14px;
  width: 1260px;
  margin: auto;

  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.card {
  cursor: pointer;
  width: 280px;
  height: 200px;
  background-color: white;
  box-sizing: border-box;
  transition: 0.5s;

  margin: 10px;
}
.card:hover{
    box-shadow: 0px 0px 10px 3px rgb(173, 170, 170);
}
.create-card {
  text-align: center;
  line-height: 200px;
  border: 2px dotted rgb(226, 226, 226);
}
.create-card:hover{
    border:2px dotted rgb(24,144,255);
    color: rgb(24,144,255);
    box-shadow: none;
}
.show-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.show-card img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 15px;
}
.show-card .card-top{
    width: 80%;
    margin: 15px auto;
    display: flex;
}
.show-card .card-top p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: black;
}
.show-card .card-bottom{
    flex-grow: 0.6;
    border-top: 1px solid silver;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.show-card .card-bottom span{
    color: rgb(140,140,140);
}
.show-card .card-bottom span:hover{
    color: rgb(24,144,255);
}
.show-card .card-bottom span:nth-child(2){
    width: 1px;
    height: 20px;
    background-color: rgb(140,140,140,0.3);
}
</style>
