class KeyValue<K, V> {

    constructor(
        public readonly key: K,
        public readonly value: V) {}

        print() {
            console.log(`key value: ${this.key} value: ${this.value}`);
        }
}

const p1 = new KeyValue("1", 10)

const val1 = p1.value

const p2 = new KeyValue("2", "TS")

const val2 = p2.value

