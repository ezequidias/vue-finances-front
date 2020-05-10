export default {
  methods: {
    amountColor (amount) {
      return amount < 0
        ? 'error--text text--lighter-1'
        : 'success--text text--lighter-1'
    }
  }
}
