<template>
  <div
    class="container"
    @click.stop="activeTag = ''"
  >
    <table>
      <tbody>
        <tr
          v-for="(row, index) in tags"
          :key="index"
        >
          <td
            v-for="(col, nums) in row"
            :key="nums"
          >
            <div
              :class="col.class"
              class="elements"
              v-if="col.name"
              @click.stop="activeTag = col.name"
            >
              <div
                class="info"
                v-if="activeTag === col.name"
              >
                <h3>
                  <{{col.name}}>
                </h3>
                <p>{{col.cndesc}}</p>
                <p class="example">
                  <code>{{col.code}}</code>
                </p>
                <a :href="col.mdnurl" target="_blank" v-if="col.mdnurl">MDN</a>
                <a :href="col.w3curl" target="_blank" v-if="col.w3curl">W3C</a>
              </div>
              <div class="element">
                {{col.name}}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 颜色选择区域 -->
    <div class="color-select">
      <ul>
        <li
          v-for="(val, key, index) in colorInfo"
          :key="index"
        >
          <div
            :style="{background:val}"
            class="icon"
          ></div>
          <span>{{key}}</span>
        </li>
      </ul>
    </div>

    <!-- 纯颜色区域 -->
    <div class="only-color">
      <ul>
        <li
          v-for="(val, key, index) in colorInfo"
          :key="index"
        >
          <div
            :style="{background:val}"
            class="icon"
          ></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {tags} from './tags'
import {colorInfo} from './color'
export default {
    name: 'Core',
    data() {
        return {
            tags,
            colorInfo,
            showInfo: false,
            activeTag: ''
        }
    }
}
</script>

<style scoped>
.container {
  text-align: left;
  font-size: 0.8rem;
  position: relative;
}

th,
td {
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.02rem;
}

.elements {
  background: #9d9d9d;
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 0.6rem;
  width: 3.5rem;
  height: 3.5rem;
  line-height: 3.5rem;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  text-align: center;
  position: relative;
  border-radius: 5%;
}

.elements:hover {
  opacity: 1;
  box-shadow: 2px 2px 2px #fff;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 4px #fff;
}

.elements .info {
  opacity: 1;
  box-sizing: border-box;
  position: absolute;
  top: 3.5rem;
  left: 0;
  z-index: 100;
  text-align: left;
  padding: 0.5rem;
  width: 20vw;
  border-radius: 5%;
  line-height: 1.5rem;
  background: #fff;
  cursor: initial;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
}

.elements .info a {
  line-height: 0;
  margin: 0 0.2rem;
  color: #fff;
  text-decoration: none;
  padding: 0.1rem 0.2rem;
  text-align: center;
  border-radius: 5%;
  background: #74bedb;
}

.color-select {
  width: 90%;
  margin: 0 auto;
}

.only-color {
  position: absolute;
  width: 20%;
  left: 20vw;
  top: 6vh;
}

.color-select .icon,
.only-color .icon {
  display: inline-block;
  margin: 0 0.5rem;
  vertical-align: middle;
  width: 1rem;
  height: 1rem;
  border-radius: 10%;
  cursor: pointer;
}

.color-select ul li,
.only-color ul li {
  float: left;
  width: 20vw;
  font-size: 0.8rem;
  padding: 0.125rem 0;
}

.only-color ul li {
  width: auto;
}

.rootval {
  background: #73f69c;
}
.metaval {
  background: #3d97f7;
}
.documentval {
  background: #ec5445;
}
.blockval {
  background: #b85f29;
}
.embedval {
  background: #b265ea;
}
.textval {
  background: #f9d448;
}
.tableval {
  background: #64ff64;
}
.formval {
  background: #8a96d1;
}
.interactiveval {
  background: #d4d4d4;
}
</style>