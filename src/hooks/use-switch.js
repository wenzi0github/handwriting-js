/**
 * switch true and false
 * @param {boolean} initVal
 */
const useSwitch = (initVal = true) => {
  const [state, setState] = useState(initVal);

  const triggle = (val = true) => {
    const nextVal = val ?? !state;

    setState(nextVal);
  };
  return [state, triggle];
};
