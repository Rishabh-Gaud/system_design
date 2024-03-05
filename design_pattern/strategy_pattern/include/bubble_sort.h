// bubble_sort.h

#pragma once
#include "sorting_strategy.h"

class BubbleSort : public SortingStrategy {
public:
    void sort(std::vector<int> &data) override;
};
