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
            </div>

            <!--  -->

            <div class="links">
              <p>
                <a href="https://github.com/PaulaaPP/Portfolio" target="_blank"
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
  height: 72vh;
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
  align-items: flex-start;
  text-align: center;
  justify-content: space-around;
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
    margin-top: 65px;
    p {
      padding: 5px;
    }
  }
}

// Contact Form
.form-box {
  display: grid;
  justify-items: center;
  color: white;
  margin: 35px 0;

  h3 {
    font-size: 35px;
    margin-bottom: 35px;
  }
}

form {
  background-color: hsl(201, 40%, 17%, 0.308);
  width: 600px;
  padding: 50px;
  border-radius: 24px;
  backdrop-filter: blur(10px);

  label {
    margin-bottom: 10px;
    font-size: 20px;
  }

  input,
  textarea,
  button {
    padding: 10px;
    font-size: 15px;
    border: 2px solid $green;
    border-radius: 10px;
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }

  button {
    padding: 10px;
    width: 100%;
    cursor: pointer;
    color: $green;
    border-color: $green;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: transparent;
      border-color: $green;
      color: $bright_green;
      box-shadow: $bright_green;
      animation: glow 1s ease-in-out infinite alternate;
      transform: scale(1.02);
    }
  }
}

.contact-card {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

/**   media query **/

// large
@media (max-width: 1024px) {
  .adres-image {
    height: 50vh;
  }
}

@media (max-width: 991px) {
  .adres-image {
    height: 60vh;
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
    height: 80vh;
  }
}

// small
@media (max-width: 414px) {
  .adres-image {
    height: 90vh;
  }
}

@media (max-width: 375px) {
  .adres-image {
    height: 110vh;
  }
}

@media (max-width: 325px) {
  .adres-image {
    height: 130vh;
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
