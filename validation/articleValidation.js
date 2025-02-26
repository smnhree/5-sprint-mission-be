import * as s from "superstruct";

export const createArticleValidation = s.object({
  username: s.size(s.string(), 1, 10),
  title: s.size(s.string(), 1, 50),
  content: s.size(s.string(), 1, Infinity),
  images: s.array(s.string()), // 빈 배열일 경우에도 유효성 검사 통과
});

export const updateArticleValidation = s.object({
  username: s.optional(s.size(s.string(), 1, 10)),
  title: s.optional(s.size(s.string(), 1, 50)),
  content: s.optional(s.size(s.string(), 1, Infinity)),
  images: s.optional(s.array(s.string())), // 빈 배열일 경우에도 유효성 검사 통과
});
