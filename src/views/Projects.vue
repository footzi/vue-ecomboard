<template>
    <v-layout align-center justify-center wrap fill-height flex class="Progects">
        <v-tabs class="flex md4"
            color="cyan"
            dark
            slider-color="yellow"
        >
            <v-tab :key="1" ripple>
                Создать
            </v-tab>
            <v-tab :key="2" ripple>
                Выбрать
            </v-tab>

            <v-tab-item :key="1">
                <v-form v-model="valid" @sumbit="nextCreate">
					<v-text-field
						v-model="name"
						label="Название проекта"
						:rules="nameRules"
						required
						prepend-icon="fas fa-bookmark fa-sm"
					></v-text-field>
					<v-text-field
						v-model="url"
						label="URL проекта"
						:rules="urlRules"
						prepend-icon="fas fa-cloud fa-sm"
						required
					></v-text-field>
					<v-checkbox
						v-model="confirm"
						:label="'Подтвердите создание'"
						:rules="checkboxRules"
						color="cyan"
					></v-checkbox>
                    <v-btn @click="clear">Очистить</v-btn>
                    <v-btn @click="nextCreate" :disabled="!valid" :loading="preloader">Далее</v-btn>
                </v-form>
				<v-alert :value="error" type="error">
					{{error}}
				</v-alert>
            </v-tab-item>

            <v-tab-item :key="2">
                <v-form @sumbit="nextSelect">
                    <v-radio-group>
						<template  v-for="item in projects">
                        	<v-radio color="cyan" :label="item.name" :value="item.id"  :key="item.id" />
						</template>
                    </v-radio-group>
                    <v-btn @click="nextSelect">Далее</v-btn>
                </v-form>
            </v-tab-item>
        </v-tabs>

    </v-layout>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
	data: () => {
		return {
			name: '',
			url: '',
			valid: false,
			confirm: false,
			nameRules: [
				(v) => !!v || 'Пожалуйста введите название',
				(v) => (v && v.length >= 3) || 'Название слишком короткок - минимум 3 символов'
			],
			urlRules: [
				(v) => !!v || 'Пожалуйста введите url',
				(v) => (v && v.length >= 6) || 'Url слишком короткий - минимум 6 символов'
			],
			checkboxRules: [
				(v) => !!v || 'Для продолжения необходимо подтвердить',
			]
		}
	},

	computed: {
		...mapGetters({
			projects : 'GET_PROJECTS',
			preloader: 'GET_PRELOADER',
			error    : 'GET_ERROR'
		})
	},
	
	mounted() {
		this.getProjects();
		//console.log(this.$store.dispatch('getProgects'));
		//console.log(this.getProgects());
	},

	methods: {
		...mapActions(['getProjects', 'createProject']),
		

		/**
		 * Метод очищает форму
		 */
		clear() {
			this.name = '';
			this.url = '';
			this.confirm = '';
		},

		/**
		 * Метод создает новый проект
		 */
		nextCreate(event) {
			event.preventDefault();

			const data = new FormData();
			data.append('name', this.name)
			data.append('url', this.url)

			this.createProject(data);
		},

		/**
		 * Метод переключает на следующиц шаг после выбора проекта
		 */
		nextSelect() {
			console.log('select');
		}
	}
}
</script>
