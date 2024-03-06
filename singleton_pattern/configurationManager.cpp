#include <iostream>
#include <string>

using namespace std;

class ConfigurationManager {
private:
    static ConfigurationManager* instance;
    string databaseUrl;
    string username;
    string password;

    // Private constructor to prevent instantiation
    ConfigurationManager() {
        // Load configuration settings from a file or other source
        databaseUrl = "jdbc:mysql://localhost:3306/mydatabase";
        username = "username";
        password = "password";
        cout << "constructor is called..." << "\n";
    }

public:
    // Static method to get the singleton instance
    static ConfigurationManager* getInstance() {
        if (instance == nullptr) {
            instance = new ConfigurationManager();
        }
        return instance;
    }

    // Getters for configuration settings
    string getDatabaseUrl() {
        return databaseUrl;
    }

    string getUsername() {
        return username;
    }

    string getPassword() {
        return password;
    }
};

// Initialize static member outside of the class
ConfigurationManager* ConfigurationManager::instance = nullptr;

int main() {
    // Accessing configuration settings
    ConfigurationManager* configManager = ConfigurationManager::getInstance();
    string dbUrl = configManager->getDatabaseUrl();
    string username = configManager->getUsername();
    string password = configManager->getPassword();

    // Output configuration settings
    cout << "Database URL: " << dbUrl << endl;
    cout << "Username: " << username << endl;
    cout << "Password: " << password << endl;

    return 0;
}
