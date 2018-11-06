export const getVerticalCardData = (data) => ({
    imageUrl: (data.poster_path || data.profile_path),
    title: (data.title || data.name),
    subtitle: (data.vote_average || data.job || data.character || 'None')
});

export const getHorizontalCardData = (data) => ({
    imageUrl: (data.poster_path),
    title: (data.title),
    subtitle: `Your rating: ${(data.rating || 'None')}`
});