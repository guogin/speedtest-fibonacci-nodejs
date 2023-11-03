class Fibonacci {
    recursive(n) {
        if (n < 2) {
            return BigInt(n);
        }

        let memory = new Array(n+1);
        return this._recursive(n, memory);
    }

    _recursive(n, memory) {
        if (n < 2) {
            memory[n] = BigInt(n);
            return memory[n];
        }
        if (memory[n] != undefined) {
            return memory[n];
        }

        memory[n] = this._recursive(n-1, memory) + this._recursive(n-2, memory);
        return memory[n];
    }

    iterative(n) {
        if (n < 2) {
            return BigInt(n);
        }

        let n0 = 0n, n1 = 1n;
        let ni = 0n;

        for (let i = 2; i <= n; ++i) {
            ni = n0 + n1;
            // step forward
            n0 = n1;
            n1 = ni;
        }

        return ni;
    }
}

// Main
let fib = new Fibonacci();
console.log(fib.recursive(100));