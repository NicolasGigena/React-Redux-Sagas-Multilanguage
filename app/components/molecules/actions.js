export function modifyExactly(modifier, value) {
  return {
    type: 'MODIFY_EXACTLY',
    modifier,
    value
  };
}
