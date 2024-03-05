// sorting_strategy.h

#pragma once
#include <vector>
using namespace std;

class SortingStrategy {
public:
    virtual void sort(vector<int> &data) = 0;
    virtual ~SortingStrategy() = default;
};
