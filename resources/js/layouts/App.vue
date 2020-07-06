<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/xyz">Home</router-link>
        </li>

        <li>
          <router-link to="/xyz/about">About</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
