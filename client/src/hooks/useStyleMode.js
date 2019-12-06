import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";



export const useStyleMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

  useEffect(() => {
    console.log(useLocalStorage[0]);
    const bodyTag = document.querySelector('body')
    if (someValue == true) {
      bodyTag.classList.add('baseStyle');
    }
    if (someValue == false) {
      bodyTag.classList.remove('baseStyle');
    }
  },[someValue])

  return [someValue, setSomeValue]
};
