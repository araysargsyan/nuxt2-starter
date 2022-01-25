<template>
    <nav class="nav-bar">
      <nuxt-link exact to="/" class="link nav-bar__logo nav-bar__link" active-class="nav-bar__link_active">
        Nuxt Starter
      </nuxt-link>
      <div class="nav-bar__link-group">
        <ul>
          <li>
            <nuxt-link exact to="/" class="link nav-bar__link" active-class="nav-bar__link_active">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link exact to="/about" class="link nav-bar__link" active-class="nav-bar__link_active">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link exact to="/user" class="link nav-bar__link" active-class="nav-bar__link_active">
              User
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
   export default {
      name: 'NavBar',
   };
</script>

<style lang="scss" scoped>
@import 'assets/styles/components/nav-bar';

.nav-bar {
  background-color: coral;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
