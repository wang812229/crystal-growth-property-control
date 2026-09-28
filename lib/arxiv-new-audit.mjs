// A second, deterministic source check before a zero-new report is published.
export function parseArxivNewListing(html) {
  const dateText = html.match(/Showing new listings for\s+([^<]+)/i)?.[1]?.trim() ?? '';
  const date = dateText ? new Date(`${dateText} 12:00:00 GMT`).toISOString().slice(0, 10) : '';
  const count = Number(html.match(/New submissions\s*\(showing\s+\d+\s+of\s+(\d+)\s+entries\)/i)?.[1] ?? NaN);
  if (!date || !Number.isFinite(count)) throw new Error('arXiv 当日列表结构无法核实；停止生成零新增报告。');
  return {date, count};
}

export function assertNoFalseZero(report, listing) {
  if (report.date === listing.date && listing.count > 0 && report.papers.length === 0) {
    throw new Error(`arXiv 官网 ${listing.date} 有 ${listing.count} 篇 new submissions，但自动报告为零篇；必须人工逐条复核。`);
  }
}
