<script lang="ts">
  import { fade } from "svelte/transition";
  let top = 0;

  let list = Array.from({ length: 50 }, (_, i) => Array(i + 10).fill(i));
</script>

<svelte:window bind:scrollY={top} />
<h1>Sub Page</h1>
<div class="sub">
  {#if top > 0}
    <div class="top" transition:fade>
      top:{top}
    </div>
  {/if}

  {#each list as item, index (index)}
    <h2>{index}</h2>
    <ul>
      {#each item as subItem, subIndex (subIndex)}
        <li>{subItem}</li>
      {/each}
    </ul>
  {/each}
</div>

<style>
  .sub {
    height: 200vh;
  }
  .top {
    position: fixed;
    top: 200px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
