<script lang="ts">
    import Banner from "../lib/components/Banner.svelte";
    import HistoriaCard from "../lib/components/HistoriaCard.svelte";
    import { historias } from '$lib/data';
  </script>
  
  <main class="bg-rosaClaro min-h-screen">
    <Banner />
  
    <section class="py-12 px-4 md:px-16">
      <h2 class="text-2xl md:text-3xl font-bold text-vermelhoSuave text-center mb-8">
        Histórias que Inspiram
      </h2>
      <div class="grid gap-6 md:grid-cols-3">
        {#each historias.slice(0, 3) as historia}
          <HistoriaCard {historia} />
        {/each}
      </div>
    </section>
  
    <section class="bg-rosaMedio py-12 text-center px-4">
      <h2 class="text-2xl font-bold text-vermelhoSuave mb-4">Ajude a transformar vidas</h2>
      <p class="text-lg mb-6">Você pode fazer a diferença na vida de uma criança.</p>
      <div class="space-x-4">
        <a href="/doacoes" class="bg-verdeClaro text-black px-6 py-3 rounded-full font-semibold">
          Fazer uma Doação
        </a>
        <a href="/como-ajudar" class="bg-vermelhoSuave text-white px-6 py-3 rounded-full font-semibold">
          Seja Voluntário
        </a>
      </div>
    </section>
  </main>