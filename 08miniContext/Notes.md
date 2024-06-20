# Context

Create **components** folder inside **components** folder create **UserContext.js** it is a JavaScript file for creating Context
`components/UserContext.js`

1. Import React

```
import React from "react";
```

2. Creating Context from React and store in variable

```
const UserContext = React.createContext();
```

3. Export UserContext

```
export default UserContext;
```

4. After creating Context, we need to Create Provider for context

```
<UserContext>
</Login>
</Card>
    </Data>
</Card>
</UserContext>
```

5. Creating Context provider, make file inside **components** folder **UserContextProvider.jsx** it is a JSX file
   `components/UserContextProvider.jsx`

- Import React from react

```
import React from "react";
```

- Import UserContext

```
import UserContext from "./UserContext";
```

6. Create UserContextProvider method

```
const UserContextProvider = () => {

}
```

7. Export UserContextProvider

```
export default UserContextProvider;
```

8. Final Setup for setting up UserContextProvider

```
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};
```

9. For using UserContextProvider in App.js

```
function App() {
  return (
    <div>
      <UserContextProvider>
        <h1>React with Chai | Mini Context</h1>
      </UserContextProvider>
    </div>
  );
}
```

10. 
