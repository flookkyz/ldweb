<template>
  <!-- navbar -->
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
      <a href="/dowloadmedia">ดาวน์โหลดสื่อการเรียนการสอน </a>
    </div>
    <div class="lout"></div>
    <router-link to="/">
      <img
        src="https://www.img.in.th/images/66f66667afb9b571b3440d502dd40fc4.png"
        alt="logout"
        width="30"
    /></router-link>
  </nav>
  <!-- navbar -->

  <!-- banner -->
  <div class="bg-grey-lighten-3">
    <img
      class="img-fluid"
      src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg?fbclid=IwAR2rErAXMpVMiLx-xdGgqgwM2IbiMkIV7QmySI-RQXfC_6F-fFgktgNbe9M"
      alt="banner"
    />
    <!-- banner -->

    <!-- header -->
    <div class="my-4">
      <div class="col-md-6 offset-md-2">
        <h4>เลือกโปรแกรมที่ต้องการ</h4>
      </div>
    </div>
    <!-- header -->
    <br /><br />

    <!-- content-program -->
    <div class="content-program-grid">
      <div class="content-program-item">
        <img
          src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/4_rsmdpc.png"
          alt="ldsuite"
          width="135"
        />
        <h6>ชุดซอฟต์แวร์ช่วยการเขียนสำหรับ<br>นักเรียนที่บกพร่องทางการเรียนรู้</h6>
        <p>(LD Software Suite v.2.0)</p>
      </div>
      <div class="content-programs-item">
        <img
          src="https://res.cloudinary.com/flook-dev/image/upload/v1630166360/web-ld/sss_gljrr1.png"
          alt="ldkeyboard"
          width="135"
        />
        <h6>แอปพลิเคชันแอลดีคีย์บอร์ด</h6>
        <p>(LD Keyboard)</p>
      </div>
      <div class="content-program-item">
        <img
          src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/3_psydyc.png"
          alt="kudcanwrite"
          width="135"
        />
        <h6>ซอฟต์แวร์ช่วยเขียนภาษาไทยตามจินตภาพ</h6>
        <p>(Kid Can Write)</p>
      </div>
      <div class="content-programs-item">
        <img
          src="https://res.cloudinary.com/flook-dev/image/upload/v1630166207/web-ld/1_sqv78y.png"
          alt="kidcanread"
          width="135"
        />
        <h6>แอปพลิเคชันช่วยอ่านแบบแจกลูกสะกดคำ</h6>
        <p>(Kid Can Read)</p>
      </div>
    </div>
    <!-- content-program -->

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
    <!-- copyright -->
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

.content.program {
  width: 100%;
  height: auto;
  
}

.content-program-grid {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  grid-gap: 1rem;
  
}

.content-program-item {
  color: #fff;
  background-color: #FF9900;
  padding: 20px;
}

.content-programs-item {
  color: #fff;
  background-color: #0033FF;
  padding: 20px;
}

</style>
