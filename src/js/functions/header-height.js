export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector(".header__wrapper").offsetHeight;
  document
    .querySelector(":root")
    .style.setProperty("--header-height", `${headerHeight}px`);
};
