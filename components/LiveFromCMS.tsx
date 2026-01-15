import { sanityClient } from "../lib/sanity.client";
import { qLatestYouTube, qLatestInstagram } from "../lib/sanity.queries";
import { unstable_cache } from "next/cache";

const getYouTubeCached = unstable_cache(
  async () => sanityClient.fetch(qLatestYouTube),
  ["live-yt"],
  { revalidate: 600, tags: ["live"] } // 10 minutos y tag "live"
);

const getInstagramCached = unstable_cache(
  async () => sanityClient.fetch(qLatestInstagram),
  ["live-ig"],
  { revalidate: 600, tags: ["live"] }
);

export default async function LiveFromCMS() {
  const [yt, ig] = await Promise.all([getYouTubeCached(), getInstagramCached()]);

  return (
    <section id="live" className="py-16">
      <div className="container">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="section-title">Live</h2>
          <span className="muted">Contenido más reciente</span>
        </div>

        {/* YouTube */}
        {yt?.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-3">Últimos mensajes (YouTube)</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {yt.map((v: any) => (
                <a
                  key={v._id}
                  href={v.url}
                  target="_blank"
                  rel="noopener"
                  className="card hover:scale-[1.01] transition"
                >
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="mt-3 font-semibold line-clamp-2">{v.title}</h4>
                  <p className="muted text-sm">
                    {new Date(v.publishedAt).toLocaleDateString()}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Instagram */}
        {ig?.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-3">Instagram</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {ig.map((m: any) => (
                <a
                  key={m._id}
                  href={m.permalink}
                  target="_blank"
                  rel="noopener"
                  className="card overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.imageUrl} alt="IG post" className="w-full h-48 object-cover" />
                  <p className="muted line-clamp-2 mt-2 text-sm">{m.caption}</p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
