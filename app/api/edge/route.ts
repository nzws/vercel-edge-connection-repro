export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  for (let i = 0; i < 10; i++) {
    const res = await fetch('https://cms.sundai.app/api/course-progresses/events');
    const status = res.status;
    if (status >= 500) {
      return Response.json({ ok: false, status, text: await res.text() });
    }
  }

  return Response.json({ ok: true });
}
