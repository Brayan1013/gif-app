/** @format */

export const getGifs = async (serie) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    serie
  )}&api_key=sOJllrDGcZJXdwLlklqNhLSUXKEe6M2V&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const newData = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      img: img.images?.downsized_medium.url,
    };
  });

  return newData;
};
