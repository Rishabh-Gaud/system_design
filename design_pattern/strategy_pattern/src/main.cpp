// main.cpp

#include <iostream>
#include "../include/bubble_sort.h"
#include "../include/merge_sort.h"
#include "../include/sorter.h"

int main() {
    std::vector<int> data = {5, 2, 7, 1, 9};

    // Select the strategy at runtime
    BubbleSort bubbleStrategy;
    Sorter sorter(&bubbleStrategy);
    sorter.sortData(data);
    std::cout << "Bubble Sort Result:";
    for (int val : data) {
        std::cout << " " << val;
    }
    std::cout << std::endl;

    // Change strategy at runtime
    MergeSort mergeStrategy;
    sorter.setStrategy(&mergeStrategy);
    sorter.sortData(data);
    std::cout << "Merge Sort Result:";
    for (int val : data) {
        std::cout << " " << val;
    }
    std::cout << std::endl;

    return 0;
}
