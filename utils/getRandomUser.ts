import { getRandomImage } from "./getRandomImage";

export const getRandomUser = async () => {
  const response = await fetch(
    "https://random-data-api.com/api/omniauth/twitter_get"
  );

  const data = await response.json();

  const user = data.info;

  const image = await getRandomImage();

  user.image = image;

  return user;
};
