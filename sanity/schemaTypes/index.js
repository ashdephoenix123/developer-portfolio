import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { demoType } from "./demo";
import { caseStudyType } from "./caseStudyType";
import { resumeType } from "./resumeType";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, demoType, caseStudyType, resumeType],
};
