export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  switch (true) {
    case secondsPast < 60:
      return `${Math.floor(secondsPast)}'s ago`;
    case secondsPast < 3600:
      return `${Math.floor(secondsPast / 60)}'m ago`;
    case secondsPast <= 86400:
      return `${Math.floor(secondsPast / 3600)}'m ago`;
    default: {
      const days = Math.floor(secondsPast / 86400);
      return days === 1 ? `${days} day ago` : `${days} days ago`;
    }
  }
};
