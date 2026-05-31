export type VideoEmbed =
  | { kind: "iframe"; src: string }
  | { kind: "file"; src: string };

/**
 * Normalise a Loom / YouTube / Vimeo / direct-mp4 URL into an embeddable form.
 * Returns null if the input is empty or unrecognisable.
 */
export function toVideoEmbed(url: string | undefined): VideoEmbed | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // Loom: https://www.loom.com/share/<id>?<query>  →  https://www.loom.com/embed/<id>
  const loom = trimmed.match(
    /^https?:\/\/(?:www\.)?loom\.com\/(?:share|embed)\/([a-z0-9]+)/i
  );
  if (loom) {
    return { kind: "iframe", src: `https://www.loom.com/embed/${loom[1]}` };
  }

  // YouTube watch / shorts / youtu.be
  const yt =
    trimmed.match(
      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{6,})/
    ) ||
    trimmed.match(/^https?:\/\/(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/) ||
    trimmed.match(/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
  if (yt) {
    return { kind: "iframe", src: `https://www.youtube.com/embed/${yt[1]}` };
  }

  // Already a youtube embed
  if (/^https?:\/\/(?:www\.)?youtube\.com\/embed\//.test(trimmed)) {
    return { kind: "iframe", src: trimmed };
  }

  // Vimeo: https://vimeo.com/<id>  →  https://player.vimeo.com/video/<id>
  const vimeo = trimmed.match(/^https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/);
  if (vimeo) {
    return { kind: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };
  }

  // Direct video file
  if (/\.(mp4|webm|mov)(\?.*)?$/i.test(trimmed)) {
    return { kind: "file", src: trimmed };
  }

  // Fallback — assume the caller already provided a valid embed URL
  return { kind: "iframe", src: trimmed };
}
