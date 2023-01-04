<template>
  <div>
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">학적사항 조회</a>
      </div>
    </nav>
    <h5> 학번 : {{student.studentID}} </h5>
    <h5> 이름 : {{student.name}} </h5>
    <h5> 학년 : {{student.grade}} </h5>
    <h5> 나이 : {{student.age}} </h5>
    <h5> 성별 : {{student.gender}} </h5>
    <h5> phone : {{student.phone}} </h5>
    <h5> class: {{student.class}} </h5>

    <button type="button" class="btn btn-danger" @click = 'delInfo'>삭제</button>
    <button type="button" class="btn btn-primary" @click = 'goEdit'>수정</button>
    <button type="button" class="btn btn-mdb-color" @click = 'goHome'>닫기</button>

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
    delInfo() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(self.id)
          .delete()
          .then(() => {
            self.$router.push('/')
          })

    },

    goHome() {
      const self = this;
      self.$router.push({name: 'home'})
    },
    goEdit() {
      const self = this;
      self.$router.push({name: 'edit'})
    },


  },

}
</script>

<style>

</style>