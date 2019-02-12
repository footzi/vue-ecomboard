<template>
    <v-layout align-center justify-center wrap fill-height flex>
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
						:label="'Вы уверены?'"
						color="cyan"
					></v-checkbox>
                    <v-btn @click="clear">Очистить</v-btn>
                    <v-btn @click="nextCreate" :disabled="!valid">Далее</v-btn>
                </v-form>
            </v-tab-item>

            <v-tab-item :key="2">
                <v-form @sumbit="nextSelect">
                    <v-radio-group>
                        <v-radio color="cyan" label="Цветочный блюз" value="progect1"></v-radio>
                        <v-radio color="cyan" label="Мастерская 'Ясень пень'" value="progect2"></v-radio>
                    </v-radio-group>
                    <v-btn @click="nextSelect">Далее</v-btn>
                </v-form>
            </v-tab-item>
        </v-tabs>
    </v-layout>
</template>

<script>
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
			] 
		}
	},

	methods: {
		clear() {
			this.name = '';
			this.url = '';
			this.confirm = '';
		},

		nextCreate(event) {
			event.preventDefault();
			console.log('create')
		},

		nextSelect() {
			console.log('select')
		}
	}
}
</script>
