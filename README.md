# Warburg

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

A simple & generic Are.na client boilerplate. ([Demo](https://warburg-demo.herokuapp.com/))

## Development

```bash
git clone git@github.com:aredotna/warburg.git
cd warburg
yarn install
touch .env
echo "ARENA_CHANNEL_ID=yourchannelslug" >> .env
DEBUG=warburg:* foreman run yarn start
# => warburg:server Listening on port 3000 +0ms
```
