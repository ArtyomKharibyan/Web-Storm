function name (n) {
    if (n === 1) {
        return 1
    }
    return n *= name(n - 1)
}
console.log(name(4))

