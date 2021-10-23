<template>
<navbar></navbar>
    <!-- content -->
    <div class="my-4">
      <div class="col-md-9 offset-md-2">
        <h4>
          เลือกสื่อประกอบการจัดกิจกรรมค่ายพัฒนาศักยภาพเด็กนักเรียนแอลดีที่ต้องการ
        </h4>
      </div>
    </div>
    <br /><br />
    <div class="row justify-content-center text-center">
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-blue-darken-3">
            <br />
            <br />
            
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-orange-darken-1">
            <br />
            <br />
            
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-blue-darken-3">
            <br />
            <br />
            
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-orange-darken-1">
            <br />
            <br />
            
          </div>
        </div>
      </div>
    </div>

    <!-- copyright -->
    <br /><br /><br /><br /><br />
    <div class="my-3">
      <div class="text-center">
        <img
          src="https://www.img.in.th/images/7a1f1dfee34c258cdbef58798aa57aa9.png"
          class="rounded mx-auto d-block"
          alt="copyright"
          width="100"
        />
        <div class="text-caption">
          <small
            >ลิขสิทธิ์ © 2010-2021
            ซอฟต์แวร์ช่วยเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้
          </small>
          <br />
          <small>สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) </small
          ><br />
          <small
            >111 อุทยานวิทยาศาสตร์ประเทศไทย ถนนพหลโยธิน ตำบลคลองหนึ่ง
            อำเภอคลองหลวง จังหวัดปทุมธานี 12120
          </small>
          <br />
          <small>โทรศัพท์ 02-564-6900 ต่อ 72034, 72047 </small>
          <br />
          <br /><br />
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  components:{
    Navbar
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: start;
}

nav .menu-item {
  color: black;
  padding: 18px 15px;
  position: relative;
  text-align: center;
  border-bottom: 6px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #fff;
  border-bottom-color: orange;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

nav .lout {
  margin-right: 380px;
}
</style>
