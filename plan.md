#Sign in

1. create user model - done
2. instal bcryptjs - done
3. in data file create sample users - done
4. import product model in sample data - done
5. add users using seedRouter - done
6. install jsonwebtoken - done
7. add JWT_SECRET to .env file - done
8. create utils file and create gemnerateToken function using jwt.sign - done
9. create userRouter - done
10. add in index app.use(express.json());
    app.use(express.urlencoded({ extended: true })) to have acces to body request inside api handler - done
11. add route to index.ts - done
12. test api using advanced rest client - done

in frontend

1. create userSigninMutation hook - function that posting email and pass to backend
2. create SigninPage
3. create userInfo state
4. create signin handlers
5. add login button contron in navbar
6. add signout handler

#Sign up

1. in userrouter build post method
2. in userHook create signup hook - useSignupMutation
