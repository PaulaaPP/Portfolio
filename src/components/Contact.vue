<script>
export default {
  name: "Contact",
};
</script>

<template>
  <section id="contact" class="adres-image">
    <div class="adres-shadow">
      <div class="container">
        <div class="row">
          <!-- Contact form -->
          <div class="col-lg-8 col-lg-4 form-box">
            <h3>Napisz do mnie</h3>
            <form class="animation">
              <div class="contact-card">
                <label for="name">Imię:</label>
                <input type="text" id="name" class="name" required />
              </div>
              <div class="contact-card">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="contact-card">
                <label for="msg">Wiadomość</label>
                <textarea type="msg" id="msg" required></textarea>
              </div>
              <button class="btn btn-primary">Wyślij</button>
            </form>
          </div>

          <!-- Adress-->
          <div class="col-lg-4 col-lg-4 adress-box animation">
            <h3>Adres</h3>
            <div>
              <p>
                <i class="fa-solid fa-phone"></i>Telefon <br />
                <span>+48 555 222 333</span>
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> Email <br />
                <span>paula@gamil.com</span>
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i> Adres <br />
                <span>Rzeszów 38-200, 3-go Maja 12</span>
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

.adres-image {
  position: relative;
  height: 100vh;
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
.adress-box {
  color: white;
  margin: 46px 0;
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
    border: 2px solid hsl(8%, 8%, 8%, 67%);
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

.msg-status {
  display: none;
  position: absolute;
  bottom: 40px;
  left: 50%;
}

.success {
  display: flex;
  background-color: rgb(99, 141, 36);
}

.error {
  display: flex;
  background-color: red;
}

/**   media query **/

// large
@media (max-width: 1024px) {
  form {
    width: 440px;
    padding: 35px;
  }
}

@media (max-width: 991px) {
  .adres-image {
    height: 145vh;
  }
  form {
    display: grid;
    justify-content: center;
  }
  .adress-box {
    display: grid;
    justify-content: center;
    margin-bottom: 5px;
  }
}

// medium
@media (max-width: 775px) {
  .adres-image {
    height: 125vh;
  }
}

@media (max-width: 570px) {
  form {
    width: 400px;
    padding: 20px;
  }
}

// small
@media (max-width: 414px) {
  .adres-image {
    height: 150vh;
  }
  form {
    width: 350px;
    padding: 20px;
  }
}

@media (max-width: 375px) {
  .adres-image {
    height: 180vh;
  }
  form {
    width: 300px;
    padding: 15px;
  }
}

@media (max-width: 325px) {
  .adres-image {
    height: 200vh;
  }
  form {
    width: 280px;
    padding: 10px;
    margin: -5px;
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
