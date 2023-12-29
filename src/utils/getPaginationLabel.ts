export function getPaginationLabel(page: number, limit: number, totalItems: number): string {
  const maxLimit = (page + 1) * limit;
  return `${page * limit + 1}-${totalItems < maxLimit ? totalItems : maxLimit} of ${totalItems}`;
}
