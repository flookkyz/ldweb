<template>
  <!-- banner and navbar -->
  <nav>
    <img
      class="img-fluid mx-4"
      src="https://www.img.in.th/images/7a1f1dfee34c258cdbef58798aa57aa9.png"
      alt="nav-banner"
      width="120"
    />
    <div class="menu-item"><a href="/dowloadprogram">ดาวน์โหลดโปรแกรม</a></div>
    <div class="menu-item"><a href="/dowloadlicense">ดาวน์โหลดLicense</a></div>
    <div class="menu-item"><a href="/dowloadmanual">ดาวน์โหลดคู่มือ</a></div>
    <div class="menu-item"><a href="/video">วิดิโอการใช้งาน</a></div>
    <div class="menu-item">
      <a href="/dowloadmedia">ดาวน์โหลดสื่อการเรียนการสอน   </a>
    </div>
    <div class="menu-item"><a href="/admin">admin</a></div>
    <div class="lout"></div>
    <router-link to="/">
      <img
        src="https://www.img.in.th/images/66f66667afb9b571b3440d502dd40fc4.png"
        alt="logout"
        width="30"
    /></router-link>
  </nav>
  <div class="bg-grey-lighten-3">
    <img
      class="img-fluid"
      src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg?fbclid=IwAR2rErAXMpVMiLx-xdGgqgwM2IbiMkIV7QmySI-RQXfC_6F-fFgktgNbe9M"
      alt="banner"
    />

    <!-- content -->
    <div class="my-4">
      <div class="col-md-6 offset-md-2">
        <h4>หน้าจัดการข้อมูล (ผู้ดูแล)</h4>
      </div>
    </div>
<!-- view details for license -->
    <br><br>
    <div class="col-md-6 offset-md-3 text-center">
      <div class="my-3">
        <div class="text-danger"></div>
        <select class="form-select" aria-label="Default select example">
          <option selected>กรุณาเลือก</option>
          <option value="1">
            ชุดซอฟต์แวร์ช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้ (LD Software
            Suite v.2.0)
          </option>
          <option value="2">แอปพลิเคชันแอลดีคีย์บอร์ด (LD Keyboard)</option>
          <option value="3">ซอฟต์แวร์ช่วยเขียนภาษาไทยตามจินตภาพ (Kid Can Write)</option>
          <option value="4">แอปพลิเคชันช่วยอ่านแบบแจกลูกสะกดคำ (Kid Can Read)</option>
        </select>
      </div>
      <div>
        <router-link to="#" class="button-link">
          <v-btn type="submit" class="btn btn-primary text-center" :elevation="3"
            >ขอข้อมูล</v-btn
          ></router-link
        >
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
  </div>
</template>

<script>
export default {};
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
  margin-right: 320px;
}
</style>