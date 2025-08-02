import { createRouter, createWebHistory } from 'vue-router';
import All from '../views/All.vue';
import AuditEvaluation from '../views/AuditEvaluation.vue';
import FinancialPlan from '../views/FinancialPlan.vue';
import InvestmentBanking from '../views/InvestmentBanking.vue';
import TaxesEfficiency from '../views/TaxesEfficiency.vue';

const routes = [
  { path: '/', component: All },
  { path: '/AuditEvaluation', component: AuditEvaluation },
  { path: '/FinancialPlan', component: FinancialPlan },
  { path: '/InvestmentBanking', component: InvestmentBanking },
  { path: '/TaxesEfficiency', component: TaxesEfficiency },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
