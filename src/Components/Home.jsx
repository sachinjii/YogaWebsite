import React from "react";
import BizClass from "./Home.module.scss";
import ClientTop from "../images/ClientImage.png";
import Header from "./Header/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <div className={BizClass.Home_Page}>
        <div className={BizClass.Main_Top_Section}>
          <div className={BizClass.Section_One}>
            <Header />
            <div className={BizClass.Upper_Content}>
              <h5>
                Reiki, Kundalini Yoga, & meditation <br />
                to facilitate deep healing <br /> and reduce stress & anxiety.
              </h5>
              <button className={BizClass.Custome_Btn}>
                Let's Work Together
              </button>
            </div>
            <img src={ClientTop} alt="" />
          </div>
        </div>
        <div className={BizClass.Section_Two}>
          <div className={BizClass.Left_Div}>
            <h2>
              Well <b>hello</b> there beautiful person
            </h2>
            <span>
              I’m Rebecca Schaffer and I invite you to join me on an uplifting,
              healing, magical journey back to wholeness. I know how hard it is
              to maintain a sense of balance in everyday life; most people are
              just chugging along in their daily lives - going to work, taking
              care of the family, keeping up with their financial
              responsibilities, and trying to eat healthy and maintain their
              physical health. Trying is the key word. When you finally take
              some time for yourself, maybe you’re able to squeeze in a bubble
              bath, have dinner with a friend, binge a Netflix series, or read a
              book, but that’s not enough. <br />
              It’s time to put an end to the stress cycle that keeps you stuck
              in the mundane and finally experience the ecstatic feeling of love
              that comes from connecting with your inner infinity - that is your
              birthright. <br />
              As a Reiki Master and Certified Kundalini Yoga Teacher, I have
              been able to help people reduce stress, live with more clarity,
              and connect more deeply with their gifts and desires. I want to
              help you too so you can experience deep healing and feel the
              strength and inner peace that go along with that.
            </span>
            <button className={BizClass.Custome_Btn}>MORE ABOUT MOI</button>
          </div>
          <div className={BizClass.Right_Div}>
            <div className={BizClass.IMG}></div>
          </div>
        </div>

        <div className={BizClass.Contact_Form}>
          <div className={BizClass.Form_Section}>
            <h4>Get In Touch</h4>
            <span>We are here for you , How We can help ?</span>
            <div className={BizClass.Form}>
              <input type="text" placeholder="Enter Your Name" />
              <input type="text" placeholder="Enter Your Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </div>
          </div>
          <div className={BizClass.Data_Info}>
            <img
              src="https://pingbix.com/wp-content/uploads/2023/02/homepage-vector.gif"
              alt=""
            />
            <div className={BizClass.Data_Address}>
              <div className={BizClass.Icon}>
                <HiOutlineLocationMarker />
              </div>
              <span>Address - 1</span>
            </div>
            <div className={BizClass.Data_Address}>
              <div className={BizClass.Icon}>
                <BsFillTelephoneFill />
              </div>
              <span>Mobile No.</span>
            </div>
            <div className={BizClass.Data_Address}>
              <div className={BizClass.Icon}>
                <CgMail />
              </div>
              <span>Gmail</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
