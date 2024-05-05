import React, { useEffect, useState } from "react";

export  function getSaveData(key: string) {

  const [value, getValue] = useState<string>("");
  useEffect(() => {
    const _value = localStorage.getItem(key);
    if (_value) {
      getValue(_value);
    }
  }, [value]);
  return value;
};
