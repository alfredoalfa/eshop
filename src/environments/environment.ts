// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCKbgJzR6Q9YOxc_bsNc2jqfA8aI8MrFaM",
    authDomain: "eshop-local.firebaseapp.com",
    databaseURL: "https://eshop-local.firebaseio.com",
    projectId: "eshop-local",
    storageBucket: "eshop-local.appspot.com",
    messagingSenderId: "275821120703"   
  }
};
