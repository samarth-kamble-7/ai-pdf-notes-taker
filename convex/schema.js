import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  user: defineTable({
    userName: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  }),
});
