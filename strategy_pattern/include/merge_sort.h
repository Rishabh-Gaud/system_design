// merge_sort.h

#pragma once
#include "sorting_strategy.h"

class MergeSort : public SortingStrategy {
public:
    void sort(std::vector<int> &data) override;
};
