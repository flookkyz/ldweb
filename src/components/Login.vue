<template>
  <img
    class="img-fluid"
    src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg"
    alt="banner"
  />
  <div class="my-4">
    <div class="col-md-6 offset-md-2">
      <h4>เข้าสู่ระบบ</h4>
    </div>
  </div>
  <div>
    <form>
      <div class="col-md-2 offset-md-5">
        <div class="my-3">
          <label for="username">ชื่อผู้ใช้</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="my-3">
          <label for="pwd">รหัสผ่าน</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
        </div>
      </div>
      <div class="text-center my-3">
        <div>
          <router-link to="/register" class="button-link">
            <button type="button" class="btn btn-link">
              สร้างบัญชีผู้ใช้ใหม่
            </button></router-link
          >
          <router-link to="/forgotpassword" class="button-link">
            <button type="button" class="btn btn-link text-danger">
              เปลี่ยนรหัสผ่าน
            </button></router-link
          >
        </div>
      </div>
    </form>
  </div>
  <img
    src="https://www.img.in.th/images/1f983b9042a0b610136307a3431d8c5f.png"
    class="rounded mx-auto d-block"
    alt="copyright"
    height="200"
  />
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