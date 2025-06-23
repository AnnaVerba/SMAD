import students from '../../assets/students.png';
import dashboard from '././.././../assets/dashboard.png';
import billing from '././.././../assets/billing.png';
import exams from '././.././../assets/exams.png';
import settings from '././.././../assets/settings.png';
import features from '././.././../assets/features.png';
import { ROUTES } from './routes.ts';
import type { SidebarOptionsType } from '../type/sidebar-options.ts';

export const SidebarOptions: SidebarOptionsType[] = [
  { text: 'Dashboard', image: dashboard, navigate: ROUTES.DASHBOARD },
  { text: 'Teachers', image: dashboard, navigate: ROUTES.TEACHERS },
  { text: 'Students/classes', image: students, navigate: ROUTES.STUDENTS_CLASSES },
  { text: 'Billing', image: billing, navigate: ROUTES.BILLING },
  { text: 'Settings and profile', image: settings, navigate: ROUTES.SETTINGS_AND_PROFILE },
  { text: 'Exams', image: exams, navigate: ROUTES.EXAMS },
];

//Todo add 'NEW' image for features, check design
export const SidebarExtraOptions = [{ text: 'Features', image: features, navigate: ROUTES.FEATURES }];
