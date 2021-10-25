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
        <h4>สร้างบัญชีผู้ใช้ใหม่</h4>
      </div>
      <div class="col-md-6 offset-md-3">
        <div>
          <form>
            <div class="my-3">
              <label for="username">ชื่อผู้ใช้</label>
              <input
                type="text"
                class="form-control"
                name="addusername"
                id="addusername"
                v-model="username"
                required
              />
            </div>
            <div class="my-3">
              <label for="password">รหัสผ่าน</label>
              <input
                type="password"
                class="form-control"
                name="addpwd"
                id="addpwd"
                v-model="password"
                required
              />
            </div>
            <div class="my-3">
              <label for="name">ชื่อจริง</label>
              <input
                type="text"
                class="form-control"
                name="addname"
                id="addname"
                v-model="name"
                required
              />
            </div>
            <div class="my-3">
              <label for="lasname">นามสกุล</label>
              <input
                type="text"
                class="form-control"
                name="addlastname"
                id="addlastname"
                v-model="lastname"
                required
              />
            </div>
            <div class="my-3">
              <label>ที่อยู่ติดต่อ / ที่อยู่โรงเรียน</label>
              <textarea
                type="text"
                name="addadres"
                id="addadres"
                class="form-control"
                rows="5"
                v-model="address"
                required
              />
            </div>
            <div class="dropdown">
              <h6>จังหวัด</h6>
              <select
                class="form-select"
                aria-label="Default select example"
                name="slprovince"
                id="slprovince"
                v-model="province"
                required
              >
                <option selected>กรุณาเลือกจังหวัด</option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="กระบี่">กระบี่</option>
                <option value="กาญจนบุรี">กาญจนบุรี</option>
                <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                <option value="กำแพงเพชร">กำแพงเพชร</option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                <option value="ชลบุรี">ชลบุรี</option>
                <option value="ชัยนาท">ชัยนาท</option>
                <option value="ชัยภูมิ">ชัยภูมิ</option>
                <option value="ชุมพร">ชุมพร</option>
                <option value="เชียงราย">เชียงราย</option>
                <option value="เชียงใหม่">เชียงใหม่</option>
                <option value="ตรัง">ตรัง</option>
                <option value="ตราด">ตราด</option>
                <option value="ตาก">ตาก</option>
                <option value="นครนายก">นครนายก</option>
                <option value="นครปฐม">นครปฐม</option>
                <option value="นครพนม">นครพนม</option>
                <option value="นครราชสีมา">นครราชสีมา</option>
                <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                <option value="นครสวรรค์">นครสวรรค์</option>
                <option value="นนทบุรี">นนทบุรี</option>
                <option value="นราธิวาส">นราธิวาส</option>
                <option value="น่าน">น่าน</option>
                <option value="บึงกาฬ">บึงกาฬ</option>
                <option value="บุรีรัมย์">บุรีรัมย์</option>
                <option value="ปทุมธานี">ปทุมธานี</option>
                <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                <option value="ปัตตานี">ปัตตานี</option>
                <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                <option value="พังงา">พังงา</option>
                <option value="พัทลุง">พัทลุง</option>
                <option value="พิจิตร">พิจิตร</option>
                <option value="พิษณุโลก">พิษณุโลก</option>
                <option value="เพชรบุรี">เพชรบุรี</option>
                <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                <option value="แพร่">แพร่</option>
                <option value="พะเยา">พะเยา</option>
                <option value="ภูเก็ต">ภูเก็ต</option>
                <option value="มหาสารคาม">มหาสารคาม</option>
                <option value="มุกดาหาร">มุกดาหาร</option>
                <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                <option value="ยะลา">ยะลา</option>
                <option value="ยโสธร">ยโสธร</option>
                <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                <option value="ระนอง">ระนอง</option>
                <option value="ระยอง">ระยอง</option>
                <option value="ราชบุรี">ราชบุรี</option>
                <option value="ลพบุรี">ลพบุรี</option>
                <option value="ลำปาง">ลำปาง</option>
                <option value="ลำพูน">ลำพูน</option>
                <option value="เลย">เลย</option>
                <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                <option value="สกลนคร">สกลนคร</option>
                <option value="สงขลา">สงขลา</option>
                <option value="สตูล">สตูล</option>
                <option value="สมุทรปราการ">สมุทรปราการ</option>
                <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                <option value="สมุทรสาคร">สมุทรสาคร</option>
                <option value="สระแก้ว">สระแก้ว</option>
                <option value="สระบุรี">สระบุรี</option>
                <option value="สิงห์บุรี">สิงห์บุรี</option>
                <option value="สุโขทัย">สุโขทัย</option>
                <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                <option value="สุรินทร์">สุรินทร์</option>
                <option value="หนองคาย">หนองคาย</option>
                <option value="หนองบัวลำภู">หนองบัวลำภู</option>
                <option value="อ่างทอง">อ่างทอง</option>
                <option value="อุดรธานี">อุดรธานี</option>
                <option value="อุทัยธานี">อุทัยธานี</option>
                <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>
                <option value="อำนาจเจริญ">อำนาจเจริญ</option>
              </select>
            </div>
            <div class="my-3">
              <label>เบอร์ติดต่อที่ทำงาน</label>
              <input
                type="text"
                class="form-control"
                name="addwtel"
                id="addwtel"
                v-model="wtel"
                required
              />
            </div>
            <div class="my-3">
              <label>เบอร์ติดต่อมือถือ</label>
              <input
                type="text"
                class="form-control"
                name="addtel"
                id="addtel"
                v-model="tel"
                required
              />
            </div>
            <div class="text-danger"><h6>*กรอกเป็นตัวเลขเท่านั้น</h6></div>
            <div class="my-3">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                name="addemail"
                id="addemail"
                v-model="email"
                required
              />
            </div>
            <div class="my-3">
              <h6>สถานะเจ้าของบัญชี</h6>
              <select
                class="form-select"
                name="slstatus"
                id="slstatus"
                v-model="status"
                required
                aria-label="Default select example"
                onchange="if (this.value=='5'){this.form['addstatus'].style.visibility='visible'}else {this.form['addstatus'].style.visibility='hidden'};"
              >
                <option selected>กรุณาเลือกสถานะ</option>
                <option value="1">ครู</option>
                <option value="2">อาจารย์</option>
                <option value="3">ผู้ปกครอง</option>
                <option value="4">นักเรียน</option>
                <option value="5">อื่น ๆ</option>
              </select>
              <div class="my-3">
                <input
                  type="text"
                  name="addstatus"
                  id="addstatus"
                  style="visibility: hidden"
                  class="form-control"
                  placeholder="กรุณากรอกสถานะของท่าน"
                />
              </div>
            </div>
            <div class="my-3">
              <div class="text-danger">
                <h6>
                  โรงเรียนที่ท่านสังกัดเคยเข้าร่วมค่ายพัฒนาศักยภาพด้านการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้กับทาง
                  สวทช หรือไม่
                </h6>
              </div>
              <select
                class="form-select"
                name="slcamp"
                id="slcamp"
                aria-label="Default select example"
              >
                <option value="">กรุณาเลือก</option>
                <option value="1">เคย</option>
                <option value="2">ไม่เคย</option>
              </select>
              <div class="my-3">
                <input
                  type="text"
                  name="addcamp"
                  id="addcamp"
                  class="form-control"
                  placeholder="กรุณากรอกชื่อโรงเรียน/หน่วยงานของท่าน"
                />
              </div>
            </div>
            <h6>ระดับชั้นของผู้ใช้งานโปรแกรม</h6>

            <p
              onchange="if (this.value=='13'){this.form['addgrade'].style.visibility='visible'}else {this.form['addgrade'].style.visibility='hidden'};"
            >
              <input
                type="checkbox"
                name="chkgrade1"
                id="chkgrade1"
                value="1"
              />&nbsp;ป.1&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade2"
                id="chkgrade2"
                value="2"
              />&nbsp;ป.2&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade3"
                id="chkgrade3"
                value="3"
              />&nbsp;ป.3&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade4"
                id="chkgrade4"
                value="4"
              />&nbsp;ป.4&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade5"
                id="chkgrade5"
                value="5"
              />&nbsp;ป.5&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade6"
                id="chkgrade6"
                value="6"
              />&nbsp;ป.6<br />
              <input
                type="checkbox"
                name="chkgrade7"
                id="chkgrade7"
                value="7"
              />&nbsp;ม.1&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade8"
                id="chkgrade8"
                value="8"
              />&nbsp;ม.2&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade9"
                id="chkgrade9"
                value="9"
              />&nbsp;ม.3&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade10"
                id="chkgrade10"
                value="10"
              />&nbsp;ม.4&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade11"
                id="chkgrade11"
                value="11"
              />&nbsp;ม.5&nbsp;&nbsp;
              <input
                type="checkbox"
                name="chkgrade12"
                id="chkgrade12"
                value="12"
              />&nbsp;ม.6<br />
              <input
                type="checkbox"
                name="chkgrade13"
                id="chkgrade13"
                value="13"
                onclick="
                                                  if (this.checked){this.form['addgrade'].style.visibility='visible'}else{this.form['addgrade'].style.visibility='hidden'};"
              />&nbsp;อื่นๆ
              <input
                type="textbox"
                name="addgrade"
                id="addgrade"
                class="form-control"
                style="visibility: hidden"
                placeholder="กรุณากรอกระดับชั้นของผู้ใช้โปรแกรม..."
              />
            </p>
            <div class="text-center">
              <div class="my-3">
                <router-link to="/register2" class="button-link">
                  <v-btn
                    @click="signup"
                    type="submit"
                    class="btn btn-primary"
                    :elevation="3"
                  >
                    ถัดไป
                  </v-btn></router-link
                >
              </div>
            </div>
          </form>
        </div>
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
export default {
  data() {
    return {
      username: '',
      password: '',
      name: '',
      lastname: '',
      address: '',
      province: '',
      wtel: '',
      tel: '',
      email: '',
      status1: '',
      status2: '',
      camp1: '',
      camp2: '',

    };
  },
  methods: {
    signup() {
      console.log(this.username);
      console.log(this.password);
      console.log(this.name);
      console.log(this.lastname);
      console.log(this.address);
      console.log(this.province);
      console.log(this.wtel);
      console.log(this.tel);
      console.log(this.email);
      console.log(this.status1);
    },
  },
};
</script>
