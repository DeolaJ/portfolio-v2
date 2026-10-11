export type CalendarEvent = {
  uid: string;
  title: string;
  description: string;
  location: string;
  url: string;
  startsAt: string;
  endsAt: string;
};

// 2026-10-16T15:30:00.000Z -> 20261016T153000Z, the UTC form both Google and iCalendar expect.
const toCalendarStamp = (date: Date): string =>
  date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');

export function getGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${toCalendarStamp(new Date(event.startsAt))}/${toCalendarStamp(
      new Date(event.endsAt)
    )}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const escapeIcsText = (value: string): string =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/([,;])/g, '\\$1');

// RFC 5545 caps content lines at 75 octets; continuation lines start with a space.
const foldIcsLine = (line: string): string => {
  const encoder = new TextEncoder();
  const parts: string[] = [];
  let current = '';
  let size = 0;

  Array.from(line).forEach((char) => {
    const charSize = encoder.encode(char).length;
    if (size + charSize > 74) {
      parts.push(current);
      current = ' ';
      size = 1;
    }
    current += char;
    size += charSize;
  });
  parts.push(current);

  return parts.join('\r\n');
};

export function buildIcsFile(event: CalendarEvent, reminderMinutesBefore = 60): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//deolaj.com//Celebrations//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.uid}`,
    `DTSTAMP:${toCalendarStamp(new Date())}`,
    `DTSTART:${toCalendarStamp(new Date(event.startsAt))}`,
    `DTEND:${toCalendarStamp(new Date(event.endsAt))}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    `URL:${event.url}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `TRIGGER:-PT${reminderMinutesBefore}M`,
    `DESCRIPTION:${escapeIcsText(event.title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `${lines.map(foldIcsLine).join('\r\n')}\r\n`;
}
