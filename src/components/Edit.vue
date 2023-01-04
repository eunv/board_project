<template>
  <div>
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">학생정보 수정</a>
      </div>
    </nav>

    <div>학번: <input type="number" v-model="student.studentID"></div>
    <div>이름: <input type="text" v-model="student.name"></div>
    <div>학년: <input type="number" v-model="student.grade"> </div>
    <div>나이: <input type="number" v-model="student.age"> </div>
    <div>성별: <input type="text" v-model="student.gender"> </div>
    <div>번호: <input type="text" v-model="student.phone"> </div>

    <div></div>
    <button type="button" class="btn btn-mdb-color" @click = 'confirm'>확인</button>
    <button type="button" class="btn btn-mdb-color" @click = 'goBack'>취소</button>

  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'detail',
  data() {
    return {
      fbCollection: 'users',
      id: this.$route.params.id,
      student: {},
    }
  },
  mounted() {
    const self = this;
    self.init();
  },
  methods : {
    init() {
      const self = this;
      self.getData();
    },
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(self.id)
          .get()
          .then((snapshot) => {
            self.student = snapshot.data();
          })
    },
    confirm() {
      const self = this;
      const db = firebase.firestore();

      const _data = {
        studentID: self.student.studentID,
        name: self.student.name,
        grade: self.student.grade,
        gender: self.student.gender,
        phone: self.student.phone,
        age: self.student.age
      }
      db.collection(self.fbCollection)
          .doc(self.id)
          .set(_data, {merge: true} )
          .then(() => {
            self.$router.push('/')
          })
    },
    goBack() {
      const self = this;
      self.$router.push({name: 'detail'})
    }


  },

}
</script>

<style>

</style>