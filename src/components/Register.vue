<template>
  <div class="bg-grey-lighten-3">
    <img
      class="img-fluid"
      src="https://www.img.in.th/images/57ba71554158adc9607777075a14bbe9.jpg"
      alt="banner"
    />
    <div class="my-4">
      <div class="col-md-6 offset-md-2">
        <h4>สร้างบัญชีผู้ใช้ใหม่</h4>
      </div>
      <div class="col-md-6 offset-md-3">
        <div>
          <form>
            <div class="my-3">
              <label>ชื่อผู้ใช้</label>
              <input type="text" class="form-control" id="username" />
            </div>
            <div class="my-3">
              <label>รหัสผ่าน</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="my-3">
              <label>ชื่อจริง</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="my-3">
              <label>นามสกุล</label>
              <input type="text" class="form-control" id="lastname" />
            </div>
            <div class="my-3">
              <label>ที่อยู่ติดต่อ / ที่อยู่โรงเรียน</label>
              <textarea
                type="text"
                id="address"
                class="form-control"
                rows="5"
              />
            </div>
            <div class="dropdown">
              <h6>จังหวัด</h6>
              <select class="form-select" aria-label="Default select example">
                <option selected>กรุณาเลือกจังหวัด</option>
                <option value="1">ปทุมธานี</option>
                <option value="2">กรุงเทพมหานคร</option>
                <option value="3">อยุธยา</option>
              </select>
            </div>
            <div class="my-3">
              <label>เบอร์ติดต่อที่ทำงาน</label>
              <input type="text" class="form-control" id="wtel" />
            </div>
            <div class="my-3">
              <label>เบอร์ติดต่อมือถือ</label>
              <input type="text" class="form-control" id="tel" />
            </div>
            <div class="text-danger"><h6>*กรอกเป็นตัวเลขเท่านั้น</h6></div>
            <div class="my-3">
              <label>Email</label>
              <input type="text" class="form-control" id="email" />
            </div>
            <div class="my-3">
              <h6>สถานะเจ้าของบัญชี</h6>
              <select class="form-select" aria-label="Default select example">
                <option selected>กรุณาเลือกสถานะ</option>
                <option value="1">ครู</option>
                <option value="2">อาจารย์</option>
                <option value="3">ผู้ปกครอง</option>
                <option value="4">นักเรียน</option>
              </select>
            </div>
            <div class="my-3">
              <div class="text-danger">
                <h6>
                  โรงเรียนที่ท่านสังกัดเคยเข้าร่วมค่ายพัฒนาศักยภาพด้านการเขียนสำหรับนักเรียนที่บกพร่องทางการเรียนรู้กับทาง
                  สวทช หรือไม่
                </h6>
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected>กรุณาเลือก</option>
                <option value="1">เคย</option>
                <option value="2">ไม่เคย</option>
              </select>
            </div>
            <h6>ระดับชั้นของผู้ใช้งานโปรแกรม</h6>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">ป.1</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ป.2</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ป.3</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ป.4</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ป.5</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ป.6</label>
            </div>
            <div class="my3"></div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.1</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.2</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.3</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.4</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.5</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">ม.6</label>
            </div>
            <div class="my3"></div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">อื่น ๆ</label>
            </div>
            <div class="text-center">
              <div class="my-3">
                <router-link to="/register2" class="button-link">
                  <v-btn
                    type="submit"
                    class="btn btn-primary rounded-pill"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //message: "",
      max20: 20,
      max30: 30,
      max50: 50,
      max200: 200,
    };
  },
};
</script>
