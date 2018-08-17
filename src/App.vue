<template>
  <div id="app" >
    <h3>Vue Time Zone Picker</h3>
    <div id="map-container">
    <vue-timezone-picker :options="options" v-model="timezone" ></vue-timezone-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      timezone: 'America/Chicago',
      options: {
        width: 500,
        height: 250,
        defaultValue: { value: 'America/Los_Angeles', attribute: 'zonename' },
        quickLink: [
          {
            'America/Los Angeles': 'America/Los_Angeles',
            'America/Denver': 'America/Denver',
            'America/Chicago': 'America/Chicago',
            'America/New York': 'America/New_York'
          }
        ],
        selectClass: 'Cbox',
        filterBoxClass: 'Cbox',
        mapHoverType: 'zonename',
        showHoverText: false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#map-container {
  max-width: 1024px;
  max-height: 768px;
  display: block;
  margin: auto;
}
.timezone-map polygon[data-selected="true"] {
  fill: #496a84;
}
.timezone-map polygon {
  fill: #bbb;
}
.timezone-map polygon.active {
  fill: #5a5a5a;
}
.timezone-map polygon:hover {
  cursor: pointer;
}
.Cbox .quickLink {
  width: 52%;
  float: right;
  padding-bottom: 11px;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
}
.Cbox .quickLink span:hover {
  color: #fff;
  background-color: #496a84;
  cursor: pointer;
}
.Cbox select {
  width: 45%;
  float: left;
  height: 27px;
  padding: 0px 0px 0px 10px;
}
.Cbox .quickLink span.active {
  color: #fff;
  background-color: #496a84;
}
.Cbox .quickLink span {
  font-weight: 300;
  border-radius: 3px;
  color: #000;
  background-color: #fff;
  border: solid 1px #ccc;
  margin-left: 10px;
  font-size: 9px;
  padding: 4px 6px 4px 6px;
}
.filter-box .quick-link span {
  border: #999 1px solid;
}
.Cbox .country-lov{
  text-align: left;
}
</style>
