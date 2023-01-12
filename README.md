# Northflank Bun template

<a target="_blank" rel="noopener noreferrer" href="https://www.northflank.com">
    <img alt="Northflank" align="right" src="/media/logo.svg" width="35%" />
</a>

Deploy this Bun app easily with [Northflank](https://www.northflank.com):

- [Create a service from template on Northflank](https://app.northflank.com/s/project/create/template-service)
- Select the Bun template
- Wait for the app to build and visit the newly assigned URL. That's it!

[Read our Bun guide here](https://northflank.com/guides/deploying-a-bun-app-on-northflank).

You can now clone your repository locally and start making changes. Push your changes to automatically build and deploy the updated application!

[Learn more about using Northflank](https://northflank.com/docs/).

## Run Bun locally

Visit [Bun.sh](https://bun.sh/) for Bun information and documentation.

### Install bun

Native: (macOS x64 & Silicon, Linux x64, Windows Subsystem for Linux)

```sh
curl -fsSL https://bun.sh/install | bash
```

Homebrew: (MacOS and Linux)

```sh
brew tap oven-sh/bun
brew install bun
```

Docker: (Linux x64)

```sh
docker pull jarredsumner/bun:edge
docker run --rm --init --ulimit memlock=-1:-1 jarredsumner/bun:edge
```

### Run

```shell
## install dependencies
bun install

## start server
bun index.js
```

Visit [http://localhost:3000/](http://localhost:3000/) in your browser.
