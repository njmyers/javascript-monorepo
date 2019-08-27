/**
 * Check to see if a template file should be filtered from the array. It must
 * pass the test for include as well as exclude
 */
function templateFileFilter(config) {
  const { include, exclude } = config;

  return templateFile => {
    const criteria = [
      include ? templateFile.path.includes(include) : true,
      exclude ? !templateFile.path.includes(exclude) : true,
    ];

    return criteria.every(Boolean);
  };
}
export default templateFileFilter;
