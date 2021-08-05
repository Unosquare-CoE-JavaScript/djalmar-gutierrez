
class SingletonTester {
    isSingleton(factory) {
        return factory() === factory()
    }
}