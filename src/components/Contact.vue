<script>
export default {
  name: "Contact",
};
</script>

<template>
  <section id="contact" class="adres-image">
    <div class="adres-shadow">
      <div class="container justify-content-center text-center">
        <!-- Adress-->
        <div class="adress-box animation">
          <h3>Address</h3>
          <div class="box">
            <div class="px-5">
              <p>
                <i class="fa-solid fa-phone"></i>Telephone<br />
                <span>+48 534242940</span>
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> E-mail <br />
                <span>piskorzpaula@gmail.com </span>
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i> Address <br />
                <span>Poland, Nowa Wieś</span>
              </p>

              <!-- links -->
              <div class="links">
                <p>
                  <a
                    href="https://github.com/PaulaaPP/Portfolio"
                    target="_blank"
                    ><i class="fa-brands fa-github"></i> Github</a
                  >
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/paula-piskorz-a02139283"
                    target="_blank"
                    ><i class="fa-brands fa-linkedin"></i>Linkedin</a
                  >
                </p>
              </div>
            </div>

            <!--  -->

            <!-- <h1>Contact Me</h1> -->

            <div class="box-form">
              <h1>Contact Me</h1>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                class="form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="1c0e1fec-a681-4f0f-bacd-19670c2e37ee"
                />

                <div class="wrapper">
                  <input
                    type="text"
                    name="Name"
                    id="text"
                    class="input"
                    required
                    placeholder="Your name"
                  />
                  <label for="text"></label>
                </div>

                <div class="wrapper">
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    class="input"
                    required
                    placeholder="Your email"
                  />
                  <label for="email"></label>
                </div>

                <div class="wrapper">
                  <textarea
                    placeholder="Message"
                    name="Message"
                    id="message"
                    rows="4"
                    class="input"
                  ></textarea>
                </div>

                <div class="btns">
                  <button type="submit" class="form-btn">Submit</button>
                  <button type="reset" class="form-btn">Reset</button>
                </div>
              </form>

              <span class="bg-1"></span>
              <span class="bg-2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

.row {
  margin: 10% 0;
}
h3 {
  align-self: center;
}

.adres-image {
  position: relative;
  height: 90vh;
  background-image: url("../assets/img/form-image.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;
}

.adres-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.678);
  z-index: -10;
}

// adres area
.box {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  align-content: stretch;
  margin: 64px 0;
}
.adress-box {
  color: white;
  margin: 100px 0;

  h3 {
    font-size: 35px;
    margin-bottom: 35px;
  }

  p {
    margin: 20px 0;
    font-size: 23px;
  }

  i {
    padding: 10px;
    color: $green;
  }
  span {
    font-size: 15px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .links {
    margin-top: 30px;
    p {
      padding: 2px;
    }
  }
}

// Contact Form

.box-form {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid $green;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    backdrop-filter: blur(10px);
    background: inherit;
  }

  h1 {
    color: white;
    font-size: 25px;
    text-align: center;
    margin: 20px;
  }

  form {
    position: relative;
    min-width: 300px;
    width: 25vw;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    position: relative;
    width: 50%;
    min-width: 250px;
  }

  .input {
    width: 100%;
    border: 1px solid white;
    outline: none;
    border-radius: 8px;
    padding: 8px;
    margin: 15px 0;
    color: #425981;
    font-weight: 500;
    font-size: 1.1rem;
    box-shadow: inset 4px 4px 4px #a5a3a350, 4px 4px 4px #dadada21;
  }
}

label {
  position: absolute;
  left: 10%;
  top: 50%;
  pointer-events: none;
  color: gray;
}

.btns {
  display: flex;
  gap: 20px;
}

textarea {
  max-width: 100%;
}

.form-btn {
  width: 120px;
  height: 50px;
  background: #fcfcfd;
  border-radius: 4px;
  border: 2px solid $green;
  color: $green;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

/**   media query **/

// large
@media (max-width: 1024px) {
  .adres-image {
    height: 60vh;
  }
}

@media (max-width: 991px) {
  .adres-image {
    height: 70vh;
  }
}

// medium
@media (max-width: 768px) {
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .adres-image {
    height: 120vh;
  }

  .box-form {
    margin-top: 40px;
  }
}

// small
@media (max-width: 414px) {
  .adres-image {
    height: 160vh;
  }
}

@media (max-width: 375px) {
  .adres-image {
    height: 160vh;
  }

  .box-form {
    form {
      min-width: 280px;
    }
  }
}

@media screen and (max-width: 768px) and (max-height: 667px) {
  .adres-image {
    height: 180vh;
  }
}

@media (max-width: 320px) {
  .adres-image {
    height: 230vh;
  }
}

/*** animations ***/
@keyframes glow {
  from {
    box-shadow: 0 0 10px $green, 0 0 20px $green, 0 0 30px $green;
  }
  to {
    box-shadow: 0 0 20px $green, 0 0 30px $green, 0 0 40px $green;
  }
}
</style>
