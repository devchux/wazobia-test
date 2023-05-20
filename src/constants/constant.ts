export const toolbarOptions: Record<
  string,
  string[] | Record<string, string | string[]>
> = {
  options: ["blockType", "link", "image", "textAlign", "inline", "list"],
  inline: {
    options: ["bold", "italic"],
    dropdownClassName: "custom-inline-wrapper",
  },
  blockType: {
    options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
    className: "custom-blocktype-wrapper",
  },
  textAlign: {
    options: ["left", "right", "center"],
    className: "custom-textalign-wrapper",
  },
  list: {
    options: ["unordered", "ordered", "indent"],
    className: "custom-list-wrapper",
  },
  link: {
    options: ["link"],
    className: "custom-link-wrapper",
  },
  image: {
    className: "custom-image-wrapper",
  },
};
