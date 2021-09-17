<template>
  <!-- banner and navbar -->
  <div class="bg-while">
    <nav class="navbar navbar-expand-lg navbar-while bg-while">
      <div class="container-fluid">
        <img
          class="img-fluid mx-3"
          src="https://www.img.in.th/images/7a1f1dfee34c258cdbef58798aa57aa9.png"
          alt="nav-banner"
          width="120"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active mx-2 text-dark"
                aria-current="page"
                href="/dowloadprogram"
                >ดาวน์โหลดโปรแกรม</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-2 text-dark" href="/dowloadlicense"
                >ดาวน์โหลดLicense</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-2 text-dark" href="/dowloadmanual"
                >ดาวน์โหลดคู่มือ</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-2 text-dark" href="/video"
                >วิดิโอการใช้งาน</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-2 text-dark" href="/dowloadmedia"
                >ดาวน์โหลดสื่อการเรียนการสอน</a
              >
            </li>
          </ul>
        </div>
        <router-link to="/">
          <img
            class="img-fluid mx-3"
            src="https://www.img.in.th/images/66f66667afb9b571b3440d502dd40fc4.png"
            alt="logout"
            width="30"
        /></router-link>
      </div>
    </nav>
  </div>
  <div class="bg-grey-lighten-3">
    <img
      class="img-fluid"
      src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg?fbclid=IwAR2rErAXMpVMiLx-xdGgqgwM2IbiMkIV7QmySI-RQXfC_6F-fFgktgNbe9M"
      alt="banner"
    />

    <!-- content -->
    <div class="my-4">
      <div class="col-md-6 offset-md-2">
        <h4>เลือกโปรแกรมที่ต้องการดาวน์โหลดคู่มือ</h4>
      </div>
    </div>
    <br /><br />
    <div class="row justify-content-center text-center">
      <div class="col-md-2">
        <div class="card">
          <div class="card-body bg-blue-darken-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
            <br />
            <br />
            <br />
            <br />
            <br />
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
            <br />
            <br />
            <br />
            <br />
            <br />
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    <br /><br />

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
