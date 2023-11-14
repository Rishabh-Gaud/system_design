#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Strategy Interface
class SortingStrategy {
public:
    virtual void sort(vector<int> &data) = 0;
    virtual ~SortingStrategy() = default;
};

// Concrete Strategies
class BubbleSort : public SortingStrategy {
public:
    void sort(vector<int> &data) override {
        // Implement Bubble Sort (example sorting)
        std::sort(data.begin(), data.end());
    }
};

class MergeSort : public SortingStrategy {
public:
    void sort(vector<int> &data) override {
        // Implement Merge Sort (example sorting)
        std::sort(data.begin(), data.end());
    }
};

// Context
class Sorter {
private:
    SortingStrategy *strategy;

public:
    Sorter(SortingStrategy *strategy) : strategy(strategy) {}

    void setStrategy(SortingStrategy *newStrategy) {
        strategy = newStrategy;
    }

    void sortData(std::vector<int> &data) {
        strategy->sort(data);
    }
};

int main() {
    std::vector<int> data = {5, 2, 7, 1, 9};

    // Select the strategy at runtime
    BubbleSort bubbleStrategy;
    Sorter sorter(&bubbleStrategy);
    sorter.sortData(data);
    cout << "Bubble Sort Result:";
    for (int val : data) {
        cout << " " << val;
    }
    cout << endl;

    // Change strategy at runtime
    MergeSort mergeStrategy;
    sorter.setStrategy(&mergeStrategy);
    sorter.sortData(data);
    cout << "Merge Sort Result:";
    for (int val : data) {
        cout << " " << val;
    }
    cout << endl;

    return 0;
}
