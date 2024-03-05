#include <iostream>
using namespace std;
class Singleton {
    private: 
        static Singleton* _instance;
        Singleton() {
            cout << "singleton class is created..."  << endl;
        }
    public: 
        static Singleton* getInstance() {
            if(_instance == nullptr) {
                _instance = new Singleton();
            }
            return _instance;
        }
        static void doSomething() {
        cout << "Something is Done." << endl;
    }
};
Singleton* Singleton::_instance = nullptr;

int main() {
    Singleton::getInstance()->doSomething();
    return 0;
}