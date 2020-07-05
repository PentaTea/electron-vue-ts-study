import Vue from "vue";

// attachment of vue plugins
declare module "vue/types/vue" {
  interface VueConstructor<Vue> {
    $http?: any;
    $electron?: any;
  }

  namespace Vue {
    let $http: any;
    let $electron: any;
  }
}
