<template>
  <!-- banner -->
  <div class="bg-grey-lighten-3">
    <img
      class="img-fluid"
      src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg?fbclid=IwAR2rErAXMpVMiLx-xdGgqgwM2IbiMkIV7QmySI-RQXfC_6F-fFgktgNbe9M"
      alt="banner"
    />
    
    <!-- input data -->
    <div class="my-4">
      <div class="col-md-6 offset-md-2">
        <h4>เปลี่ยนรหัสผ่าน</h4>
      </div>
    </div>
    <div class="col-md-2 offset-md-5 text-center">
      <div class="my-3">
        <label for="username">ชื่อผู้ใช้</label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div class="my-3">
        <label for="pwd">รหัสผ่านเดิม</label>
        <input type="password" class="form-control" id="pwd" />
      </div>
      <div class="my-3 text-danger">
        <label for="pwd">รหัสผ่านใหม่</label>
        <input type="password" class="form-control" id="pwdnew" />
      </div>
      <div class="my-3 text-danger">
        <label for="pwd">ยืนยันรหัสผ่านใหม่</label>
        <input type="password" class="form-control" id="pwdnewcon" />
      </div>
      <div class="text-center">
        <router-link to="/" class="button-link">
          <v-btn type="submit" class="btn btn-primary" :elevation="3">
            บันทึกรหัสผ่านใหม่
          </v-btn></router-link
        >
      </div>
    </div>

    <!-- copyright -->
    <br /><br /><br /><br /><br />
    <div class="my-3">
      <div class="text-center">
        <img
          src="https://www.img.in.th/images/cebff8812f655c019da5ed5c02b82886.png"
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
  </div>
</template>

<script>
export default {};
</script>