 export const userPostFetch =async user => {
                return fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({user})
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                       console.log(data) //Тут прописываем логику
                    } else {
                        localStorage.setItem("token", data.jwt)
                    }
                })

    }

    const loginUser = userObj=> ({
        type: 'LOGIN_USER',
        payload: userObj
    });