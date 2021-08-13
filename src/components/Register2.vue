<template>
<div class="bg-grey-lighten-3">
  <img
    class="img-fluid"
    src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg?fbclid=IwAR2rErAXMpVMiLx-xdGgqgwM2IbiMkIV7QmySI-RQXfC_6F-fFgktgNbe9M"
    alt="banner"
  />
  <div class="my-4">
    <div class="text-center">
      <h4>
        เพื่อประโยชน์ต่อการพัฒนาปรับปรุงโปรแกรม
        ขอความร่วมมือในการกรอกแบบสอบถามด้านล่างนี้
      </h4>
    </div>
    <br />
    <br />
    <div class="container-sm">
      <div>
        <div class="my-3 mx-5">
          <label
            >1.
            เพราะเหตุใดท่านจึงเลือกที่จะดาวน์โหลดโปรแกรมช่วยการเขียนสำหรับนักเรียนที่
            บกพร่องทางการเรียนรู้จากทางสวทช.</label
          >
          <textarea
            type="text"
            id="q1"
            class="form-control"
            rows="4"
            v-model="message1"
            :maxlength="max"
          />
        </div>
        <div class="my-3 mx-5">
          <label
            >2.
            ประโยชน์หลักที่ท่านได้รับจากการใช้โปรแกรมช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้คืออะไร</label
          >
          <textarea
            type="text"
            id="q2"
            class="form-control"
            rows="4"
            v-model="message1"
            :maxlength="max"
          />
        </div>
        <div class="my-3 mx-5">
          <label
            >3.
            ถ้าท่านไม่ได้ดาวน์โหลดโปรแกรมช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้จากทางสวทช.
            ท่านจะซื้อโปรแกรมลักษณะใกล้เคียงกันจากที่อื่นหรือไม่ อย่างไร</label
          >
          <textarea
            type="text"
            id="q3"
            class="form-control"
            rows="4"
            v-model="message1"
            :maxlength="max"
          />
        </div>
        <div class="my-3 mx-5">
          <label
            >4.
            จากการที่ท่านดาวน์โหลดโปรแกรมช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้จากทางสวทช.ช่วยให้ท่านประหยัดค่าใช้จ่ายจากการซื้อโปรแกรมลักษณะใกล้เคียงกันจากที่อื่นหรือไม่</label
          >
          <textarea
            type="text"
            id="q4"
            class="form-control"
            rows="4"
            v-model="message1"
            :maxlength="max"
          />
        </div>
        <div class="my-3 mx-5">
          <label
            >5.
            ถ้าเนคเทคไม่ได้ให้ดาวน์โหลดโปรแกรมช่วยการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้แบบฟรีท่านคิดว่าท่านจะยินดีที่จะจ่าย
            (Willingness to pay) ให้กับโปรแกรมช่วยการเขียนฯ
            นี้คิดเป็นราคาโปรแกรมละเท่าไร</label
          >
          <textarea
            type="text"
            id="q5"
            class="form-control"
            rows="4"
            v-model="message1"
            :maxlength="max"
          />
        </div>
      </div>
      <div class="my-3">
        <div class="text-center">
          <router-link to="/" class="button-link">
            <v-btn
              type="submit"
              class="btn btn-primary rounded-pill"
              :elevation="3"
            >
              บันทึกข้อมูล
            </v-btn></router-link
          >
        </div>
      </div>
    </div>
  </div>
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
export default {
  data() {
    return {
      message: "",
      message1: "",
      max: 20,
    };
  },
};
</script>
