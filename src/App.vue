<template>
  <div id="app">
    <div class="title">
      <h1>HTML 标 签 元 素 周 期 表</h1>
      <p class="star">Periodic Table of the HTML Elements <small>115 tags</small></p>
    </div>
    <core ref="core"></core>
    <div class="intro">
      <p>
        1982年，Tim Berners-Lee 建立 HTML
      </p>
      <p>
        1993年，大學生的 Marc Andreessen 在他的 Mosaic 浏览器加入 标记，从此可以在Web頁面上浏览图片
      </p>
      <p>
        1993年6月，HTML 由 IETF 工作小組发布草案
      </p>
      <p>
        1994年10月，W3C 成立， 网络应用发展的标准规范交由 W3C 协会制定及推广
      </p>
      <p>
        1995年11月，HTML 2.0，2000年6月被宣布已经过时
      </p>
      <p>
        1996年1月 ，HTML 3.2 由 W3C 推荐为标准规范
      </p>
      <p>
        1997年11月，HTML 4.0
      </p>
      <p>
        1999年12月，HTML 4.01 以 XML 语法重新构建，较为严格，W3C推荐标准
      </p>
      <p>2000年1月，XHTML 1.0，W3C推荐标准</p>
      <p>2001年5月，XHTML 1.1，W3C推荐标准</p>
      <p>2004年，WHATWG小组成立，由各大浏览器开发商组成，重拾HTML 4规格，开发 HTML 5规格</p>
      <p>2006年，W3C认输，承认 XHTML 2.0不会成功</p>
      <p>2007年，W3C重新成立 HTML工作小组，参考 WHATWG 的规格发展期HTML规格</p>
      <p>2009年，XHTML 2.0被放弃，全面投入 HTML 5 规格的发展</p>
      <p>2011年6月，Google宣布全面采用 HTML 5 技术</p>
      <p>2012年， HTML 5被选为候选标准</p>
      <p>2014年10月28日，HTML 5.0，W3C正式发布HTML 5.0推荐标准</p>
    </div>
    <footer>
      <span>Copyright © 2019 - &nbsp; Rabbit🐇</span>
    </footer>
  </div>
</template>

<script>
import Core from './components/Core'
export default {
  name: 'app',
  components: {
      Core
  },
  mounted() {
    document.addEventListener('click',  (event) => {
        let e = event
        if (window.event) {    
            e.cancelBubble=true
        } else if (e && e.stopPropagation) { 
            e.stopPropagation()
        }
        this.$refs.core.activeTag = ''
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 74vw;
  margin: 1vh auto;
}

html,
body {
  background: #1c1d25;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.title {
  margin-bottom: 5vh;
}

.intro {
  margin-top: 20vh;
  margin-left: 20vw;
  text-align: left;
  font-size: 0.6rem;
}

.intro p {
  line-height: 2rem;
}

footer {
  height: 30px;
  font-size: 0.5rem;
  margin-top: 3vh;
  color: lightblue;
}
</style>
