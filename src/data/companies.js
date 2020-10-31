import slack from '../images/slack.png';
import facebook from '../images/facebook.png';
import zendesk from '../images/zendesk.svg.png';
import mailchimp from '../images/mailchimp.png';
import wordpress from '../images/wordpress.png';
import salesforce from '../images/salesforce.png';

export const yourIntegrations = [
  {
    id: 1,
    logo: slack,
    name: 'Slack',
    description:
      'Slack is a digital workplace that connects you to the people and tools you work with everyday.',
    status: 'Connected',
    fav: false,
  },
  {
    id: 2,
    logo: facebook,
    name: 'Facebook Ads',
    description:
      'Connect your Facebook Ads account and never struggle to report on the success.',
    status: 'Connected',
    fav: false,
  },
  {
    id: 3,
    logo: zendesk,
    name: 'Zendesk',
    description:
      'Gain more insights into the customer experience with the new Zendesk activity integration.',
    status: 'Connected',
    fav: false,
  },
];

export const popularIntegrations = [
  {
    id: 4,
    logo: mailchimp,
    name: 'MailChimp',
    description:
      'Connect your lead flows and collected forms to your MailChimp account.',
    status: 'Connect',
    fav: false,
  },
  {
    id: 5,
    logo: wordpress,
    name: 'WordPress',
    description:
      'Connect with WordPress blog or website to convert website visitors into leads or buyers.',
    status: 'Connect',
    fav: false,
  },
  {
    id: 6,
    logo: salesforce,
    name: 'Salesforce',
    description:
      'Sync Salesforce for a fast, reliable and powerful integration between your two databases.',
    status: 'Connect',
    fav: false,
  },
];
