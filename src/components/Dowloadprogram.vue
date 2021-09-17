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
        <h4>เลือกโปรแกรมที่ต้องการ</h4>
      </div>
    </div>
    <br /><br />
    <div class="row justify-content-center text-center">
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-blue-darken-3">
            <img
              src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/4_rsmdpc.png"
              class="rounded mx-auto d-block"
              alt="programpic"
              width="200"
              height="200"
            />
            <p class="card-text text-white">
              ชุดซอฟต์แวร์ช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้
            </p>
            <p class="card-text text-white">(LD Software Suite v.2.0)</p>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-orange-darken-1">
            <br />
            <img
              src="https://res.cloudinary.com/flook-dev/image/upload/v1630166360/web-ld/sss_gljrr1.png"
              class="rounded mx-auto d-block"
              alt="programpic"
              width="160"
            />
            <br />
            <p class="card-text text-white">แอปพลิเคชันแอลดีคีย์บอร์ด</p>
            <p class="card-text text-white">(LD Keyboard)</p>
            <br />
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-blue-darken-3">
            <br />
            <img
              src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/3_psydyc.png"
              class="rounded mx-auto d-block"
              alt="programpic"
              width="135"
            />
            <br />
            <p class="card-text text-white">
              ซอฟต์แวร์ช่วยเขียนภาษาไทยตามจินตภาพ
            </p>
            <p class="card-text text-white">(Kid Can Write)</p>
            <br />
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-orange-darken-1">
            <br />
            <img
              src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/1_sqv78y.png"
              class="rounded mx-auto d-block"
              alt="programpic"
              width="135"
            />
            <br />
            <p class="card-text text-white">
              แอปพลิเคชันช่วยอ่านแบบแจกลูกสะกดคำ
            </p>
            <p class="card-text text-white">(Kid Can Read)</p>
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
  margin-right: 380px;
}
</style>