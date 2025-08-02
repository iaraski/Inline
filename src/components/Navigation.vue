<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation">
    <div class="navigation__wrapper">
      <RouterLink to="/">All</RouterLink>
      <RouterLink to="/TaxesEfficiency">Taxes & Efficiency</RouterLink>
      <RouterLink to="/InvestmentBanking">Investment banking</RouterLink>
      <RouterLink to="/FinancialPlan">Financial Plan</RouterLink>
      <RouterLink to="/AuditEvaluation">Audit & Evaluation</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  background-color: #181818;
  height: 6rem;
  border-radius: 30px;
  width: 85%;
  margin: 1rem auto 4.625rem auto;
  overflow: hidden;
}

.navigation__wrapper {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;

  @media (max-width: 800px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.56rem;
    white-space: nowrap;
    padding: 0 1rem;
    position: relative;

    &:hover {
      color: #ffcc4a;
    }

    &.router-link-exact-active {
      color: #ffcc4a;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        height: 2px;
        background: #ffcc4a;
        border-radius: 1px;
      }
    }
  }
}
</style>
