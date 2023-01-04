<template>
  <div>
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">학생정보 입력</a>
      </div>
    </nav>

    <div>학번: <input type="number" v-model="student.studentID"> </div>
    <div>이름: <input type="text" v-model="student.name"> </div>
    <div>학년: <input type="number" v-model="student.grade"> </div>
    <div>나이: <input type="number" v-model="student.age"> </div>
    <div>성별: <input type="text" v-model="student.gender"> </div>
    <div>phone: <input type="text" v-model="student.phone"> </div>

    <!-- Default inline 1-->
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline1" value="A" v-model="classSelect">
      <label class="custom-control-label" for="defaultInline1">A</label>
    </div>
    <!-- Default inline 2-->
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline2" value="B" v-model="classSelect">
      <label class="custom-control-label" for="defaultInline2">B</label>
    </div>
    <!-- Default inline 3-->
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="radioInline" class="custom-control-input" id="defaultInline3" value="C" v-model="classSelect">
      <label class="custom-control-label" for="defaultInline3">C</label>
    </div>
<!--<span>선택: {{classSelect}}</span>-->
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
      classSelect: 'D',
    }
  },
  methods : {
    confirm() {
      const self = this;
      const db = firebase.firestore();

      const _data = {
        studentID: self.student.studentID,
        name: self.student.name,
        grade: self.student.grade,
        gender: self.student.gender,
        phone: self.student.phone,
        age: self.student.age,
        class: self.classSelect
      }
      db.collection(self.fbCollection)
          .add(_data)
          .then(() => {
            self.$router.push('/')
          })
    },
    goBack() {
      const self = this;
      self.$router.push({name: 'home'})
    }


  },

}
</script>


<style>

</style>