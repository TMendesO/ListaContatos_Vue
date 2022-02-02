new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    errorMessages: "",
    name: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    isNameInvalid() {
      const hasSpacer = this.name && this.name.indexOf(" ") >= 0;
      const splittedName = this.name && this.name.split(" ");
      const isValid =
        splittedName &&
        splittedName[0] &&
        splittedName[0].length >= 3 &&
        splittedName[1] &&
        splittedName[1].length >= 3;

      if (hasSpacer && isValid) {
      } else {
        this.errorMessages =
          this.name &&
          "Nome inválido (o nome deve conter nome e sobrenome com no mínimo 3 caracteres cada)";
      }

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
});
