<template>
  <div class="container my-5 py-5 z-depth-1">


  <!--Section: Content-->
  <section class="text-center">

    <!-- Section heading -->
    <h3 class="font-weight-bold mb-5">{{ $route.params.id }}</h3>

    <div class="row">

      <div class="col-lg-6">

        <!--Carousel Wrapper-->
        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

          <!--Slides-->
          <div class="carousel-inner text-center text-md-left" role="listbox">


            <div class="carousel-item" :class="{'active': image.active}" v-for="(image, index) in meetingRoom.images" :key="index">
              <img :src="require('../../assets/images/buildings/' + image.url)"
                :alt="image.alt" class="img-fluid">
            </div>


            <!-- <div class="carousel-item">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                alt="Second slide" class="img-fluid">
            </div>
            <div class="carousel-item">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                alt="Third slide" class="img-fluid">
            </div> -->
          </div>
          <!--/.Slides-->

          <!--Thumbnails-->
          <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <!--/.Thumbnails-->

        </div>
        <!--/.Carousel Wrapper-->

      </div>

      <div class="col-lg-5 text-center text-md-left">

        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
          <strong>{{ meetingRoom.name }}</strong>
        </h2>
        <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
          <span class="red-text font-weight-bold">
            <strong>Capacity</strong>
          </span>
          <span class="grey-text">{{ meetingRoom.capacity }}</span>
        </h3>

        <!--Accordion wrapper-->
        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 class="mb-0">
                  Equipment
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div class="card-body">
                <p v-for="(eq, index) in meetingRoom.equipment" :key="index">{{ eq }}</p>
              </div>
            </div>
          </div>
          <!-- Accordion card -->

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingTwo2">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                aria-expanded="false" aria-controls="collapseTwo2">
                <h5 class="mb-0">
                  Details
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
              data-parent="#accordionEx">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </div>
            </div>
          </div>
          <!-- Accordion card -->

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingThree3">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                aria-expanded="false" aria-controls="collapseThree3">
                <h5 class="mb-0">
                  Shipping
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
              data-parent="#accordionEx">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </div>
            </div>
          </div>
          <!-- Accordion card -->

        </div>
        <!--/.Accordion wrapper-->

        <!-- Add to Cart -->
        <section class="color">
          <div class="mt-5">


            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary btn-rounded">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
              </div>
            </div>
          </div>
        </section>
        <!-- /.Add to Cart -->

      </div>

    </div>

  </section>
  <!--Section: Content-->


</div>
</template>

<script>
export default {
  data() {
    return {
      meetingRoom: {
          id: 1,
          images: [
            {
              url: 'pexels-sevenstorm-juhaszimrus-443383.jpg',
              active: true,
              alt: 'first slide'
            },
            {
              url: 'pexels-taryn-elliott-4652004.jpg',
              active: false,
              alt: 'second slide'
            },
            {
              url: 'pexels-tove-liu-3937730.jpg',
              active: false,
              alt: 'third slide'
            },
          ],
          name: 'Ängsö',
          capacity: 60,
          equipment: [
            'Projektor',
            'Whiteboard'
          ]
        }
    }
  },  
  // methods: {
  //   getProduct() {
  //     axios.get('https://localhost:9999/api/rooms/' + this.$route.params.id)
  //     .then(res => this.meetingRoom = res.data)
  //   }
  // },
  // created() {
  //   this.getProduct()
  // }
}
</script>

<style>

</style>