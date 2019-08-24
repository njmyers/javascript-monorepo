const validateArgs = () => {
  const args = process.argv.slice(2);
  const cwd = process.cwd();

  if (args.length !== 1) {
    console.log("one argument please");
    process.exit(1);
  }

  return args[0];
};

export default validateArgs;
