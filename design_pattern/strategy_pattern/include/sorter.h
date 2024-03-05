// sorter.h

#pragma once
#include "sorting_strategy.h"

class Sorter {
private:
    SortingStrategy *strategy;

public:
    Sorter(SortingStrategy *strategy);
    void setStrategy(SortingStrategy *newStrategy);
    void sortData(std::vector<int> &data);
};
