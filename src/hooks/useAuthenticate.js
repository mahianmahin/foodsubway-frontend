import { useContext, useEffect, useState } from "react";
import { UtilitiesContext } from "../App";

export default function useAuthenticate() {
    const context = useContext(UtilitiesContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      if (localStorage['token']) {
        fetch(context.baseUrl + '/api/token/verify/', {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
        
            body: JSON.stringify({
              token: window.localStorage.getItem('token')
            })
          }).then(response => response.json())
          .then(data => {
            if (Object.keys(data).length === 0) {
            setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
      }
    }, []);


    return isLoggedIn;
}