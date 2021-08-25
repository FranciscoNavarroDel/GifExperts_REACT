const apiKey = "KnOsovft36bwr2Qlc2769LiPVwpIQCTl";
const url = "https://api.giphy.com/v1/gifs/search";

const getGifs = async (category) => {
  const resp = await fetch(
    `${url}?api_key=${apiKey}&&q=${encodeURI(category)}&&limit=10`
  );
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      gif: img.images?.downsized_medium.url,
    };
  });
  return gifs
};

export { getGifs };
