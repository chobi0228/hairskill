import React, { useEffect, useState } from "react";

export  function getUrlInId(key: string) {

  const [url, getUrl] = useState<string>("");
  useEffect(() => {
    const _url = globalThis.location.href;
    const parts = _url.split('/');  
    const show_user_id = parts[parts.length - 1];
    console.log(show_user_id);
    if (_url) {
      getUrl(_url);
    }
  }, [url]);
};