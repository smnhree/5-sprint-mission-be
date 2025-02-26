import * as s from "superstruct";

export const createCommentValidation = s.object({
  username: s.size(s.string(), 1, 10),
  content: s.size(s.string(), 1, Infinity),
});

export const updateCommentValidation = s.object({
  username: s.optional(s.size(s.string(), 1, 10)),
  content: s.size(s.string(), 1, Infinity),
});
