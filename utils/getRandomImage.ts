export const getRandomImage = async () => {
  const image = await fetch("https://source.unsplash.com/random/200x200");

  return image.url;
};
