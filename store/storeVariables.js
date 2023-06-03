import { proxy } from "valtio";

const storeVariables = proxy({
  globalWeather: {},
  globalWardrobe: [],
  globalBucket: [],
});

export { storeVariables };
