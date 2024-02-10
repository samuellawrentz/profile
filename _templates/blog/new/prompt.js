module.exports = [
  {
    type: "input",
    name: "title",
    message: "What's the title of the blog post?",
  },
  {
    type: "input",
    name: "path",
    message: "What's the path for this post? (e.g., my-first-post)",
  },
  {
    type: "input",
    name: "desc",
    message: "What's the description for the post?",
  },
  {
    type: "input",
    name: "heroimage",
    message: "Enter the path for the hero image.",
    default: "./assets/header.png",
  },
  {
    type: "input",
    name: "tags",
    message: "Enter tags for the post (comma-separated).",
  },
  {
    type: "input",
    name: "date",
    message: "What's the date of the post? (format: YYYY-MM-DD)",
    default: new Date().toISOString().split("T")[0], // Default to today's date
  },
];
