<template>
  <header class="site_header">
    <div class="header_container">
    <div class="oblix_logo">
           <LogoOblix :color="color='#fff'" />
           <div class="logo_text">
             <span>at</span>
             the shard
           </div>
    </div>
    <div class="header_wrapper">
      <ul 
        :class="mobMenu"
      >
        <li><a href="#">East</a></li>
        <li><a href="#">West</a></li>
        <li><a href="#">Bar</a></li>
        <li><a href="#">Menus</a></li>
        <li><a href="#">Oblix Experience</a></li>
        <li><a href="#">Gift Vouchers</a></li>
      </ul>
      <div class="right_mob">
    <button 
      @click="bookingTable"
      class="button_book_table"
    >
        {{book ? "Mission complete" : "Book a table"}}
      </button>
      <div class="mob_burger"
        @click="showMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </div>
    </div>
  </header>
      <div class="header_margin"></div>
</template>

<script>
import LogoOblix from './LogoOblix.vue'

export default {
  name: 'HeaderOblix',
  components: {
    LogoOblix,
  },
    props: {
        book: Boolean,
        bookingTable: Function,
        mobMenu: String,
        showMenu: Function,
    }
}
</script>

<style lang="scss">
  .site_header {
    background-color: #1f1917;
    display: block;
    max-height: calc(100vh + 70px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 30;

      svg {
        overflow: hidden;
        box-sizing: inherit;
        height: 80px;
        width: 180px;
        cursor: pointer;
      }

      &:before {
        background-color: #140906;
        bottom: 0;
        content: "";
        left: 0;
        top: 25px;
        bottom: -55px;
        opacity: .25;
        position: absolute;
        right: 0;
        top: 50px;
        -webkit-transition: bottom .3s ease;
        transition: bottom .3s ease;
      }
  }

  .header_container {
    height: 90px;
    padding-top: 20px;
    align-items: flex-start;
    display: flex;
    margin-left: 70px;
    margin-right: 70px;
    max-width: none;
  }

  .oblix_logo {
    display: block;
    position: relative;
    margin-right: 126px;
    z-index: 30;
    width: 180px;
  }

  .logo_text {
    left: 0;
    top: 100%;
    color: #fff;
    font-family: Muli-ExtraBold;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: .5px;
    position: absolute;
    right: 0;
    text-align: right;
    text-transform: uppercase;
    white-space: nowrap;

      span {
        bottom: 4.5px;
        font-family: Muli-Bold;
        font-size: 9px;
        font-weight: 700;
        letter-spacing: .3px;
        position: relative;
        text-transform: lowercase;

          &:before {
            border-bottom: 1px solid #fff;
            bottom: -2px;
            content: "";
            height: 100%;
            position: absolute;
            right: 0;
            text-align: center;
            width: 9px;
          }
              }
  }

  .header_wrapper {
    display: flex;
    position: relative;
    width: 100%;
    align-items: flex-start;
    height: 90px;
    padding-top: 20px;
    color: #fff;
    -webkit-box-align: start;

      ul {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: flex-end;
        // margin: 0;
        padding-left: 0;
        // height: 100%;
        -webkit-box-pack: end;
        -webkit-box-flex: 1;
        -webkit-box-align: center;

        li {
          margin-right: 33px;
          list-style-type: none;
          display: list-item;
          text-align: -webkit-match-parent;

          a {
            display: flex;
            font-family: RockwellStd;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: .007em;
            line-height: 1em;
            vertical-align: middle;
            width: 100%;
            align-items: center;
            color: #a59e9e;
            cursor: pointer;
            text-decoration: inherit;
            background-color: transparent;

              &:hover {
                color: #fff;
              }
          }
        }
      }
  }

  .button_book_table {
    outline: none;
    user-select: none;
    background-color: transparent;
    border: 4px solid #fff;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Muli-ExtraBold;
    font-size: 15px;
    height: auto;
    letter-spacing: .5px;
    max-width: 50%;
    min-width: 180px;
    padding: 12px 7px;
    text-align: center;
    text-transform: uppercase;
    -webkit-appearance: button;
    line-height: 1.15;
    margin: 0;
  }


  // .header_margin {
  //   height: 90px;
  // }

  @media only screen and (max-width: 1056px) {
      .mob_burger {
        cursor: pointer;
        height: 25px;
        width: 29px;
        z-index: 29;

    span {
      background-color: #fff;
      border-radius: 1px;
      display: block;
      height: 3px;
      width: 100%;
      margin-bottom: 5px;

      &:first-child {
        margin-top: 0;
      }
    }
  }

    .site_header {
    left: 0;
    position: absolute;
    top: 24px;
}

  .header_wrapper {
    left: 0;
    position: absolute;

    ul {
      align-items: flex-start;
      background: #1f1917;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      height: 100vh;
      -webkit-box-pack: start;
      justify-content: flex-start;
      margin: 0 -70px;
      overflow-y: auto;
      padding: 126px 100px 0;
      top: 100px;
      width: 100%;
      z-index: 28;
      -webkit-box-align: start;

      li {
        text-transform: unset;

        a {
          font-size: 24px;
          margin-bottom: 20px;
          text-transform: unset;
          width: fit-content;
        }
      }
    }
  }

  .right_mob {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;
    -webkit-box-align: center;
  }

  .button_book_table {
    font-family: Muli;
    font-size: 14px;
    margin-right: 28px;
    min-width: 77px;
    padding: 10px 7px;
    z-index: 29;
  }
  }


  @media only screen and (max-width: 864px) {
      .site_header {
      // margin-left: 30px;
      margin-right: 30px;
      padding-top: 20px;
      align-items: flex-start;
      display: flex;
      top: 14px;

      svg {
        height: 40px;
        width: 90px;
      }

      .logo_text {
        font-size: 13px;
        left: 0;
        opacity: 0;

        span {
          font-size: 8px;
        }
      }
  }

    .header_container {
      display: flex;
      height: 70px;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      align-items: flex-start;
      -webkit-box-pack: justify;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      padding-top: 20px;
    }

    .header_wrapper {
      left: 0;
      position: absolute;
      top: 14px;

      .mob_menu {
          display: none !important;;
      }
    }
  }

</style>
