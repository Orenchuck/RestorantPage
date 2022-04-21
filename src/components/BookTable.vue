<template>
  <div class="footer_book_table">
    <button 
      @click="bookingTable"
      class="button_book_table button_footer"
      >
      {{book ? "Mission complete" : "Book a table"}}
      </button>
  </div>
</template>

<script>
export default {
    name: "BookTable",
    props: {
        book: Boolean,
        bookingTable: Function,
    }

}
</script>

<style lang="scss">
  .footer_book_table {
    background-image: url("https://www.oblixrestaurant.com/wp-content/uploads/2019/09/foot.jpg");
    background-position: top;
    background-size: cover;
    height: 280px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    margin-left: 70px;
    margin-right: 70px;
    max-width: none;

    &::before {
      background-color: #140906;
      bottom: 0;
      content: "";
      left: 0;
      opacity: .35;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .button_footer {
    z-index: 999;
  }

  @media only screen and (max-width: 864px) {
    .footer_book_table {
      height: 150px;
      width: 100%;
      margin-left: 0;
    }
  }
</style>