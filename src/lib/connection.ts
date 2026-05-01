/**
 * Connection quality detector — uses Navigator.connection API when available.
 * Falls back to 'medium' when the API isn't supported.
 */
export const getConnectionQuality = (): 'fast' | 'medium' | 'slow' => {
  const conn = (navigator as any).connection;
  if (conn) {
    if (conn.saveData) return 'slow';
    if (conn.effectiveType === '4g' && conn.downlink > 5) return 'fast';
    if (conn.effectiveType === '4g' || conn.effectiveType === '3g') return 'medium';
    return 'slow';
  }
  return 'medium';
};
