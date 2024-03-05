// sorter.cpp

#include "../include/sorter.h"

Sorter::Sorter(SortingStrategy *strategy) : strategy(strategy) {}

void Sorter::setStrategy(SortingStrategy *newStrategy) {
    strategy = newStrategy;
}

void Sorter::sortData(std::vector<int> &data) {
    strategy->sort(data);
}
