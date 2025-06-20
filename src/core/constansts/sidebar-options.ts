import students from '../../assets/students.png';
import dashboard from '././.././../assets/dashboard.png';
import billing from '././.././../assets/billing.png';
import exams from '././.././../assets/exams.png';
import settings from '././.././../assets/settings.png';
import features from '././.././../assets/features.png';

export const SidebarOptions: { text: string; image: string }[] = [
  { text: 'Dashboard', image: dashboard },
  { text: 'Teachers', image: dashboard },
  { text: 'Students/classes', image: students },
  { text: 'Billing', image: billing },
  { text: 'Settings and profile', image: settings },
  { text: 'Exams', image: exams },
];

//Todo add 'NEW' image for features, check design
export const SidebarExtraOptions = [{ text: 'Features', image: features,}];
