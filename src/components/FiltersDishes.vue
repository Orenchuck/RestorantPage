<template>
<div class="filter_box">
    <div class="page_logo">
        <p> O </p>
    </div>
  <div class="filter_wrap">
      <h3>à la carte menu</h3>
      <div class="filter_title">
        <h6 class="filter_title_h">
                    Filter by:
        </h6>
        <div class="filter_names">
            <h6 
            @click="useVegeterian"
            >
                Vegeterian
            </h6>
            <h6 
            @click="useNuts"
            >
                Contain nuts
            </h6>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'FiltersDishes',
    props: {
        useVegeterian: Function,
        useNuts: Function,
    }
}
</script>

<style lang="scss">
    .filter_box {
        background-color: #fff;
        padding: 48px 70px 70px;
    }

    .page_logo {
        display: flex;
        align-items: flex-end;

            p {
                color: #1f1917;
                font-family: fontello;
                font-size: 56px;
                margin: -10px 7.9% -7px;
            }

            &::before {
                background-color: #d6d6d6;
                content: "";
                -webkit-box-flex: 1;
                flex-grow: 1;
                height: 2px;
                margin-bottom: 16px;
            }

            &::after {
                background-color: #d6d6d6;
                content: "";
                -webkit-box-flex: 1;
                flex-grow: 1;
                height: 2px;
                margin-bottom: 16px;
            }
    }

    .filter_wrap {
        align-items: flex-end;
        border-bottom: 2px solid #d6d6d6;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-top: 52px;
        padding-bottom: 73px;

        h3 {
            margin-bottom: 0;
            margin-right: 30px;
            line-height: 1.26em;
            font-size: 40px;
            font-weight: 400;
            font-family: RockwellStd;
            color: #140906;
        }
    }

    .filter_title {
        justify-content: flex-end;
        width: 54%;
        display: flex;
        -webkit-box-pack: end;
    }

    .filter_title_h {
        font-family: Muli-ExtraBold;
        letter-spacing: .03em;
        margin-bottom: 10px;
        text-transform: uppercase;
        margin-right: 10px;
        white-space: nowrap;
        font-size: 15px;
        color: #140906;
        font-weight: 400;
    }

    .filter_names {
        position: relative;
        width: 80%;
        flex-wrap: wrap;
        width: 100%;
        z-index: 1;
        display: flex;

        h6 {
            color: #a59e9e;
            cursor: pointer;
            margin-left: 21px;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            white-space: nowrap;
            font-family: Muli-ExtraBold;
            letter-spacing: .03em;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 400;
        }
    }

</style>