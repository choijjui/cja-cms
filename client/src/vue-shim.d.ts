declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

// 1. 'vue'를 보충된 타입 선언 전에 import해야 합니다.

declare module 'vue/types/vue' {
}

declare module 'vue/types/vue' {
	interface Vue {

	}
}
