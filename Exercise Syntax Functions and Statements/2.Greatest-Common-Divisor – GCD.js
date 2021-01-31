function gcd(n1, n2) {
    if (n1 == 0)
    return n2;

while (n2 != 0) {
    if (n1 > n2)
        n1 = n1 - n2;
    else
        n2 = n2 - n1;
}

console.log(n1);
}

gcd(2154, 458);