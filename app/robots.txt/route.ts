export async function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, immutable',
    },
  });
}

