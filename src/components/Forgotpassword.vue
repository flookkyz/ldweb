<template>
  <img
    class="img-fluid"
    src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg"
    alt="banner"
  />
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
      <router-link to="/" class="button-link ">
        <button type="submit" class="btn btn-primary">
          บันทึกรหัสผ่านใหม่
        </button></router-link
      >
    </div>
  </div>
  <br><br><br><br><br>
  <div class="my-3">
    <div class="text-center">
      <img
        src="https://www.img.in.th/images/cebff8812f655c019da5ed5c02b82886.png"
        class="rounded mx-auto d-block"
        alt="copyright"
        width="100"
      />
      <h6>
        <small
          >ลิขสิทธิ์ © 2010-2021
          ซอฟต์แวร์ช่วยเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้
        </small>
      </h6>
      <h6>
        <small>สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) </small>
      </h6>
      <h6>
        <small
          >111 อุทยานวิทยาศาสตร์ประเทศไทย ถนนพหลโยธิน ตำบลคลองหนึ่ง
          อำเภอคลองหลวง จังหวัดปทุมธานี 12120
        </small>
      </h6>
      <h6><small>โทรศัพท์ 02-564-6900 ต่อ 72034, 72047 </small></h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>