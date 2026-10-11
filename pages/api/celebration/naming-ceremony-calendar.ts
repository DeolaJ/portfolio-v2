import { NextApiRequest, NextApiResponse } from 'next';

import { NAMING_CEREMONY_CALENDAR_EVENT } from '../../../src/constants/naming-ceremony';
import { buildIcsFile } from '../../../src/utils/calendar';

// Served rather than static so the file always carries the current Zoom details.
export default function handler(_req: NextApiRequest, res: NextApiResponse): void {
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  // Inline lets iOS Safari show its "Add to Calendar" sheet instead of saving a file.
  res.setHeader('Content-Disposition', 'inline; filename="naming-ceremony.ics"');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.status(200).send(buildIcsFile(NAMING_CEREMONY_CALENDAR_EVENT));
}
