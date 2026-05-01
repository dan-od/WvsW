const PREVIEW_CACHE: Record<string, string> = {};

export const getPreviewUrl = async (albumName: string, artistName: string = 'Wavy Witny'): Promise<string | null> => {
  const key = `${artistName}-${albumName}`;
  if (PREVIEW_CACHE[key]) return PREVIEW_CACHE[key];

  try {
    const query = encodeURIComponent(`${artistName} ${albumName}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&limit=5`);
    const data = await res.json();

    if (data.results?.length > 0) {
      const preview = data.results[0].previewUrl;
      if (preview) {
        PREVIEW_CACHE[key] = preview;
        return preview;
      }
    }
    return null;
  } catch {
    return null;
  }
};
