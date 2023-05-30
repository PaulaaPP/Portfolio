<script>
export default {
  name: "Projects",
};
</script>

<template>
  <section id="projects" class="portfolio section">
    <article class="container flex-center">
      <h1 class="section-title-01">Portfolio</h1>
      <h2 class="section-title-02">Portofilo</h2>
      <div class="content">
        <div class="portfolio-list">
          <div class="img-card-container">
            <div class="img-card">
              <div class="overlay"></div>
              <div class="info">
                <h3>wordpress</h3>
                <span>youtube</span>
                <img src="../assets/img/demo1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss/";

section {
  color: white;
  height: 100vh;
}

$card-max-width: 100%;
$card-height: 360px;

.portfolio,
.container,
.content {
  width: 100%;
}

.portfolio-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: $card-max-width;
  gap: 35px;
  margin: 0 auto;

  .img-card {
    position: relative;
    max-width: $card-max-width;
    height: $card-height;
    border-radius: 10px;
    box-shadow: grey;
    overflow: hidden;
    cursor: pointer;

    .overlay {
      transition: 1s ease;

      &:hover {
        z-index: 777;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
