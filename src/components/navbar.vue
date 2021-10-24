<template>
<div class="bg-white">
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
      <a href="/dowloadmedia">ดาวน์โหลดสื่อการเรียนการสอน </a>
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
  </div>
  
  </div>
</template>

<script>
export default {
    name:"Navbar",
}
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
  margin-right: 360px;
}
</style>
