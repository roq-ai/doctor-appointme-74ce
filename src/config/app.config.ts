interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor appointment system  v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read appointment details',
    'View healthcare provider details',
    'Access medical staff information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage clinic data',
    'Manage appointment data',
    'Manage healthcare provider data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9a68bd44-3e45-44aa-a608-2c32117fe603',
};
