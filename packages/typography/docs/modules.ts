declare module '*.module.sass' {
  const classNames: {
    [className: string]: string;
  };
  export = classNames;
}
