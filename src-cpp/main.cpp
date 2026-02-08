#include <iostream>

extern "C" {
    // Test 1: Math
    int square(int n) {
        return n * n;
    }

    // Test 2: Logic
    const char* check_even(int n) {
        if (n % 2 == 0) return "Even";
        return "Odd";
    }
}

int main() {
    std::cout << "C++ WASM Loaded Successfully!" << std::endl;
    std::cout << "5 squared is: " << square(5) << std::endl;
    return 0;
}
