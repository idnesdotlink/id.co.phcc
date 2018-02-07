<template>
  <div id="menu" class="row">
  <ul class="menu">
    <li class="menu__item">
        <a class="menu__link" href="#">Home</a>
    </li>

    <li class="menu__item menu__item--dropdown" v-on:click="toggle('ranking')" v-bind:class="{'open' : dropDowns.ranking.open}">
        <a class="menu__link menu__link--toggle" href="#">
            <span>Rangliste</span>
            <i class="menu__icon fa fa-angle-down"></i>
        </a>

        <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Aktuelle Runde</a>
            </li>

            <li class="dropdown-menu__item">
                <a class="dropdown-menu__link" href="#">Siegerliste</a>
            </li>
        </ul>
    </li>

    <li class="menu__item">
        <a class="menu__link" href="#">Belegungskalender</a>
    </li>
</ul>

  <pre>{{ dropDowns | json }}</pre>
</div>
</template>

<script>
export default {
  el: '#menu',

  mounted ()
  {
    var self = this
    window.addEventListener('click', function(e){
      if (! e.target.parentNode.classList.contains('menu__link--toggle'))
      {
        self.close()
      }
    }, false)
  },

  data () {
    return {
      dropDowns: {
        ranking: { open: false}
      }
    }
  },

  methods: {
    toggle: function(dropdownName)
    {
      //alert(dropdownName)
       this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
    },

    close: function()
    {
      for (dd in this.dropDowns)
      {
        this.dropDowns[dd].open = false;
      }
    }
  }


}
</script>


<style lang="scss" scoped>
  body {
  margin: 2rem 0;
  }

  ul {
  list-style: none;
  }

  .menu {
    display: flex;

    &__item {
        position: relative;
        padding-right: 3rem;

        &--dropdown {}
    }

    &__link {
        //color: $menu_link_color;
        text-transform: uppercase;

        &:hover {
            //color: $menu_link_hover_color;
        }

        &--toggle {}
    }

    &__icon {
        margin: 0 !important;
    }
  }

  .open .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    font-size: 0.9rem;
    position: absolute;
    min-width: 130px;
    top: 2.2rem;
    display: none;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .dropdown-menu__item:first-child .dropdown-menu__link {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown-menu__item:last-child .dropdown-menu__link {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .dropdown-menu__link {
    display: block;

    padding: 1rem;
    color: blue;
    background-color: #fafafa;

    &:hover {
        color: green;
        background-color: #ccc;
    }
  }
</style>

