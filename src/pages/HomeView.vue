<script setup>
import axios from 'axios'

const episodes = ref([])

const page = ref(1)
const totalPages = ref(0)
const episodeSelected = ref('')
const modal = ref(false)

async function handleGetEpisodes() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode', {
      params: {
        page: page.value,
      },
    })
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
  } catch (error) {
    console.error(error)
  }
}

function setPagination(newPage) {
  page.value = newPage
  handleGetEpisodes()
}

function openModal(episodeId) {
  episodeSelected.value = episodeId.toString()
  modal.value = true
}

onMounted(() => {
  handleGetEpisodes()
})
</script>

<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardBase
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :episode="episode.episode"
        :air-date="episode.air_date"
        :characters="episode.characters"
        @clickEpisode="openModal(episode.id)"
      />
    </div>

    <div class="flex justify-center py-4">
      <div class="join">
        <button
          v-for="(page, index) in totalPages"
          :key="index"
          class="join-item btn btn-lg md:btn-md"
          :class="{ 'btn-active': index + 1 === page }"
          @click="setPagination(index + 1)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>

    <ModalEpisode v-model="modal" :id="episodeSelected" />
  </div>
</template>
