import { CalendarEvent } from '../utils/calendar';

export type ZoomDetails = {
  url: string;
  meetingId: string;
  passcode: string;
};

const PAGE_URL = 'https://deolaj.com/celebration/naming-ceremony';

/**
 * Paste the Zoom details in here when you have them. Guests check the page instead of waiting
 * for a message, so the link shows up for everyone as soon as this deploys.
 */
const ZOOM: ZoomDetails = {
  url: '',
  meetingId: '',
  passcode: '',
};

export const NAMING_CEREMONY = {
  hosts: ['Adeola Adeyemo', 'Precious Ikem'],
  pageUrl: PAGE_URL,
  ogImageUrl: 'https://deolaj.com/celebration/naming-ceremony-og.png',
  // 4:30 pm in London (BST) and Lagos (WAT), which are both UTC+1 on this date.
  startsAt: '2026-10-16T15:30:00Z',
  endsAt: '2026-10-16T18:30:00Z',
  hostTimeZone: 'London and Lagos',
  date: {
    weekday: 'Friday',
    month: 'October',
    day: '16',
    year: '2026',
    time: '4:30 pm',
    long: 'Friday, October 16, 2026',
  },
  zoom: ZOOM,
};

const zoomLines = ZOOM.url
  ? [
      `Join on Zoom: ${ZOOM.url}`,
      ZOOM.meetingId && `Meeting ID: ${ZOOM.meetingId}`,
      ZOOM.passcode && `Passcode: ${ZOOM.passcode}`,
    ].filter(Boolean)
  : [];

export const NAMING_CEREMONY_CALENDAR_EVENT: CalendarEvent = {
  uid: 'naming-ceremony-2026-10-16@deolaj.com',
  title: "Naming Ceremony: Adeola & Precious's baby girl",
  description: [
    'Join Adeola Adeyemo and Precious Ikem on Zoom for the naming ceremony of their baby girl.',
    `The Zoom link lives on this page: ${PAGE_URL}`,
    ...zoomLines,
  ].join('\n\n'),
  location: ZOOM.url || PAGE_URL,
  url: PAGE_URL,
  startsAt: NAMING_CEREMONY.startsAt,
  endsAt: NAMING_CEREMONY.endsAt,
};
