<script setup lang="ts">
import CallIcon from '../assets/images/CallIcon.svg';
import ClockIcon from '../assets/images/ClockIcon.svg';
import LocaleIcon from '../assets/images/LocaleIcon.svg';
import ContactCard from './contactCard.vue';
</script>

<template>
  <div class="proccess">
    <!-- Левая часть: контакты -->
    <div class="proccess__contact-container">
      <h2>PROCCESS</h2>
      <h1>Contact Us. It’s Easy.</h1>
      <p>
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
        approaches to corporate strategy foster collaborative.
      </p>
      <ContactCard text="Call Today" title="+1 800 100 900" :imageSrc="CallIcon" />
      <ContactCard text="Monday To Friday" title="9AM - 5PM" :imageSrc="ClockIcon" />
      <ContactCard
        text="USA Office"
        title="195 Devonshire St Boston, MA 02110"
        :imageSrc="LocaleIcon"
      />
    </div>

    <!-- Правая часть: форма -->
    <form class="proccess__form">
      <div class="proccess__inputs">
        <div>
          <p>Full Name</p>
          <input type="text" placeholder="john david" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="consult@mail.com" />
        </div>
      </div>
      <div class="proccess__inputs">
        <div>
          <p>Phone</p>
          <input type="text" placeholder="+008 654 231" />
        </div>
        <div>
          <p>Company (optional)</p>
          <input type="text" placeholder="yourcompany.com" />
        </div>
      </div>
      <p>Message</p>
      <textarea
        placeholder="Briefly tell us about your project and your current goals. How can we help you?"
      ></textarea>
      <button>Send Message</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.proccess {
  width: 95vw;
  margin: 7.1rem auto;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-start;

  // Адаптивность: мобильная версия
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    margin: 4rem auto;
  }
}

.proccess__contact-container {
  width: 37%;
  flex-shrink: 0;

  h2 {
    border-radius: 1rem;
    background-color: #ffcc4a;
    width: fit-content;
    padding: 1px 1rem;
    margin-bottom: 0.3rem;
    line-height: 1.48;
    letter-spacing: 0.145em;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h1 {
    font-size: 2.9rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  // На мобильных — ширина 100%
  @media (max-width: 800px) {
    width: 100%;
  }
}

.proccess__form {
  width: 54%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    input {
      width: 90% !important;
    }
    textarea {
      width: 86% !important;
    }
  }

  .proccess__inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 7.5%;
    margin-bottom: 2.5rem;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    div {
      width: 100%;

      p {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        color: #333;
      }

      input {
        width: 100%;
        padding: 1.1rem 1.5rem;
        border-radius: 54px;
        border: 1px solid #ddd;
        outline: none;
        font-size: 1rem;
        transition: border 0.3s ease;

        &:focus {
          border: 1px solid #ffcc4a;
        }
      }
    }
  }

  p {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    color: #333;
  }

  textarea {
    width: 100%;
    height: 10rem;
    padding: 1.5rem 2rem;
    border-radius: 22px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 1rem;
    resize: vertical;
    margin-bottom: 1.8rem;

    &:focus {
      border: 1px solid #ffcc4a;
    }
  }

  button {
    background-color: #181818;
    color: white;
    padding: 1rem 1.6rem;
    border-radius: 42px;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #000;
      transform: translateY(-2px);
    }

    @media (max-width: 800px) {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      width: 100%;
      border-radius: 12px;
    }
  }
}
</style>
