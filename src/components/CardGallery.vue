<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, onUnmounted, ref } from 'vue';

import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';

const cards = [
  {
    id: 1,
    img: img1,
    title: 'Taxes & Efficiency',
    subtitle: 'Business',
  },
  {
    id: 2,
    img: img2,
    title: 'Investment Banking',
    subtitle: 'Service',
  },
  {
    id: 3,
    img: img3,
    title: 'Financial Plan',
    subtitle: 'Planning',
  },
  {
    id: 4,
    img: img4,
    title: 'Audit & Evaluation',
    subtitle: 'Review',
  },
  {
    id: 5,
    img: img5,
    title: 'Consulting',
    subtitle: 'Advice',
  },
  {
    id: 6,
    img: img6,
    title: 'Strategy',
    subtitle: 'Development',
  },
];

const isMobile = ref(window.innerWidth <= 800);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 800;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div class="card-gallery">
    <swiper
      v-if="isMobile"
      :modules="[Navigation, Pagination]"
      :slides-per-view="1.2"
      :space-between="12"
      :pagination="{ clickable: true }"
      :navigation="true"
      :loop="false"
      class="swiper-mobile"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <div class="card-gallery__item">
          <img :src="card.img" :alt="card.title" />
          <button>+</button>
          <div class="overlay">
            <p>{{ card.title }}</p>
            <p>{{ card.subtitle }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div v-else class="card-gallery__wrapper">
      <div v-for="card in cards" :key="card.id" class="card-gallery__item">
        <img :src="card.img" :alt="card.title" />
        <button>+</button>
        <div class="overlay">
          <p>{{ card.title }}</p>
          <p>{{ card.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-gallery {
  background-color: #f5f5f5;
  border-radius: 1rem;
  width: 95vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  overflow: hidden;
}

.card-gallery__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.125rem;
  padding: 0 1rem;
}

.card-gallery__item {
  position: relative;
  height: 21.5rem;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    transition: filter 0.3s ease;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #ffcc4a;
    color: #181818;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    z-index: 10;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    color: white;
    padding: 1rem;
    text-align: left;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
    border-radius: 0 0 16px 16px;
    z-index: 5;

    p {
      margin: 0;
    }

    p:first-child {
      font-size: 1.56rem;
    }

    p:last-child {
      color: #ffcc4a;
    }
  }

  &:hover {
    img {
      filter: brightness(20%);
    }

    .overlay {
      opacity: 1;
      transform: translateY(0);
    }

    button {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.swiper-mobile {
  padding: 0 1rem;

  :deep(.swiper-slide) {
    display: flex;
    justify-content: center;
  }

  :deep(.swiper-pagination) {
    bottom: 0;
  }

  :deep(.swiper-pagination-bullet) {
    background: #ffcc4a;
    opacity: 0.6;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #ffcc4a;
    opacity: 1;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #ffcc4a;
    width: 30px;
    height: 30px;
  }
}
</style>
