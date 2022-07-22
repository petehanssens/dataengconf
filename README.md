# dataengconf

Website for the [Sydney DataEngConf](https://dataengconf.com.au/)!

## reatjs

[tutorial](https://reactjs.org/tutorial/tutorial.html)

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

[React Hooks - w3c shcool](https://www.w3schools.com/react/react_hooks.asp)

[React Hooks - turorial](https://www.javatpoint.com/react-hooks#:~:text=Hooks%20are%20the%20new%20feature,does%20not%20work%20inside%20classes.)

[Hooks API](https://reactjs.org/docs/hooks-reference.html)

- Basic Hooks

    - useState

    - useEffect

    - useContext

- Additional Hooks

    - useReducer

    - useCallback

    - useMemo

    - useRef

    - useImperativeHandle

    - useLayoutEffect

    - useDebugValue

    - useDeferredValue

    - useTransition

    - useId

- Library Hooks

    - useSyncExternalStore

    - useInsertionEffect

## Graphsql

[Queries and Mutations](https://graphql.org/learn/queries/)

## Aws amplify

[AWS Amplify](https://aws.amazon.com/amplify/#:~:text=AWS%20Amplify%20is%20a%20set,as%20your%20use%20cases%20evolve.)

## list of sections

- sponsors
- code of conduct
- call for papers
- organisers


## Getting started as a developer

1. Clone the repo
2. Install node `brew install node` 
3. Install yarn `npm install --global yarn`
4. Install dependencies: `yarn install`
5. Run the app: `yarn dev`
6. Open the application: http://localhost:3000/

## Setup SSH key on github profile with WSL installed

1. Make sure SSH is Installed by `sudo apt install openssh-client`
2. Run the key generator by `ssh-keygen -t rsa`
3. Press "Return" when asked for location to save the key in to save in default folder
4. Use `cat ~/.ssh/id_rsa.pub` to get the key text
5. Copy the whole text returned
6. Go to your github settings/keys by visiting "https://github.com/settings/keys"
7. Add a new key by giving it a title and pasting the key text in the "Key" Textbox

## Development environment on WSL

Installation steps

1. Install WSL using powershell in administrator mode using command `wsl --install`
Note: This will install Ubuntu as the default distribution
2. Reboot after the whole process is completed
3. Launch Ubuntu terminal
4. Setup SSH key by completing the previous section if haven't already done
5. Install cURL with `sudo apt-get install curl`
6. Install nvm, with `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
7. Close and reopen the Ubuntu terminal again
8. To verify installation, enter `command -v nvm`. This should return "nvm"
9. Install the current stable LTS release of Node.js (recommended for production applications) by `nvm install --lts`
10. Make a directory using `mkdir cloudshuttle`. You can use any name you like
11. Run `cd cloudshuttle` to jump into the directory
12. Run `git clone git@github.com:petehanssens/dataengconf.git` to clone the project into your directory
13. Run `cd dataengconf` to jump into the project folder
14. Run `npx projen`
15. Run `npm i`
16. Run `npm run dev`. This will start server on 0.0.0.0:3000
17. Open the application: http://localhost:3000/
