<template>
  <div class="container">
    <table>
      <!-- <thead>
        <tr class="first">
          <th></th>
          <th
            v-for="n in 18"
            :key="n"
          >{{n}}</th>
        </tr>
      </thead> -->
      <tbody>
        <tr
          v-for="(row, index) in tags"
          :key="index"
        >
          <!-- <th>{{index < 7 ? index + 1 : ''}}</th> -->
          <td
            v-for="(col, nums) in row"
            :key="nums"
          >
            <div
              :class="col.class"
              class="elements"
              v-if="col.name"
            >
              <div
                class="info"
                v-if="false"
              >
                <h3>{{col.name}}</h3>
                <p>{{col.desc}}</p>
                <a :href="col.url">W3C 介绍</a>
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
            colorInfo
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
  /* background: rgb(100, 255, 100); */
  /* background: lavender; */
  background: #9d9d9d;
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 0.6rem;
  /* line-height: 4.44rem; */
  width: 3.5rem;
  height: 3.5rem;
  line-height: 3.5rem;
  margin: 0;
  opacity: 0.8;
  padding: 0;
  overflow: hidden;
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
</style>