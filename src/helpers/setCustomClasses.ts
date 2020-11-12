const setUserStyles = (customStyles: object, defaultStyles: object): object => {
  return {
    ...defaultStyles,
    ...customStyles,
  };
};

export default setUserStyles;
