const getIntersection = (setA, setB) =>
  new Set([...setA].filter(item => setB.has(item)));
export const isEmptySet = set => set.size === 0;
export const isSubset = ({ set, subset }) =>
  getIntersection(set, subset).size === subset.size;
