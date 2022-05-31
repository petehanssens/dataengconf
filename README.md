# dataengconf

Website for the [Sydney DataEngConf](https://dataengconf.com.au/)!

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

1. Make sure SSH is Installed by "sudo apt install openssh-client"
2. Run the key generator by "ssh-keygen -t rsa"
3. Press "Return" when asked for location to save the key in to save in default folder.
4. Use "cat ~/.ssh/id_rsa.pub" to get the key text.
5. Copy the whole text returned.
6. Go to your github settings/keys by visiting "https://github.com/settings/keys"
7. Add a new key by giving it a title and pasting the key text in the "Key" Textbox.

## Development environment on WSL

Installation steps

1. Install WSL using powershell in administrator mode using command "wsl --install"
Note: This will install Ubuntu as the default distribution
2. Reboot after the whole process is completed.
3. Launch Ubuntu terminal
4. Setup SSH key by completing the previous section if haven't already done.
5. 