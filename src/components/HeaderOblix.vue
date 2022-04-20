<template>
  <div class="site_header">
    <div class="header_container">
    <div class="oblix_logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.941 48.489">
      <g data-name="Group 1409">
        <path data-name="Path 1087" 
        d="M12.02 24.449a12.02 12.02 0 1 0 12.02 12.02 12.02 12.02 0 0 0-12.02-12.02zm0 21.093a9.074 9.074 0 1 1 9.074-9.074 9.074 9.074 0 0 1-9.074 9.074z"
         fill="#fff">
         </path>
         <path data-name="Path 1088" 
         d="M40.301 24.449a12.02 12.02 0 1 0 12.02 12.02 12.02 12.02 0 0 0-12.02-12.02zm0 21.093a9.074 9.074 0 1 1 9.074-9.074 9.074 9.074 0 0 1-9.074 9.074z" 
         fill="#fff">
         </path>
         <path data-name="Rectangle 1572" 
         fill="#fff" d="M81.795 26.514l2.225-2.225 21.931 21.93-2.225 2.226z">
         </path>
         <path data-name="Rectangle 1573" fill="#fff" d="M69.643 24.331h5.774v24.157h-5.774z"></path>
         <path data-name="Rectangle 1574" fill="#fff" d="M56.916.057h5.774v48.432h-5.774z"></path>
         <path data-name="Rectangle 1575" fill="#fff" d="M84.019 48.445l-2.225-2.225 21.93-21.931 2.226 2.225z"></path>
         <path data-name="Line 211" fill="none" d="M71.293 24.275h36.648"></path>
         <path data-name="Line 212" fill="none" d="M59.391 0H23.332"></path>
         <path data-name="Path 1089" d="M34.055 29.824V0h-5.774v36.295h2.946a9 9 0 0 1 2.828-6.471z" fill="#fff">
           </path></g>
           </svg>
           <div class="logo_text">
             <span>at</span>
             the shard
           </div>
    </div>
    <div class="header_wrapper">
      <ul>
        <li><a href="#">East</a></li>
        <li><a href="#">West</a></li>
        <li><a href="#">Bar</a></li>
        <li><a href="#">Menus</a></li>
        <li><a href="#">Oblix Experience</a></li>
        <li><a href="#">Gift Vouchers</a></li>
      </ul>
    <button 
      @click="bookingTable"
      class="button_book_table"
    >
        {{book ? "Mission complete" : "Book a table"}}
      </button>
    </div>
    </div>
  </div>
      <div class="header_margin"></div>
</template>

<script>
export default {
  name: 'HeaderOblix',
    props: {
        book: Boolean,
        bookingTable: Function,
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
</style>
