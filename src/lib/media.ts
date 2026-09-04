type Pointer = { url: string };

function urlMap(mods: Record<string, unknown>, strip: RegExp) {
  const out: Record<string, string> = {};
  for (const [path, mod] of Object.entries(mods)) {
    const ptr = (mod as { default?: Pointer })?.default ?? (mod as Pointer);
    const name = path.split("/").pop()!.replace(strip, "");
    out[name] = ptr.url;
  }
  return out;
}

const photoMods = import.meta.glob("../assets/photos/*.asset.json", { eager: true });
export const photos = urlMap(photoMods, /\.(avif|jpg|png)\.asset\.json$/);

const frameMods = import.meta.glob("../assets/statue/*.asset.json", { eager: true });
export const statueFrames: string[] = Object.entries(urlMap(frameMods, /\.asset\.json$/))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

export function photo(slug: string): string | undefined {
  return photos[slug];
}
