export const getCardData = (data) => ({
    imageUrl: (data.poster_path || data.profile_path),
    title: (data.title || data.name),
    subtitle: (data.vote_average || data.job || data.character)
});