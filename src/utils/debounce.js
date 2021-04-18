const debounce = (fn, ms) => {
  let timerId = 0;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, ms);
  }
}

export default debounce;

