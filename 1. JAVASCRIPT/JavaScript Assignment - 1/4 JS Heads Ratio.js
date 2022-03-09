function probability( k, n) {
    let ans = 0, i;
    for ( i = k; i <= n; ++i)

        // Probability of getting exactly i
        // heads out of n heads
        ans += fact[n] / (fact[i] * fact[n - i]);

    // 1 << n = pow(2, n)
    ans = ans / (1 << n);
    return ans;
}

 function precompute() {
    // Preprocess all factorial only upto 19,
    // as after that it will overflow
    fact[0] = fact[1] = 1;

    for ( let i = 2; i < 20; ++i)
        fact[i] = fact[i - 1] * i;
}

fact = Array(100).fill(0);
precompute();
document.write(probability(5, 11).toFixed(1) + "<br/>");
document.write(probability(8, 14).toFixed(1) + "<br/>");
document.write(probability(12, 18).toFixed(4)+"<br/>");
document.write(probability(12, 18).toFixed(7)+"<br/>");
