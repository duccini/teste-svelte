<script lang="ts">
    export let historia: {
      nome: string;
      idade: number;
      historia: string;
      imagem: string;
    };
  </script>
  
  <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
    <img
      src={historia.imagem}
      alt={`Foto de ${historia.nome}`}
      class="w-full h-56 object-cover"
    />
  
    <div class="p-4 bg-rosaClaro">
      <h3 class="text-xl font-semibold text-vermelhoSuave">{historia.nome}, {historia.idade} anos</h3>
      <p class="text-sm text-gray-700 mt-2">{historia.historia}</p>
    </div>
  </div>