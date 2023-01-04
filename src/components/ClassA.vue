<template>
  <div class="home">
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">class A</a>
        <a class="nav-link active" aria-current="page" href="#" @click = "gotoClass">class</a>
      </div>
    </nav>

    <table class = "table table-bordered">
      <tr>
        <th>class</th>
        <th>학번</th>
        <th>이름</th>
        <th>학년</th>
        <th>나이</th>
        <th>성별</th>
        <th>phone</th>

      </tr>
      <tr v-for = "row in rows" :key="row.id">
        <td>{{row.class}}</td>
        <td>{{ row.studentID}}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.grade }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.gender }}</td>
        <td>{{ row.phone }}</td>

      </tr>
    </table>
    <p></p>

  </div>
</template>

<script>

import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      fbCollection: 'users',
      rows : [],
    }
  },
  mounted() {
    const self = this;
    self.init();
  },
  methods : {
    init() {
      this.getDatalist()
    },

    getDatalist() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .where("class",'==','A')
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id
              self.rows.push(_data);
            });
          })
    },
    gotoClass() {
      const self = this;
      self.$router.push({name: 'class'})
    }


  },


}

</script>

<style>
home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*table {*/
/*  font-family: arial, sans-serif;*/
/*  border-collapse: collapse;*/
/*  width: 50%;*/
/*  margin : 100px;*/
/*}*/
/*td, th {*/
/*  border: 1px solid #dddddd;*/
/*  text-align: center;*/
/*  padding: 8px;*/
/*}*/

</style>