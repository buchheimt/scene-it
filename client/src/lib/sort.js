const customSort = {
  recent: (list) => list.sort((a,b) => b.id - a.id),
  popular: (list) => list.sort((a,b) => b.net_score - a.net_score),
  unpopular: (list) => list.sort((a,b) => a.net_score - b.net_score),
  controversial: (list) => list.sort((a,b) => b.total_points - a.total_points)
}

export default customSort;
