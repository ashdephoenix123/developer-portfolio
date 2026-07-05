import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { demoType } from "./demo";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, demoType],
};
