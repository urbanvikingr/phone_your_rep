# Phone Your Rep

![Capital Building](http://www.phoneyourrep.com/d659a98dc28d30f04e54fbc8ce029f3b.png)

### Call Local. Call Often.

If we want to have an effect on our politics, we need good representation. Our reps need to hear us if they're going to represent us.
Calling them works, and we've made it easy to download their contact info.

# Readme

### Setting up the dev environment

Recommended node version 6.9.1

### Project Overview

### Running
```
npm i
npm run build
npm run dev
```

### Notes
- Recommended node version 6.9.1
- API at https://github.com/phoneyourrep/phone-your-rep-api

### Contributing
Contributions are welcome! See the Contributing guide for more.

### Setting up AWS deployment

1. Set up aws credentials in `./.aws/credentials` under a profile named
   `phoneyourrep`.
2. Run `npm run s3-deploy` to deploy all the files in `./docs` to an s3 bucket
   named `www.phoneyourrep.com`.

TODO: implement `certbot` or AWS cert management for SSL with CloudeFront.

If you need to set up a new bucket, see the permissions JSON in `./aws` to start.
