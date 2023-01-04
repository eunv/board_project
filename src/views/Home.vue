<template>
  <div class="home">
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">학생정보조회</a>
        <a class="nav-link active" aria-current="page" href="#" @click = "gotoClass">Class</a>
      </div>
    </nav>


    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-mdb-color" @click = "gotoAdd">add</button>
    </div>

    <table class = "table table-bordered">
      <tr>
        <th>학번</th>
        <th>이름</th>
        <th>-</th>
      </tr>
      <tr v-for = "row in rows" :key="row.id">
        <td>{{ row.studentID}}</td>
        <td>{{ row.name }}</td>
        <td>
          <button type="button" class="btn btn-mdb-color" @click = "gotoDetail(row.id)">Info</button>
        </td>
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
    gotoDetail(value) {
      const self = this;
      self.$router.push({name: 'detail', params:{id: value}})
    },
    gotoAdd() {
      const self = this;
      self.$router.push({name: 'add'})
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